import {
  Camera,
  FolderOpen,
  MoveLeft,
  Image,
  Video,
  Trash,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

export default function NewPostPage() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);

    setUploading(true);
    const uploadedImageUrls = [];

    for (let file of files) {
      const fileName = `${Date.now()}-${file.name}`;
      const { error } = await supabase.storage
        .from("images")
        .upload(fileName, file);

      if (error) {
        console.error("Error uploading image:", error);
        continue;
      }

      const { data } = supabase.storage.from("images").getPublicUrl(fileName);
      if (data?.publicUrl) {
        uploadedImageUrls.push(data.publicUrl);
      }
    }

    setImages((prevImages) => [...prevImages, ...uploadedImageUrls]);
    setUploading(false);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleCreatePost = async () => {
    if (images.length === 0 && !description) {
      alert("Please add some content before creating a post.");
      return;
    }

    const { error } = await supabase.from("posts").insert({
      photo: images[0] || null,
      name: "New Post", // Replace with a dynamic value if needed
      description,
      media: images,
      likes: 0,
    });

    if (error) {
      console.error("Error creating post:", error);
    } else {
      alert("Post created successfully!");
      navigate("/");
    }
  };

  return (
    <div className="relative h-screen w-full bg-white">
      {/* Header */}
      <div className="flex items-center p-4">
        <button className="p-2" onClick={() => navigate(-1)}>
          <MoveLeft size={22} />
        </button>
        <h1 className="text-lg font-bold ml-2">New Post</h1>
      </div>

      <div className="px-4 space-y-4">
        {/* Image Preview Section */}
        {images.length > 0 && (
          <div className="flex space-x-2 overflow-auto">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative w-full h-430 rounded-lg overflow-hidden"
              >
                <img
                  src={img}
                  alt={`uploaded-${index}`}
                  className="object-cover w-full h-full"
                />
                {/* Delete Image Button */}
                <button
                  className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded-full"
                  onClick={() => handleRemoveImage(index)}
                >
                  <Trash size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Conditional Textarea */}
        {images.length === 0 && (
          <textarea
            placeholder="What's on your mind?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-32 bg-gray-200 text-gray-600 rounded-lg p-4 resize-none focus:outline-none"
          ></textarea>
        )}

        {/* File and Camera Options */}
        {isMobile ? (
          <>
            <label className="flex items-center space-x-2 text-green-500 cursor-pointer">
              <Image size={22} />
              <span className="text-sm font-medium">Photos</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="absolute opacity-0 cursor-pointer"
              />
            </label>
            <button className="flex items-center space-x-2 text-red-500">
              <Video size={22} />
              <span className="text-sm font-medium">Video</span>
            </button>
          </>
        ) : (
          <>
            <label className="flex items-center space-x-2 text-[#DC3840] cursor-pointer">
              <FolderOpen size={22} />
              <span className="text-sm font-medium">Choose the file</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </>
        )}

        {/* Camera Option */}
        <button className="flex items-center space-x-2 text-blue-500">
          <Camera size={22} />
          <span className="text-sm font-medium">Camera</span>
        </button>

        {/* Textarea appears below media if images are uploaded */}
        {images.length > 0 && (
          <textarea
            placeholder="What's on your mind?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-32 bg-gray-200 text-gray-600 rounded-lg p-4 resize-none focus:outline-none"
          ></textarea>
        )}
      </div>

      {/* Create Button */}
      <div className="absolute bottom-6 left-0 w-full px-6">
        <button
          onClick={handleCreatePost}
          disabled={uploading}
          className={`w-full ${
            uploading ? "bg-gray-400" : "bg-black"
          } text-white py-3 rounded-full font-medium`}
        >
          {uploading ? "Uploading..." : "CREATE"}
        </button>
      </div>
    </div>
  );
}
