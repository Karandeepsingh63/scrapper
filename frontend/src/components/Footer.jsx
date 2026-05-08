import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container footer-content">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="logo-icon">S</span>
            <span className="footer-brand-text">SCRAPPER</span>
          </div>
          <p className="footer-text">© 2026 Scrapper. All rights reserved.</p>
        </div>

        <nav className="footer-links" aria-label="Footer links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <Link to="/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

