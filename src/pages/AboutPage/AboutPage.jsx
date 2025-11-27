import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <h2>About - 2025 Climate Watch</h2>
      <p className="about-content">
        이 사이트는 LG U+ 유레카 부트캠프 시간에 제작하였으며 <br/>2025년 이상기후 데이터를 기반으로 한 시뮬레이션 프로젝트입니다.
      </p>
      <div className="tech-stack">
        <h3>🧩사용 기술</h3>
        <ul>
          <li>React / React Router</li>
          <li>CSS</li>
          <li>Vite 기반 프로젝트</li>
          <li>더미 데이터 활용</li>
        </ul>
      </div>
      <div className="developer">
        <h3>💟개발자</h3>
        <p>김예린<br/>GitHub: <a href="https://github.com/yerroong" target="_blank">https://github.com/yerroong</a></p>
      </div>
    </div>
  );
}
