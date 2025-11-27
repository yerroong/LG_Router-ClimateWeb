import React, { useEffect, useState } from "react";
import "./InsightCard.css";

export default function InsightCard({ country, useMock = false }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Vite 환경변수에서 API Key 가져오기
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    country.city
  )}&appid=${apiKey}&units=metric`;

  // Mock 데이터 (테스트용)
  const mockData = {
    main: { temp: 22, humidity: 60 },
    weather: [{ description: "clear sky" }],
    name: country.city,
  };

  useEffect(() => {
    // useMock가 true이거나 API Key가 없으면 더미 데이터 사용
    if (useMock || !apiKey) {
      setWeather(mockData);
      setLoading(false);
      return;
    }

    // API 호출 함수
    async function fetchWeather() {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error("API fetch error");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [country.city, apiKey, useMock]);

    // 로딩 중 UI
  if (loading)
    return (
      <div className="insight-card loading">
        <div className="spinner"></div> Loading...
      </div>
    );
  if (error) return <div className="insight-card error">Error: {error}</div>;

  // 날씨 정보 가져오기 (값이 없으면 "-" 표시)
  const temp = weather.main?.temp ?? "-";
  const humidity = weather.main?.humidity ?? "-";
  const desc = weather.weather?.[0]?.description ?? "-";

  return (
    <div className="insight-card">
      <div className="card-header">
        <h3>{country.name}</h3>
        <span className="weather-desc">{desc}</span>
      </div>
      <div className="card-body">
        <div className="weather-info">
          <div className="info-item">
            <span className="label">🌡️ 온도</span>
            <span className="value">{temp}°C</span>
          </div>
          <div className="info-item">
            <span className="label">💧 습도</span>
            <span className="value">{humidity}%</span>
          </div>
        </div>
      </div>
      <button
        className="detail-btn"
        onClick={() =>
          window.open(
            `https://openweathermap.org/find?q=${encodeURIComponent(
              country.city
            )}`,
            "_blank"
          )
        }
      >
        자세히 보기
      </button>
    </div>
  );
}
