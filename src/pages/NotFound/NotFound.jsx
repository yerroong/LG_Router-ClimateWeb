import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
      textAlign: "center",
    }}>
      <h2>페이지를 찾을 수 없습니다.</h2>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "24px",
          padding: "12px 20px",
          backgroundColor: "#1a1a1a",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
