import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">✿</span>
        StudentNest
      </Link>

      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Student List
        </Link>

        <Link
          to="/favourites"
          className={
            location.pathname === "/favourites"
              ? "nav-link active"
              : "nav-link"
          }
        >
          ♡ Favourites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;