import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* HERO */}
      <div style={getStyles(isMobile).hero}>
        <div style={getStyles(isMobile).glow}></div>
        <div style={getStyles(isMobile).overlay}>
          <h1 style={getStyles(isMobile).title} data-aos="fade-down">
            Student Activities Hub
          </h1>

          <p
            style={getStyles(isMobile).subtitle}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover events, join clubs, and make your campus life exciting.
          </p>

          <div
            style={getStyles(isMobile).buttons}
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <button
              style={getStyles(isMobile).primaryBtn}
              onClick={() => navigate("/events")}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-3px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(37, 99, 235, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Explore Events
            </button>
            <button
              style={getStyles(isMobile).secondaryBtn}
              onClick={() => navigate("/register")}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform =
                  "translateY(-3px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(199, 210, 254, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>

      <div style={getStyles(isMobile).section} data-aos="fade-up">
        <h2 style={getStyles(isMobile).sectionTitle}>
          What is Student Activities Hub?
        </h2>

        <p style={getStyles(isMobile).sectionText}>
          Student Activities Hub is a centralized platform designed to simplify
          campus life. It allows students to explore events, join clubs, and
          track their participation in one place. The platform enhances
          engagement and ensures that no opportunity goes unnoticed.
        </p>
      </div>

      <div style={getStyles(isMobile).featuresSection} data-aos="fade-up">
        <h2 style={getStyles(isMobile).sectionTitle} data-aos="fade-down">
          Key Features
        </h2>

        <div style={getStyles(isMobile).featuresGrid}>
          <div
            style={getStyles(isMobile).featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            }}
          >
            <h3
              style={{
                fontSize: isMobile ? "18px" : "20px",
                marginBottom: "10px",
              }}
            >
              📅 Discover Events
            </h3>
            <p
              style={{ fontSize: isMobile ? "14px" : "15px", color: "#475569" }}
            >
              Browse and explore all upcoming campus events easily.
            </p>
          </div>

          <div
            style={getStyles(isMobile).featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            }}
          >
            <h3
              style={{
                fontSize: isMobile ? "18px" : "20px",
                marginBottom: "10px",
              }}
            >
              🏫 Join Clubs
            </h3>
            <p
              style={{ fontSize: isMobile ? "14px" : "15px", color: "#475569" }}
            >
              Find and become a part of student clubs and communities.
            </p>
          </div>

          <div
            style={getStyles(isMobile).featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            }}
          >
            <h3
              style={{
                fontSize: isMobile ? "18px" : "20px",
                marginBottom: "10px",
              }}
            >
              📊 Track Participation
            </h3>
            <p
              style={{ fontSize: isMobile ? "14px" : "15px", color: "#475569" }}
            >
              Keep track of events you have registered for and attended.
            </p>
          </div>

          <div
            style={getStyles(isMobile).featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            }}
          >
            <h3
              style={{
                fontSize: isMobile ? "18px" : "20px",
                marginBottom: "10px",
              }}
            >
              🔐 Secure Login
            </h3>
            <p
              style={{ fontSize: isMobile ? "14px" : "15px", color: "#475569" }}
            >
              Safe authentication system using JWT-based login.
            </p>
          </div>
        </div>
      </div>

      <div style={getStyles(isMobile).whySection}>
        <h2 style={getStyles(isMobile).sectionTitle}>Why Use This Platform?</h2>

        <div style={getStyles(isMobile).whyGrid}>
          <div data-aos="fade-up">
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              🎯 Stay Updated
            </h3>
            <p style={{ fontSize: "15px", color: "#475569" }}>
              Never miss important campus events and opportunities.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              🤝 Build Connections
            </h3>
            <p style={{ fontSize: "15px", color: "#475569" }}>
              Join clubs and meet like-minded students.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              🚀 Boost Growth
            </h3>
            <p style={{ fontSize: "15px", color: "#475569" }}>
              Participate in activities that enhance your skills.
            </p>
          </div>
        </div>
      </div>

      <div style={getStyles(isMobile).ctaSection} data-aos="fade-up">
        <h2 style={getStyles(isMobile).ctaTitle}>Start Your Journey Today</h2>

        <p style={getStyles(isMobile).ctaText}>
          Explore events, join clubs, and make the most out of your campus life.
        </p>

        <button
          style={getStyles(isMobile).ctaButton}
          onClick={() => navigate("/events")}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.06) translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 15px 35px rgba(96,165,250,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Explore Events
        </button>
      </div>
    </>
  );
}

const getStyles = (isMobile) => ({
  hero: {
    height: isMobile ? "70vh" : "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(-45deg, #0f172a, #1e3a8a, #2563eb, #1e40af)",
    backgroundSize: "400% 400%",
    animation: "gradientMove 12s ease infinite",
    color: "white",
    overflow: "hidden",
    position: "relative",
  },
  glow: {
    position: "absolute",
    width: isMobile ? "300px" : "500px",
    height: isMobile ? "300px" : "500px",
    background: "rgba(59,130,246,0.3)",
    filter: "blur(120px)",
    top: "-100px",
    left: isMobile ? "-150px" : "-100px",
    zIndex: 0,
    pointerEvents: "none",
  },
  overlay: {
    textAlign: "center",
    maxWidth: isMobile ? "90%" : "700px",
    padding: isMobile ? "24px" : "40px",
    backdropFilter: "blur(10px)",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    zIndex: 1,
    position: "relative",
  },

  title: {
    fontSize: isMobile ? "32px" : "60px",
    fontWeight: "700",
    marginBottom: isMobile ? "12px" : "20px",
  },

  subtitle: {
    fontSize: isMobile ? "15px" : "20px",
    marginBottom: isMobile ? "20px" : "30px",
    color: "#c7d2fe",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: isMobile ? "10px" : "15px",
    flexWrap: isMobile ? "wrap" : "nowrap",
  },

  primaryBtn: {
    padding: isMobile ? "10px 18px" : "12px 24px",
    fontSize: isMobile ? "14px" : "16px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
    flex: isMobile ? "1 1 auto" : "0 0 auto",
    minWidth: isMobile ? "120px" : "auto",
  },

  secondaryBtn: {
    padding: isMobile ? "10px 18px" : "12px 24px",
    fontSize: isMobile ? "14px" : "16px",
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid #c7d2fe",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
    flex: isMobile ? "1 1 auto" : "0 0 auto",
    minWidth: isMobile ? "120px" : "auto",
  },
  section: {
    padding: isMobile ? "40px 16px" : "80px 20px",
    textAlign: "center",
    background: `
  linear-gradient(180deg, #f8fafc, #eef2ff),
  url("https://www.transparenttextures.com/patterns/cubes.png")
`,
    borderTop: "1px solid #e2e8f0",
    borderBottom: "1px solid #e2e8f0",
  },

  sectionTitle: {
    fontSize: isMobile ? "24px" : "36px",
    fontWeight: "600",
    marginBottom: isMobile ? "12px" : "20px",
  },

  sectionText: {
    maxWidth: isMobile ? "100%" : "700px",
    margin: "0 auto",
    fontSize: isMobile ? "15px" : "18px",
    color: "#475569",
    lineHeight: "1.6",
    padding: isMobile ? "0 8px" : "0",
  },
  featuresSection: {
    padding: isMobile ? "40px 16px" : "80px 20px",
    textAlign: "center",
    background: `linear-gradient(135deg, #e0f2fe, #f0f9ff, #f8fafc)`,
    borderBottom: "1px solid #e2e8f0",
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(auto-fit, minmax(220px, 1fr))",
    gap: isMobile ? "12px" : "20px",
    marginTop: isMobile ? "24px" : "40px",
  },

  featureCard: {
    padding: isMobile ? "16px" : "22px",
    borderRadius: "14px",
    background: "white",
    boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
    cursor: "pointer",
  },

  featureCardHover: {
    transform: "translateY(-8px) scale(1.02)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  whySection: {
    padding: isMobile ? "40px 16px" : "80px 20px",
    textAlign: "center",
    background: `
  linear-gradient(135deg, #e0e7ff, #f8fafc),
  url("https://www.transparenttextures.com/patterns/dots.png")
`,
    borderBottom: "1px solid #e2e8f0",
  },

  whyGrid: {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(auto-fit, minmax(220px, 1fr))",
    gap: isMobile ? "16px" : "30px",
    marginTop: isMobile ? "24px" : "40px",
  },
  ctaSection: {
    padding: isMobile ? "40px 16px" : "80px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #1e3a8a, #0f172a)",
    color: "white",
    borderBottom: "1px solid #e2e8f0",
  },

  ctaTitle: {
    fontSize: isMobile ? "24px" : "36px",
    marginBottom: isMobile ? "10px" : "15px",
  },

  ctaText: {
    fontSize: isMobile ? "14px" : "16px",
    marginBottom: isMobile ? "16px" : "25px",
    color: "#c7d2fe",
  },

  ctaButton: {
    padding: isMobile ? "10px 20px" : "12px 28px",
    fontSize: isMobile ? "14px" : "16px",
    background: "linear-gradient(135deg, #2563eb, #60a5fa)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
});

const styles = getStyles(false);

export default Home;
