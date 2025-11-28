import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoomCard from './components/RoomCard';
import AmenitySection from './components/AmenitySection';
import ConciergeChat from './components/ConciergeChat';
import { ROOMS } from './constants';

const HomePage: React.FC = () => (
  <main className="animate-fade-in">
    <Hero />
    
    {/* Intro Section */}
    <section className="py-24 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-snug">
          "도시의 소음이 닿지 않는 곳,<br/>
          자연이 허락한 가장 고요한 럭셔리"
        </h2>
        <div className="w-16 h-1 bg-brand-accent mx-auto mb-8"></div>
        <p className="text-gray-600 leading-loose">
          더조은 펜션은 단순한 숙박을 넘어, 잃어버린 여유를 되찾는 공간입니다.
          산등성이 너머로 펼쳐지는 수평선을 바라보며, 
          셰프가 준비한 디너와 함께 잊지 못할 추억을 만들어보세요.
        </p>
      </div>
    </section>

    {/* Featured Room Teaser */}
    <section className="bg-brand-light py-20 px-6">
       <div className="max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row items-center justify-between mb-12">
           <h2 className="text-3xl font-serif text-gray-900">Rooms & Suites</h2>
           <a href="#/rooms" className="text-brand-primary hover:underline underline-offset-4 mt-4 md:mt-0">
             전체 객실 보기 &rarr;
           </a>
         </div>
         <RoomCard room={ROOMS[0]} />
       </div>
    </section>

    <AmenitySection />
    
    <footer className="bg-brand-dark text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-400">
        <div>
          <h3 className="text-2xl font-serif text-white mb-6">The Joeun</h3>
          <p>경상북도 어딘가 산속,<br/>바다가 보이는 그곳</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase">Contact</h4>
          <p className="mb-2">Tel: 010-1234-5678</p>
          <p>Email: stay@thejoeun.com</p>
          <p>Kakao: @더조은펜션</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase">Stay Connected</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Youtube</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-xs text-center text-gray-600">
        &copy; 2024 The Joeun Pension. All rights reserved.
      </div>
    </footer>
  </main>
);

const RoomsPage: React.FC = () => (
  <div className="pt-24 animate-fade-in bg-white min-h-screen">
    <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
      <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Our Rooms</h1>
      <p className="text-gray-600">각기 다른 매력을 지닌 더조은의 객실을 만나보세요.</p>
    </div>
    <div className="max-w-7xl mx-auto px-6 pb-20">
      {ROOMS.map((room, index) => (
        <RoomCard key={room.id} room={room} reversed={index % 2 !== 0} />
      ))}
    </div>
  </div>
);

const AmenitiesPage: React.FC = () => (
  <div className="pt-24 animate-fade-in">
    <AmenitySection />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans text-gray-900 antialiased selection:bg-brand-primary selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
        </Routes>
        <ConciergeChat />
      </div>
    </Router>
  );
};

export default App;