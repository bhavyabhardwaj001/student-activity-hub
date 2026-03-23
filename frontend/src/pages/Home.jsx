function Home() {
  return (
    <div style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Student Activities Hub</h1>

        <p style={styles.subtitle}>
          Discover events, join clubs, and make your campus life exciting.
        </p>

        <div style={styles.buttons}>
          <button style={styles.primaryBtn}>Explore Events</button>
          <button style={styles.secondaryBtn}>Join Now</button>
        </div>
      </div>
    </div>
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
};

export default Home;