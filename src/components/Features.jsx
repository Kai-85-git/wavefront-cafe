import React from 'react';
import { MapPin, Sun, Calendar } from 'lucide-react';

const FeatureItem = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="bg-[#DBEAFE] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => (
  <section id="about" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        波音カフェの特徴
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureItem
          icon={<MapPin className="text-[#2563EB] w-8 h-8" />}
          title="絶景のロケーション"
          description="美しい海を一望できる最高のロケーションで、心地よい時間をお過ごしいただけます。"
        />
        <FeatureItem
          icon={<Sun className="text-[#2563EB] w-8 h-8" />}
          title="朝日から夕日まで"
          description="早朝から夕方まで営業しているので、一日中海の景色を楽しみながらお過ごしいただけます。"
        />
        <FeatureItem
          icon={<Calendar className="text-[#2563EB] w-8 h-8" />}
          title="簡単予約システム"
          description="オンライン予約システムで、簡単に席の確保ができます。特別な日のご予約もお待ちしております。"
        />
      </div>
    </div>
  </section>
);

export default Features;