import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const nextIsMobile = window.innerWidth < 768;
      setIsMobile(nextIsMobile);

      if (!nextIsMobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setMenuOpen(false);
    navigate("/login");
  };

  const token = localStorage.getItem("token");
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/events", label: "Events" },
    { to: "/my-events", label: "My Events" },
    { to: "/clubs", label: "Clubs" },
    { to: "/explore", label: "Explore AI", isFeatured: true },
  ];

  if (!token) {
    navItems.push(
      { to: "/login", label: "Login" },
      { to: "/register", label: "Register" },
    );
  }

  const styles = getStyles(isMobile);

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logoLink}>
        <h2 style={styles.logo}>Student Activities Hub</h2>
      </Link>

      {isMobile && (
        <button
          type="button"
          style={styles.menuButton}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span style={styles.menuBar}></span>
          <span style={styles.menuBar}></span>
          <span style={styles.menuBar}></span>
        </button>
      )}

      <div
        style={{
          ...styles.links,
          ...(isMobile && !menuOpen ? styles.linksClosed : {}),
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            style={{
              ...styles.link,
              ...(item.isFeatured ? styles.featuredLink : {}),
              ...(location.pathname === item.to ? styles.activeLink : {}),
            }}
          >
            {item.label}
          </Link>
        ))}

        {token && (
          <button type="button" style={styles.logout} onClick={handleLogout}>
            Logout
          </button>
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
    gap: "16px",
    minHeight: isMobile ? "58px" : "64px",
    padding: isMobile ? "10px 16px" : "12px 40px",
    backdropFilter: "blur(12px)",
    background:
      "linear-gradient(135deg, rgba(15, 23, 42, 0.92), rgba(30, 58, 138, 0.9))",
    borderBottom: "1px solid rgba(37, 99, 235, 0.3)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  logoLink: {
    color: "white",
    textDecoration: "none",
    minWidth: 0,
  },
  logo: {
    margin: 0,
    fontSize: isMobile ? "17px" : "22px",
    fontWeight: "700",
    letterSpacing: 0,
    color: "white",
    lineHeight: 1.15,
    whiteSpace: "normal",
  },
  links: {
    display: "flex",
    gap: isMobile ? "8px" : "20px",
    flexWrap: "nowrap",
    alignItems: isMobile ? "stretch" : "center",
    ...(isMobile
      ? {
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          flexDirection: "column",
          padding: "10px 16px 14px",
          background: "rgba(15, 23, 42, 0.98)",
          borderBottom: "1px solid rgba(37, 99, 235, 0.28)",
          boxShadow: "0 12px 24px rgba(15, 23, 42, 0.18)",
        }
      : {}),
  },
  linksClosed: {
    display: "none",
  },
  link: {
    color: "#e2e8f0",
    textDecoration: "none",
    fontWeight: "500",
    transition: "all 0.2s ease",
    fontSize: isMobile ? "15px" : "14px",
    cursor: "pointer",
    padding: isMobile ? "12px 10px" : "6px 0",
    borderRadius: isMobile ? "8px" : 0,
    lineHeight: 1.2,
    minHeight: isMobile ? "44px" : "auto",
    display: "flex",
    alignItems: "center",
    ...(isMobile
      ? {
          color: "#f8fafc",
          background: "rgba(255, 255, 255, 0.05)",
        }
      : {}),
  },
  activeLink: {
    color: isMobile ? "#ffffff" : "#fbbf24",
    background: isMobile ? "rgba(37, 99, 235, 0.34)" : "transparent",
  },
  featuredLink: {
    color: "#fbbf24",
    fontWeight: "700",
    animation: "yellowGlow 2s infinite",
  },
  logout: {
    color: "#fecaca",
    textDecoration: "none",
    fontWeight: "500",
    background: isMobile ? "rgba(239, 68, 68, 0.12)" : "none",
    border: isMobile ? "1px solid rgba(248, 113, 113, 0.25)" : "none",
    borderRadius: isMobile ? "8px" : 0,
    cursor: "pointer",
    fontSize: isMobile ? "15px" : "14px",
    fontFamily: "inherit",
    padding: isMobile ? "12px 10px" : "6px 0",
    textAlign: "left",
    minHeight: isMobile ? "44px" : "auto",
  },
  menuButton: {
    width: "44px",
    height: "44px",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    padding: 0,
    border: "1px solid rgba(255, 255, 255, 0.18)",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.08)",
    cursor: "pointer",
    flexShrink: 0,
  },
  menuBar: {
    width: "20px",
    height: "2px",
    borderRadius: "999px",
    background: "#ffffff",
  },
});

export default Navbar;
