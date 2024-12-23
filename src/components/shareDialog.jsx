import { Files } from "lucide-react";
import React, { useState } from "react";

const ShareDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-md p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Share post</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6">
          {[
            { name: "Twitter", icon: "🐦", bg: "#E9F6FB" },
            { name: "Facebook", icon: "📘", bg: "#E7F1FD" },
            { name: "Reddit", icon: "🔗", bg: "#FDECE7" },
            { name: "Discord", icon: "🎮", bg: "#ECF5FA" },
            { name: "WhatsApp", icon: "📱", bg: "#E7FBF0" },
            { name: "Messenger", icon: "💬", bg: "#E5F3FE" },
            { name: "Telegram", icon: "✈️", bg: "#E6F3FB" },
            { name: "Instagram", icon: "📷", bg: "#ff40c617" },
          ].map((platform, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <button
                className="flex items-center justify-center w-12 h-12 rounded-full "
                style={{ backgroundColor: platform.bg }} // Apply background color dynamically
              >
                <div className="text-xl">{platform.icon}</div>
              </button>
              <span className="text-sm text-gray-600 text-center">
                {platform.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <label className="text-sm font-bold text-black">Page Link</label>
          <div className="flex items-center mt-2 border p-2 rounded-lg">
            <input
              type="text"
              value="https://www.arnav/feed"
              readOnly
              className="w-full text-sm text-gray-600 outline-none"
            />
            <button
              onClick={() =>
                navigator.clipboard.writeText("https://www.arnav/feed")
              }
              className="text-gray-500 hover:text-black"
            >
              <Files size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareDialog;
