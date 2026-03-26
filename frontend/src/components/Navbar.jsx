import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const token = localStorage.getItem("token");
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Student Activities Hub</h2>

      <div style={styles.links}>
        <Link
          to="/"
          style={styles.link}
          onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
          onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
        >
          Home
        </Link>
        <Link
          to="/events"
          style={styles.link}
          onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
          onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
        >
          Events
        </Link>
        <Link
          to="/my-events"
          style={styles.link}
          onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
          onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
        >
          My Events
        </Link>
        <Link
          to="/clubs"
          style={styles.link}
          onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
          onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
        >
          Clubs
        </Link>

        {!token && (
          <Link
            to="/login"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
            onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
          >
            Login
          </Link>
        )}

        {!token && (
          <Link
            to="/register"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
            onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
          >
            Register
          </Link>
        )}

        {token && (
          <span
  style={styles.link}
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

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 40px",
    backdropFilter: "blur(12px)",
    background:
      "linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 58, 138, 0.8))",
    borderBottom: "1px solid rgba(37, 99, 235, 0.3)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  logo: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    color: "white",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#e2e8f0",
    textDecoration: "none",
    fontWeight: "500",
    transition: "all 0.2s ease",
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
};

export default Navbar;
