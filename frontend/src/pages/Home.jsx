import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={styles.title} data-aos="fade-down">
            Student Activities Hub
          </h1>

          <p style={styles.subtitle} data-aos="fade-up" data-aos-delay="200">
            Discover events, join clubs, and make your campus life exciting.
          </p>

          <div style={styles.buttons} data-aos="zoom-in" data-aos-delay="400">
            <button
              style={styles.primaryBtn}
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
              style={styles.secondaryBtn}
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

      <div style={styles.section} data-aos="fade-up">
        <h2 style={styles.sectionTitle}>What is Student Activities Hub?</h2>

        <p style={styles.sectionText}>
          Student Activities Hub is a centralized platform designed to simplify
          campus life. It allows students to explore events, join clubs, and
          track their participation in one place. The platform enhances
          engagement and ensures that no opportunity goes unnoticed.
        </p>
      </div>

      <div style={styles.featuresSection} data-aos="fade-up">
        <h2 style={styles.sectionTitle} data-aos="fade-down">
          Key Features
        </h2>

        <div style={styles.featuresGrid}>
          <div
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              📅 Discover Events
            </h3>
            <p style={{ fontSize: "15px", color: "#475569" }}>
              Browse and explore all upcoming campus events easily.
            </p>
          </div>

          <div
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              🏫 Join Clubs
            </h3>
            <p style={{ fontSize: "15px", color: "#475569" }}>
              Find and become a part of student clubs and communities.
            </p>
          </div>

          <div
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              📊 Track Participation
            </h3>
            <p style={{ fontSize: "15px", color: "#475569" }}>
              Keep track of events you have registered for and attended.
            </p>
          </div>

          <div
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              🔐 Secure Login
            </h3>
            <p style={{ fontSize: "15px", color: "#475569" }}>
              Safe authentication system using JWT-based login.
            </p>
          </div>
        </div>
      </div>

      <div style={styles.whySection}>
        <h2 style={styles.sectionTitle}>Why Use This Platform?</h2>

        <div style={styles.whyGrid}>
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

      <div style={styles.ctaSection} data-aos="fade-up">
        <h2 style={styles.ctaTitle}>Start Your Journey Today</h2>

        <p style={styles.ctaText}>
          Explore events, join clubs, and make the most out of your campus life.
        </p>

        <button
          style={styles.ctaButton}
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

const styles = {
  hero: {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
    color: "white",
    overflow: "hidden",
  },

  overlay: {
    textAlign: "center",
    maxWidth: "700px",
    padding: "40px",
    backdropFilter: "blur(10px)",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
  },

  title: {
    fontSize: "60px",
    fontWeight: "700",
    marginBottom: "20px",
  },

  subtitle: {
    fontSize: "20px",
    marginBottom: "30px",
    color: "#c7d2fe",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },

  primaryBtn: {
    padding: "12px 24px",
    fontSize: "16px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
  },

  secondaryBtn: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid #c7d2fe",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
  section: {
    padding: "80px 20px",
    textAlign: "center",
    background: `
  linear-gradient(180deg, #f8fafc, #eef2ff),
  url("https://www.transparenttextures.com/patterns/cubes.png")
`,
    borderTop: "1px solid #e2e8f0",
    borderBottom: "1px solid #e2e8f0",
  },

  sectionTitle: {
    fontSize: "36px",
    fontWeight: "600",
    marginBottom: "20px",
  },

  sectionText: {
    maxWidth: "700px",
    margin: "0 auto",
    fontSize: "18px",
    color: "#475569",
    lineHeight: "1.7",
  },
  featuresSection: {
    padding: "80px 20px",
    textAlign: "center",
    background: `
  linear-gradient(180deg, #ffffff, #f8fafc),
  url("https://www.transparenttextures.com/patterns/diamond-upholstery.png")
`,
    borderBottom: "1px solid #e2e8f0",
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "40px",
  },

  featureCard: {
    padding: "22px",
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
    padding: "80px 20px",
    textAlign: "center",
    background: `
  linear-gradient(135deg, #e0e7ff, #f8fafc),
  url("https://www.transparenttextures.com/patterns/dots.png")
`,
    borderBottom: "1px solid #e2e8f0",
  },

  whyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "30px",
    marginTop: "40px",
  },
  ctaSection: {
    padding: "80px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #1e3a8a, #0f172a)",
    color: "white",
    borderBottom: "1px solid #e2e8f0",
  },

  ctaTitle: {
    fontSize: "36px",
    marginBottom: "15px",
  },

  ctaText: {
    fontSize: "16px",
    marginBottom: "25px",
    color: "#c7d2fe",
  },

  ctaButton: {
    padding: "12px 28px",
    fontSize: "16px",
    background: "linear-gradient(135deg, #2563eb, #60a5fa)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
};

export default Home;
