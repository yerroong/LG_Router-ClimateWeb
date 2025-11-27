import { useState } from "react";
import ClimateCard from "../../components/ClimateCard/ClimateCard";
import Banner from "../../components/Banner/Banner";
import { climateData } from "../../data/climateData";
import "./HomePage.css";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");   
  const [searchQuery, setSearchQuery] = useState("");

  // 검색 버튼 눌렀을 때만 searchQuery 업데이트
  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  // searchQuery 기반 검색
  const filteredData = searchQuery
    ? climateData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : climateData;

  return (
    <div>
      <Banner />

      <section className="stats-banner">
        <p>📈 2025년 전 세계 이상기후 이슈 모음</p>
      </section>

      <section className="climate-section">
        <h2>주요 기후 이슈</h2>
        <p>관련 정보를 확인하고 상세 내용을 확인하세요.</p>

        <div className="search-wrapper">
          <input
            type="text"
            placeholder="주요 기후 이슈 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // 입력만 반영
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Enter로도 검색 실행
          />
          <img
            src="/img/search-icon.png"
            alt="검색"
            className="search-icon"
            onClick={handleSearch} 
          />
        </div>

        <div className="grid">
          {filteredData.length === 0 ? (
            <p className="no-result">일치하는 결과가 없습니다.</p>
          ) : (
            filteredData.map((item) => (
              <ClimateCard
                key={item.id}
                item={{
                  id: item.id,
                  title: item.title,
                  summary: item.summary,
                  image: item.image,
                  details: item.details,
                }}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
