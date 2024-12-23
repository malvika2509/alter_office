import { MoveLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfilePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("Sakshi Agarwal");
  const [bio, setBio] = useState(
    "Just someone who loves designing, sketching, and finding beauty in the little things 💕"
  );
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fHdvbWFufGVufDB8fHx8MTY4Mjk1NjU0OA&ixlib=rb-1.2.1&q=80&w=400"
  );

  const handleSave = () => {
    // Perform save action, e.g., sending data to the backend or updating the state
    alert(`Saved:
      Name: ${name}
      Bio: ${bio}
      Image: ${image}`);
  };

  return (
    <div className="relative h-screen w-full bg-gray-50">
      {/* Background Section */}
      <div className="relative h-48 w-full">
        {/* Background Image with Gradient */}
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8c2VhcmNofDJ8fHN1bnNldHxlbnwwfHx8fDE2ODI5NTU4NzE&auto=format&fit=crop&w=3540&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#00000033] to-[#00000077]"></div>
        </div>

        {/* Back Button */}
        <button
          className="absolute top-4 left-4 bg-white p-2 rounded-full shadow"
          onClick={() => navigate(-1)}
        >
          <MoveLeft size={24} />
        </button>
      </div>

      {/* Profile Section */}
      <div className="relative bg-white p-4 rounded-t-3xl -mt-12">
        <div className="flex items-center space-x-4">
          {/* Profile Picture */}
          <img
            src={image}
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover border-4 border-white aspect-square -mt-12"
          />
        </div>
      </div>

      {/* Edit Profile Form */}
      <div className="px-6 ">
        {/* Name Field */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-1 mt-2"
          />
        </div>

        {/* Bio Field */}
        <div className="mb-6">
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700"
          >
            Bio
          </label>
          <textarea
            id="bio"
            rows="3"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-1 resize-none"
          />
        </div>

        {/* Save Button */}
        <div className="absolute bottom-6 left-0 w-full px-6">
          <button
            onClick={handleSave}
            className="w-full bg-black text-white py-3 rounded-full font-medium"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}
