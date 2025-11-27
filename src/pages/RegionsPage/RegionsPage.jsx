import RegionCard from "../../components/RegionCard/RegionCard";
import { regionsData } from "../../data/regionData";
import "./RegionsPage.css";

export default function RegionsPage() {
  return (
    <div className="regions-page">
      <h2>Regions - 지역별 이상기후</h2>
      <p>카드를 클릭하면 해당 지역의 기후 이슈를 구글에서 확인할 수 있습니다.</p>

      <div className="regions-grid">
        {regionsData.map((item) => (
          <RegionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
