import { useState } from "react";
import "./Header.css";
import logo from "../assets/vyoobam logo_rm.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          {/* Desktop Nav */}
          <nav className="nav-desktop">
            <a href="#">Find Learning</a>

            <div className="dropdown">
              <span>Discover Paths ▾</span>
              <div className="dropdown-menu">
                <a href="#">Courses</a>
                <a href="#">Internships</a>
                <a href="#">Jobs</a>
              </div>
            </div>

            <a href="#">Skill Lab</a>
            <a href="#">Earn Credentials</a>
            <a href="#">Career Launchpad</a>
            <a href="#">Who We Are</a>
          </nav>

          {/* Right Section */}
          <div className="right-section">
            <button className="saved-btn">Saved</button>
            <button className="login-btn">Join</button>
          </div>

          {/* Mobile Toggle */}
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <div className="mobile-header">
          <h3>Menu</h3>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <a href="#">Find Learning</a>

        <div>
          <p
            className="mobile-dropdown-title"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Discover Paths ▾
          </p>

          {dropdownOpen && (
            <div className="mobile-dropdown">
              <a href="#">Courses</a>
              <a href="#">Internships</a>
              <a href="#">Jobs</a>
            </div>
          )}
        </div>

        <a href="#">Skill Lab</a>
        <a href="#">Earn Credentials</a>
        <a href="#">Career Launchpad</a>
        <a href="#">Who We Are</a>

        <div className="mobile-buttons">
          <button className="saved-btn">Saved Items</button>
          <button className="login-btn">Join Now</button>
        </div>
      </div>
    </>
  );
}

export default Header;
