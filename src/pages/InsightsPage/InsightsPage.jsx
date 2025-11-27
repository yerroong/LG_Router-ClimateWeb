import React from "react";
import "./InsightsPage.css";

export default function InsightsPage() {
  const insightsData = [
    {
      id: 1,
      title: "CO₂ 농도",
      value: "420 ppm",
      description: "2025년 전 세계 평균 CO₂ 농도가 사상 최고치를 기록했습니다.",
    },
    {
      id: 2,
      title: "평균 지구 온도 상승",
      value: "+1.3°C",
      description: "전 세계 평균 온도가 산업화 이전 대비 1.3°C 상승했습니다.",
    },
    {
      id: 3,
      title: "폭염 발생일",
      value: "평균 +24%",
      description: "2025년 폭염 일수가 평균보다 24% 증가했습니다.",
    },
    {
      id: 4,
      title: "홍수 피해 증가",
      value: "50건",
      description: "이상기후로 인한 홍수 피해 사례가 증가했습니다.",
    },
  ];

  return (
    <div className="insights-page">
      <h2>Insights - 글로벌 기후 트렌드</h2>
      <p>2025년 이상기후 데이터 기반 주요 지표와 통계를 확인하세요.</p>

      <div className="insights-grid">
        {insightsData.map((item) => (
          <div key={item.id} className="insights-card">
            <h3>{item.title}</h3>
            <p className="value">{item.value}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
