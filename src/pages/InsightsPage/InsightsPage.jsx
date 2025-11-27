import InsightCard from "../../components/insightCard/InsightCard";
import { insightCountries } from "../../data/insightData";
import "./InsightsPage.css";

export default function InsightsPage() {
  // useMock = true로 하면 API 키 없어도 더미 보임
  const useMock = false; 

  return (
    <div className="regions-page insights-page">
      <h2>Insights - 실시간 기후 인사이트</h2>
      <p>
        OpenWeatherMap API를 사용한 실시간 기온/습도/날씨 요약입니다.
        카드를 클릭하면 OpenWeatherMap의 상세 페이지로 이동합니다.
      </p>

      <div className="regions-grid">
        {insightCountries.map((c) => (
          <InsightCard key={c.code} country={c} useMock={useMock} />
        ))}
      </div>
    </div>
  );
}
