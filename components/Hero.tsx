import React from 'react';
import { SLOGANS, CTA_TEXT } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/id/29/1920/1080" // Mountain + Sky view
          alt="Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white/90 text-sm md:text-base font-medium tracking-[0.2em] mb-4 animate-fade-in-up">
          THE JOEUN PENSION
        </h2>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 animate-fade-in-up delay-100">
          산의 품에서,<br />
          <span className="italic">바다를 꿈꾸다</span>
        </h1>

        <p className="text-gray-200 text-lg md:text-xl font-light mb-10 max-w-2xl animate-fade-in-up delay-200">
          하늘과 바다가 맞닿은 곳, 오직 당신만을 위한 프라이빗 오션.
        </p>

        <button className="bg-white/10 backdrop-blur-sm border border-white/50 text-white px-8 py-4 rounded-full hover:bg-white hover:text-brand-primary transition duration-300 font-medium tracking-wide animate-fade-in-up delay-300">
          {CTA_TEXT}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;