import { useParams, Link } from "react-router-dom";
import { climateData } from "../../data/climateData"; // 15개 뉴스 데이터
import "./DetailPage.css";

export default function DetailPage() {
  const { climateId } = useParams();
  const item = climateData.find((c) => c.id === Number(climateId));

  if (!item) return <div style={{ padding: "40px", textAlign: "center" }}>데이터 없음</div>;

  return (
    <div className="detail">
      <img src={item.image} alt={item.title} className="detail-img" />
      <h2 className="detail-title">{item.title}</h2>
      <p className="summary">{item.summary}</p>
      <ul>
        {item.details.map((d, idx) => (
          <li key={idx}>{d}</li>
        ))}
      </ul>

      <div className="back-wrapper">
        <Link to="/" className="back">
          ← 돌아가기
        </Link>
      </div>
    </div>
  );
}
