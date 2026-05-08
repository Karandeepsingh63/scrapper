import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar glass">
      <div className="container navbar-content">
        <div className="navbar-brand">
          <Link to="/" className="logo">
            <span className="logo-icon">S</span>
            <span>SCRAPPER</span>

          </Link>
        </div>

        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          
          {user ? (
            <>
              <Link to="/bookmarks" className="nav-link">Bookmarks</Link>
              <div className="user-section">
                <span className="user-welcome">Hi, {user.name}</span>
                <button onClick={logout} className="btn btn-secondary btn-sm">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
