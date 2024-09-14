import React from 'react';

const Header = ({ scrollToSection }) => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#2563EB]">波音カフェ</h1>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          {['about', 'menu', 'gallery', 'testimonials', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={() => scrollToSection(section)}
                className="text-gray-600 hover:text-[#2563EB] hover:bg-[#F1F5F9] px-3 py-2 rounded transition duration-300"
              >
                {section === 'about' ? '概要' :
                 section === 'menu' ? 'メニュー' :
                 section === 'gallery' ? 'ギャラリー' :
                 section === 'testimonials' ? 'お客様の声' : 'コンタクト'}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="md:hidden text-[#2563EB]">
        <i className="fas fa-bars text-2xl"></i>
      </button>
    </div>
  </header>
);

export default Header;