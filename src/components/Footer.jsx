import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <div className="footer-logo-name">
              &lt;/Enqora&gt;
            </div>

            <span>solutions</span>
          </Link>

          <p>
            Building innovative, scalable, and future-ready digital
            solutions that help businesses grow.
          </p>

          {/* SOCIAL LINKS */}
          <div className="footer-socials">

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              in
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              ig
            </a>

          </div>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">

          <h4>Quick Links</h4>

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/portfolio">
            Portfolio
          </Link>

          <Link to="/contact">
            Contact Us
          </Link>

        </div>


        {/* SERVICES */}
        <div className="footer-column">

          <h4>Our Services</h4>

          <Link to="/services">
            Software Development
          </Link>

          <Link to="/services">
            Website Development
          </Link>

          <Link to="/services">
            App Development
          </Link>

          <Link to="/services">
            AI & ML Development
          </Link>

          <Link to="/services">
            IT Consulting
          </Link>

        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">

          <h4>Get In Touch</h4>

          <a href="mailto:enqorasolutionshr@gmail.com">
            <Mail size={17} />

            <span>
              enqorasolutionshr@gmail.com
            </span>
          </a>


          <div className="footer-location">

            <MapPin size={17} />

            <span>
              India
            </span>

          </div>


          <Link
            to="/contact"
            className="footer-contact-btn"
          >
            Start a Project

            <ArrowUpRight size={17} />

          </Link>

        </div>

      </div>


      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <div className="container footer-bottom-content">

          <p>
            © {new Date().getFullYear()} Enqora Solutions.
            All rights reserved.
          </p>


          <div className="footer-legal">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;