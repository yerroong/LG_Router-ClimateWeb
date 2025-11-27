import { useState, useEffect } from "react";
import "./Banner.css";

export default function Banner() {
  const [index, setIndex] = useState(0);

  const banners = [
    {
      img: "/img/banner1.jpg",
      title: "2025 Climate Watch",
      text: "기후 위기 현황을 시각적으로 살펴보세요.",
      clickable: false,
    },
    {
      img: "/img/banner2.jpg",
      title: "2025 Global Temperature Report",
      text: "올해 지구 평균 온도 변화 분석",
      clickable: true,
    },
    {
      img: "/img/banner3.jpg",
      title: "2025 Extreme Weather Outlook",
      text: "전 세계 이상 기후 트렌드",
      clickable: true,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  });

  const handleBannerClick = (item) => {
    if (!item.clickable) return;
    window.open(`https://www.google.com/search?q=${item.title}`, "_blank");
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        {banners.map((item, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${item.img})` }}
            onClick={() => handleBannerClick(item)}
          >
  <div className="gray-overlay" />

  <div className="banner-text">
    <h2>{item.title}</h2>
    <p>{item.text}</p>
  </div>
</div>
        ))}

        <div className="indicator">
          {banners.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
