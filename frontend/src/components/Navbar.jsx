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
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/events" style={styles.link}>
          Events
        </Link>
        <Link to="/my-events" style={styles.link}>
          My Events
        </Link>
        <Link to="/clubs" style={styles.link}>
          Clubs
        </Link>

        {!token && (
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        )}

        {!token && (
          <Link to="/register" style={styles.link}>
            Register
          </Link>
        )}

        {token && (
          <button onClick={handleLogout} style={styles.logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    background: "linear-gradient(90deg, #0f172a, #1e3a8a)",
    color: "white",
  },
  logo: {
    margin: 0,
    fontWeight: "600",
    fontSize: "20px",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    position: "relative",
    paddingBottom: "4px",
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
