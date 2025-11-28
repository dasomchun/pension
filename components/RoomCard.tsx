import React from 'react';
import { Room } from '../types';
import { Check } from 'lucide-react';

interface RoomCardProps {
  room: Room;
  reversed?: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, reversed = false }) => {
  return (
    <div className={`flex flex-col lg:flex-row ${reversed ? 'lg:flex-row-reverse' : ''} gap-8 lg:gap-16 items-center py-16`}>
      {/* Image Side */}
      <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-2xl shadow-xl">
        <img
          src={room.imageUrl}
          alt={room.name}
          className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500"></div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 space-y-6 px-4">
        <div>
          <h3 className="text-brand-accent font-medium text-sm tracking-widest uppercase mb-2">
            {room.engName}
          </h3>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            {room.name}
          </h2>
          <p className="text-xl text-gray-600 font-light italic border-l-4 border-brand-sand pl-4 mb-4">
            "{room.summary}"
          </p>
        </div>

        <p className="text-gray-600 leading-relaxed text-justify">
          {room.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4">
          {room.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
              <Check size={16} className="text-brand-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <div>
            <span className="text-xs text-gray-500 block mb-1">1박 기준</span>
            <span className="text-2xl font-serif font-bold text-gray-900">{room.price}</span>
          </div>
          <button className="bg-brand-dark text-white px-8 py-3 rounded-lg hover:bg-brand-primary transition">
            자세히 보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;