import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const token = localStorage.getItem("token");
  return (
    <nav style={getStyles(isMobile).nav}>
      <h2 style={getStyles(isMobile).logo}>Student Activities Hub</h2>

      <div style={getStyles(isMobile).links}>
        <Link
          to="/"
          style={getStyles(isMobile).link}
          onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
          onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
        >
          Home
        </Link>
        <Link
          to="/events"
          style={getStyles(isMobile).link}
          onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
          onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
        >
          Events
        </Link>
        <Link
          to="/my-events"
          style={getStyles(isMobile).link}
          onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
          onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
        >
          My Events
        </Link>
        <Link
          to="/clubs"
          style={getStyles(isMobile).link}
          onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
          onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
        >
          Clubs
        </Link>

        <Link
          to="/explore"
          style={getStyles(isMobile).link}
          onMouseEnter={(e) => (e.target.style.color = "#a78bfa")}
          onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
        >
          Explore
        </Link>

        {!token && (
          <Link
            to="/login"
            style={getStyles(isMobile).link}
            onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
            onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
          >
            Login
          </Link>
        )}

        {!token && (
          <Link
            to="/register"
            style={getStyles(isMobile).link}
            onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
            onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
          >
            Register
          </Link>
        )}

        {token && (
          <span
            style={getStyles(isMobile).link}
            onClick={handleLogout}
            onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
            onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
          >
            Logout
          </span>
        )}
      </div>
    </nav>
  );
}

const getStyles = (isMobile) => ({
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isMobile ? "10px 16px" : "12px 40px",
    backdropFilter: "blur(12px)",
    background:
      "linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 58, 138, 0.8))",
    borderBottom: "1px solid rgba(37, 99, 235, 0.3)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  logo: {
    margin: 0,
    fontSize: isMobile ? "16px" : "22px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    color: "white",
    whiteSpace: isMobile ? "nowrap" : "normal",
  },
  links: {
    display: "flex",
    gap: isMobile ? "10px" : "20px",
    flexWrap: isMobile ? "wrap" : "nowrap",
  },
  link: {
    color: "#e2e8f0",
    textDecoration: "none",
    fontWeight: "500",
    transition: "all 0.2s ease",
    fontSize: isMobile ? "13px" : "14px",
    cursor: "pointer",
  },
  logout: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "inherit",
    fontFamily: "inherit",
    padding: "0",
  },
});

const styles = getStyles(false);

export default Navbar;
