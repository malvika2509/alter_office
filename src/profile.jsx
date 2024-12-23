import React from "react";
import MediaCard from "./components/profileMediaCard";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  const cardData = [
    {
      media: [
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80",
      ],
      title: "Design meet",
      likes: 67,
    },
    {
      media: [
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80",
      ],
      title: "Nature",
      likes: 47,
    },
    {
      media: [
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80",
      ],
      title: "City Lights",
      likes: 112,
    },
  ];

  return (
    <div className="relative h-screen w-full bg-gray-50">
      {/* Background Section */}
      <div className="relative h-48 w-full">
        {/* Background Image with Gradient */}
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#00000033] to-[#00000077]"></div>
        </div>

        {/* Back Button */}
        <button
          className="absolute top-4 left-4 bg-white p-2 rounded-full shadow"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Profile Section */}
      <div className="relative bg-white p-4 rounded-t-3xl -mt-12">
        <div className="flex items-center space-x-4">
          {/* Profile Picture */}
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fHdvbWFufGVufDB8fHx8MTY4Mjk1NjU0OA&ixlib=rb-1.2.1&q=80&w=400"
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover border-4 border-white aspect-square -mt-12"
          />
          {/* Edit Profile Button */}
          <button
            className="px-4 py-2 w-[90%] border border-[#00000057] rounded-full text-gray-700 hover:bg-gray-100"
            onClick={() => navigate("/edit")}
          >
            Edit Profile
          </button>
        </div>

        {/* User Info Section */}
        <div className="mt-4">
          <h1 className="text-lg font-bold">Sakshi Agarwal</h1>
          <p className="text-gray-600 text-sm mt-2">
            Just someone who loves designing, sketching, and finding beauty in
            the little things 💕
          </p>
        </div>
      </div>

      {/* Posts Section */}
      <h2 className="font-bold text-xl px-4 mt-4">Posts</h2>
      <div className="px-4 pt-2 grid grid-cols-2  gap-2">
        {cardData.map((card, index) => (
          <MediaCard
            key={index}
            media={card.media}
            title={card.title}
            likes={card.likes}
          />
        ))}
      </div>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-6 right-6 bg-black text-white rounded-full p-4 shadow-lg "
        onClick={() => navigate("/post")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
}
