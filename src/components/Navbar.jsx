import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">

        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-name">
            &lt;/Enqora&gt;
          </div>

          <span>solutions</span>
        </Link>


        {/* DESKTOP NAVIGATION */}
        <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
            onClick={closeMenu}
          >
            Services
          </Link>

          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            onClick={closeMenu}
          >
            About Us
          </Link>

          <Link
            to="/portfolio"
            className={location.pathname === "/portfolio" ? "active" : ""}
            onClick={closeMenu}
          >
            Portfolio
          </Link>

          <Link
            to="/why-us"
            className={location.pathname === "/why-us" ? "active" : ""}
            onClick={closeMenu}
          >
            Why Us
          </Link>

          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={closeMenu}
          >
            Contact Us
          </Link>

          {/* MOBILE GET IN TOUCH */}
          <Link
            to="/contact"
            className="mobile-nav-button btn btn-primary"
            onClick={closeMenu}
          >
            Get In Touch
            <ArrowRight size={17} />
          </Link>

        </div>


        {/* DESKTOP GET IN TOUCH */}
        <Link
          to="/contact"
          className="btn btn-primary nav-button"
        >
          Get In Touch
          <ArrowRight size={17} />
        </Link>


        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;