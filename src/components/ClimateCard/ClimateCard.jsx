import { Link } from "react-router-dom";
import "./ClimateCard.css";

export default function ClimateCard({ item }) {
  return (
    <Link to={`/climate/${item.id}`} className="climate-card">
      <img src={item.image} alt={item.title} className="card-img" />
      <h3 className="card-title">{item.title}</h3>
      <p className="card-summary">{item.summary}</p>
    </Link>
  );
}
