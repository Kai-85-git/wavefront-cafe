import React from 'react';

const Footer = () => (
  <footer className="bg-[#2563EB] text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">波音カフェ</h3>
          <p>〒123-4567</p>
          <p>○○県△△市海岸通り1-2-3</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">営業時間</h3>
          <p>月〜金: 7:00 - 21:00</p>
          <p>土日祝: 6:00 - 22:00</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">フォローする</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="hover:text-blue-200">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="hover:text-blue-200">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-blue-400 pt-8">
        <p className="text-center text-sm">
          &copy; 2024 波音カフェ. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;