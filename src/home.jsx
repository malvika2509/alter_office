import React from "react";
import CardComponent from "./components/cardComponent";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const cardData = [
    {
      photo:
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      name: "Aarav",
      time: "2 hours ago",
      description:
        "Just arrived in New York City! Excited to explore the sights, sounds, and energy of this amazing place. 🗽 #NYC #Travel",
      media: [
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
      ],
      likes: 67,
      color: "#F7EBFF",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
      name: "Sneha",
      time: "2 hours ago",
      description:
        "Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary. 💕 #SelfCare #MeTime #Wellness",
      media: [
        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      ],
      likes: 47,
      color: "#FFFAEE",
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-auto bg-gray-50">
      {/* Header Section */}
      <div
        className="flex items-center space-x-4 p-6 bg-white"
        onClick={() => navigate("/profile")}
      >
        <img
          src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
          alt="User profile"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-500 text-sm">Welcome Back,</p>
          <h1 className="font-semibold text-lg">Sakshi Agarwal</h1>
        </div>
      </div>

      {/* Feeds Section */}
      <div className="px-4">
        <h2 className="font-bold text-xl mb-4">Feeds</h2>
        <div className="space-y-6">
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              photo={card.photo}
              name={card.name}
              time={card.time}
              description={card.description}
              media={card.media}
              likes={card.likes}
              color={card.color}
            />
          ))}
        </div>
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
