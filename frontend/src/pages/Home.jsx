function Home() {
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
            <button style={styles.primaryBtn}>Explore Events</button>
            <button style={styles.secondaryBtn}>Join Now</button>
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

      <div style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Key Features</h2>

        <div style={styles.featuresGrid}>
          <div style={styles.featureCard} data-aos="fade-up">
            <h3>📅 Discover Events</h3>
            <p>Browse and explore all upcoming campus events easily.</p>
          </div>

          <div
            style={styles.featureCard}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>🏫 Join Clubs</h3>
            <p>Find and become a part of student clubs and communities.</p>
          </div>

          <div
            style={styles.featureCard}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>📊 Track Participation</h3>
            <p>Keep track of events you have registered for and attended.</p>
          </div>

          <div
            style={styles.featureCard}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3>🔐 Secure Login</h3>
            <p>Safe authentication system using JWT-based login.</p>
          </div>
        </div>
      </div>

      <div style={styles.whySection}>
  <h2 style={styles.sectionTitle}>Why Use This Platform?</h2>

  <div style={styles.whyGrid}>
    
    <div data-aos="fade-up">
      <h3>🎯 Stay Updated</h3>
      <p>Never miss important campus events and opportunities.</p>
    </div>

    <div data-aos="fade-up" data-aos-delay="100">
      <h3>🤝 Build Connections</h3>
      <p>Join clubs and meet like-minded students.</p>
    </div>

    <div data-aos="fade-up" data-aos-delay="200">
      <h3>🚀 Boost Growth</h3>
      <p>Participate in activities that enhance your skills.</p>
    </div>

  </div>
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
    fontSize: "52px",
    fontWeight: "700",
    marginBottom: "20px",
  },

  subtitle: {
    fontSize: "18px",
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
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },

  secondaryBtn: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid #c7d2fe",
    borderRadius: "8px",
    cursor: "pointer",
  },
  section: {
    padding: "80px 20px",
    textAlign: "center",
    backgroundColor: "#f8fafc",
  },

  sectionTitle: {
    fontSize: "32px",
    fontWeight: "600",
    marginBottom: "20px",
  },

  sectionText: {
    maxWidth: "700px",
    margin: "0 auto",
    fontSize: "16px",
    color: "#475569",
    lineHeight: "1.6",
  },
  featuresSection: {
  padding: "80px 20px",
  textAlign: "center",
  backgroundColor: "white",
},

featuresGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  marginTop: "40px",
},

featureCard: {
  padding: "20px",
  borderRadius: "12px",
  background: "#f1f5f9",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  cursor: "pointer",
},
whySection: {
  padding: "80px 20px",
  textAlign: "center",
  background: "linear-gradient(135deg, #e0e7ff, #f8fafc)",
},

whyGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "30px",
  marginTop: "40px",
},
};

export default Home;
