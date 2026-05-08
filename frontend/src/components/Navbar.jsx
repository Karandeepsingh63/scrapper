import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const { user, logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        borderBottom: "1px solid #ccc",
      }}
    >

      <div>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >NEWS
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >

        <Link to="/">
          Home
        </Link>

        {user ? (
          <>
            <Link to="/bookmarks">
              Bookmarks
            </Link>

            <button onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>
          </>
        )}

      </div>

    </nav>
  );
};

export default Navbar;