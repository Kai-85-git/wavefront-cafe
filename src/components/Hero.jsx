import React from 'react';

const Hero = ({ scrollToSection }) => (
  <section
    className="relative h-screen bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://ucarecdn.com/667af395-2327-4457-a3e5-7fa7a1839f92/-/format/auto/')",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-5xl font-bold mb-4 animate-fade-in">
          波音カフェへようこそ
        </h2>
        <button
          onClick={() => scrollToSection("menu")}
          className="bg-[#2563EB] text-white font-bold py-6 px-12 rounded-lg text-2xl hover:bg-[#1d4ed8] transition duration-300"
        >
          メニューを見る
        </button>
      </div>
    </div>
  </section>
);

export default Hero;