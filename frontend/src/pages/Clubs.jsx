import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

function Clubs() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/clubs")
      .then((res) => res.json())
      .then((data) => setClubs(data))
      .catch((err) => console.error(err));
  }, []);

  // Initialize and reinitialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  useEffect(() => {
    if (clubs.length > 0) {
      AOS.refresh();
    }
  }, [clubs]);

  return (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <div style={styles.headerSection}>
        <div style={styles.headerContent}>
          <h2 style={styles.headerTitle}>Student Clubs</h2>
          <p style={styles.headerSubtitle}>
            Explore and join student clubs and communities
          </p>
        </div>
      </div>

      <main style={styles.container}>
        <div style={styles.cardsGrid}>
          {clubs.map((club, index) => (
            <div
              key={club._id}
              style={styles.clubCard}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={`${index * 100}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = styles.clubCard.boxShadow;
              }}
            >
              {club.imageUrl && (
                <img
                  src={club.imageUrl}
                  alt={club.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "12px",
                    transition:
                      "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.08) rotate(1deg)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "none";
                  }}
                />
              )}

              <h4
                style={{
                  marginTop: 0,
                  marginBottom: "8px",
                  fontSize: "18px",
                  color: "#1e293b",
                }}
              >
                {club.name}
              </h4>

              <div style={styles.clubCategory}>{club.category}</div>

              <div style={styles.clubDesc}>{club.description}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Clubs;

const styles = {
  pageContainer: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa, #e9eff5)",
  },
  headerSection: {
    background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
    color: "white",
    padding: "60px 20px",
    textAlign: "center",
    borderBottom: "1px solid rgba(37, 99, 235, 0.3)",
  },
  headerContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  headerTitle: {
    fontSize: "42px",
    fontWeight: "700",
    margin: 0,
    marginBottom: "12px",
  },
  headerSubtitle: {
    fontSize: "18px",
    color: "#c7d2fe",
    margin: "12px 0 0",
  },
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 20px",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "24px",
    marginBottom: "40px",
  },
  clubCard: {
    background: "white",
    borderRadius: "14px",
    padding: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
  clubCategory: {
    fontSize: "13px",
    color: "#64748b",
    marginBottom: "8px",
    fontWeight: "500",
    backgroundColor: "rgba(37, 99, 235, 0.1)",
    display: "inline-block",
    padding: "4px 12px",
    borderRadius: "20px",
    color: "#2563eb",
    marginBottom: "12px",
  },
  clubDesc: {
    fontSize: "14px",
    color: "#475569",
    marginBottom: "12px",
    lineHeight: "1.5",
  },
};
