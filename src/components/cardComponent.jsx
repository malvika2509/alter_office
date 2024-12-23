import { Heart, Send } from "lucide-react";
import React, { useState } from "react";
import ShareDialog from "./shareDialog";

const CardComponent = ({
  photo,
  name,
  time,
  description,
  media,
  likes,
  color,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div
      className="max-w-sm mx-auto rounded-2xl p-4"
      style={{ backgroundColor: color }} // Use inline style for dynamic color
    >
      {/* Profile Section */}
      <div className="flex items-center space-x-3">
        <img
          src={photo}
          alt={`${name}'s profile`}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <h2 className="font-bold text-lg">{name}</h2>
          <p className="text-gray-500 text-sm">{time}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mt-3">{description}</p>

      {/* Media List */}
      <div className="flex gap-2 mt-3">
        {media.map((item, index) => {
          const isVideo = item.endsWith(".mp4") || item.endsWith(".webm");

          return (
            <div
              key={index}
              className={`rounded-lg overflow-hidden ${
                media.length === 2
                  ? index === 0
                    ? "w-[65%]"
                    : "w-[35%]"
                  : "w-full"
              } h-[200px]`} // Fixed height, dynamic width
            >
              {isVideo ? (
                <video
                  src={item}
                  controls
                  className="object-cover w-full h-full"
                  alt={`Media ${index + 1}`}
                />
              ) : (
                <img
                  src={item}
                  alt={`Media ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-1 text-[#D95B7F]">
          <Heart size={20} fill="#D95B7F" />
          <span>{likes}</span>
        </div>
        <button
          className="flex items-center py-2 px-4 rounded-[200px] space-x-1 text-gray-500 bg-[#00000012]"
          onClick={() => setIsDialogOpen(true)}
        >
          <Send size={18} />
          <span>Share</span>
        </button>
        <ShareDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      </div>
    </div>
  );
};

export default CardComponent;
