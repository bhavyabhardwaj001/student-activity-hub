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
    background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
    color: "white",
  },
  overlay: {
    textAlign: "center",
    maxWidth: "600px",
    padding: "20px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#e0e7ff",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  primaryBtn: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#ffffff",
    color: "#1e3a8a",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
  secondaryBtn: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Home;