import React, { useState } from "react";

const MediaCard = ({ media, title, likes }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-md w-full h-64"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 85.33%), url(${
          media[currentIndex - 1]
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Media Counter (if multiple images) */}
      {media.length > 1 && (
        <div className="absolute top-2 right-2 bg-white  text-black text-sm font-medium px-2 py-1 rounded-full">
          {currentIndex}/{media.length}
        </div>
      )}

      {/* Content Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent rounded-t-2xl">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <div className="flex items-center space-x-2 mt-2 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
