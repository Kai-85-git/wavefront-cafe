"use client";
import React from "react";

function MainComponent() {
  const [twitterUrl, setTwitterUrl] = React.useState("");

  React.useEffect(() => {
    fetch("/api/twitter-profile-shortcut", {
      method: "POST",
      body: JSON.stringify({ username: "KaiArt4" }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.twitterProfileUrl) {
          setTwitterUrl(data.twitterProfileUrl);
        }
      })
      .catch((error) => console.error("Error fetching Twitter URL:", error));
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#2563EB]">波音カフェ</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#about"
                  onClick={() => scrollToSection("about")}
                  className="text-gray-600 hover:text-[#2563EB] hover:bg-[#F1F5F9] px-3 py-2 rounded transition duration-300"
                >
                  概要
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={() => scrollToSection("menu")}
                  className="text-gray-600 hover:text-[#2563EB] hover:bg-[#F1F5F9] px-3 py-2 rounded transition duration-300"
                >
                  メニュー
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-600 hover:text-[#2563EB] hover:bg-[#F1F5F9] px-3 py-2 rounded transition duration-300"
                >
                  ギャラリー
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-600 hover:text-[#2563EB] hover:bg-[#F1F5F9] px-3 py-2 rounded transition duration-300"
                >
                  お客様の声
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-600 hover:text-[#2563EB] hover:bg-[#F1F5F9] px-3 py-2 rounded transition duration-300"
                >
                  コンタクト
                </a>
              </li>
            </ul>
          </nav>
          <button className="md:hidden text-[#2563EB]">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </header>
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
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            波音カフェの特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#DBEAFE] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-pin text-[#2563EB] text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">絶景のロケーション</h3>
              <p className="text-gray-600">
                美しい海を一望できる最高のロケーションで、心地よい時間をお過ごしいただけます。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#DBEAFE] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-[#2563EB] text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">朝日から夕日まで</h3>
              <p className="text-gray-600">
                早朝から夕方まで営業しているので、一日中海の景色を楽しみながらお過ごしいただけます。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#DBEAFE] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-[#2563EB] text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">簡単予約システム</h3>
              <p className="text-gray-600">
                オンライン予約システムで、簡単に席の確保ができます。特別な日のご予約もお待ちしております。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="menu" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">人気メニュー</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://ucarecdn.com/cd932a97-ff87-40d1-a19f-c969ecd1a924/-/format/auto/"
                alt="新鮮な魚介類がたっぷりのシーフードプラッター"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  シーフードプラッター
                </h3>
                <p className="text-gray-600">2,800円</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://ucarecdn.com/7bd2e3e1-26e4-40b7-ac70-2aa6ae1ce2a0/-/format/auto/"
                alt="ふわふわのパンケーキにシロップをかけた波音スペシャル"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  波音スペシャルパンケーキ
                </h3>
                <p className="text-gray-600">1,500円</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://ucarecdn.com/7039cd00-41a5-45fe-a8b7-fb7f98691171/-/format/auto/"
                alt="サンセットカラーのさわやかなモヒート"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  サンセットモヒート
                </h3>
                <p className="text-gray-600">900円</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://ucarecdn.com/16078c60-babf-4e51-aeb9-6a7f21002c5c/-/format/auto/"
              alt="波音カフェの外観"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://ucarecdn.com/108153f4-86a5-4d49-af56-cecd91325915/-/format/auto/"
              alt="海を眺めるカフェの窓際席"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://ucarecdn.com/3f545d65-fb10-4b0e-82ae-adcb57bb4e4f/-/format/auto/"
              alt="カフェの内装"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://ucarecdn.com/ab71495c-0ab1-41d9-9ffb-c73f5bcdd1d3/-/format/auto/"
              alt="海辺のカフェテラス"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://ucarecdn.com/c06b17b2-4416-4cb4-92bb-800a2e166738/-/format/auto/"
              alt="カフェのドリンクメニュー"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://ucarecdn.com/a77f9b79-fbe2-4df9-8d73-bbcd817aeee3/-/format/auto/"
              alt="夕日を背景にしたカフェ"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://ucarecdn.com/ac57637e-dba8-409e-b368-b519be77fc39/-/format/auto/"
              alt="カフェのデザートプレート"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://ucarecdn.com/c8ff43f8-13c7-432a-91a9-b2e8c464a9ec/-/format/auto/"
              alt="海辺のカフェの朝の風景"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-16 bg-[#F1F5F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">お客様の声</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-4">
                海を見ながらのんびりできて最高でした。パンケーキも絶品！
              </p>
              <p className="font-bold">田中さゆり</p>
              <div className="text-yellow-400">★★★★★</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-4">
                夕日を見ながらのディナーは忘れられない体験になりました。
              </p>
              <p className="font-bold">佐藤健太</p>
              <div className="text-yellow-400">★★★★★</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-4">
                朝食にここを選んで正解でした。静かな雰囲気で一日のスタートにぴったり。
              </p>
              <p className="font-bold">山田美咲</p>
              <div className="text-yellow-400">★★★★☆</div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">お問い合わせ</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="お名前"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="メールアドレス"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="電話番号"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
              <textarea
                name="message"
                placeholder="メッセージ"
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#2563EB] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#1d4ed8] transition duration-300"
              >
                送信
              </button>
            </form>
          </div>
        </div>
      </section>
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
                <a href={twitterUrl} className="hover:text-blue-200">
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
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;