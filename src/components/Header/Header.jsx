import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="cw-header">
      <div className="cw-container">
        {/* 로고 */}
        <Link to="/" className="cw-logo">
          ClimateWatch<span>2025</span>
        </Link>

        {/* 네비게이션 */}
        <nav className="cw-nav">
          <NavLink to="/" end className="cw-nav-item">
            Home
          </NavLink>

          <NavLink to="/regions" className="cw-nav-item">
            Regions
          </NavLink>

          <NavLink to="/insights" className="cw-nav-item">
            Insights
          </NavLink>

          <NavLink to="/about" className="cw-nav-item">
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
