import React from 'react';
import { AMENITIES } from '../constants';
import { Waves, Utensils, Droplets, Flame, Coffee } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  pool: <Waves size={32} />,
  chef: <Utensils size={32} />,
  spa: <Droplets size={32} />,
  fire: <Flame size={32} />,
  coffee: <Coffee size={32} />,
};

const AmenitySection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-brand-accent font-medium tracking-widest uppercase mb-3">Special Offer</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Exclusive Amenities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            더조은 펜션에 머무시는 동안 누릴 수 있는 특별한 혜택들을 소개합니다.<br/>
            세심하게 준비된 서비스로 당신의 휴식을 완성하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES.map((amenity) => (
            <div key={amenity.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={amenity.imageUrl} 
                  alt={amenity.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full text-brand-primary shadow-sm">
                  {iconMap[amenity.icon]}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {amenity.engTitle}
                </h4>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitySection;