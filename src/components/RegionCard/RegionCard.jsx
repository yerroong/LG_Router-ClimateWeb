import React from "react";
import "./RegionCard.css";

export default function RegionCard({ item }) {
  const handleClick = () => {
    const query = encodeURIComponent(`${item.name} ${item.summary}`);
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  };

  return (
    <div className="region-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={item.image} alt={item.name} className="region-img" />
      <h3 className="region-title">{item.name}</h3>
      <p className="region-summary">{item.summary}</p>
    </div>
  );
}
