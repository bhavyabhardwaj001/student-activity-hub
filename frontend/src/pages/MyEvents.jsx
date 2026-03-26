import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

function MyEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/events/my-events", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
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
    if (!loading && events.length > 0) {
      AOS.refresh();
    }
  }, [events, loading]);

  const handleUnregister = async (eventId) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(
        `http://localhost:5000/api/events/${eventId}/unregister`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (res.ok) {
        alert("Unregistered successfully");

        // remove event from list without refreshing
        setEvents(events.filter((event) => event._id !== eventId));
      } else {
        alert(data.message || "Failed to unregister");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <div style={styles.headerSection}>
        <div style={styles.headerContent}>
          <h2 style={styles.headerTitle}>My Registered Events</h2>
          <p style={styles.headerSubtitle}>
            Manage your event registrations and schedule
          </p>
        </div>
      </div>

      <main style={styles.container}>
        {loading && <p style={styles.loadingText}>Loading events...</p>}

        {!loading && events.length === 0 && (
          <p style={styles.loadingText}>
            You have not registered for any events yet.
          </p>
        )}

        <div style={styles.cardsGrid}>
          {events.map((event, index) => (
            <div
              key={event._id}
              style={styles.eventCard}
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
                e.currentTarget.style.boxShadow = styles.eventCard.boxShadow;
              }}
            >
              {event.imageUrl && (
                <img
                  src={event.imageUrl}
                  alt={event.title}
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
                {event.title}
              </h4>

              <div style={styles.eventMeta}>
                {event.category} | {new Date(event.date).toLocaleDateString()}
              </div>

              <div style={styles.eventLocation}>📍 {event.location}</div>

              <div style={styles.eventDesc}>{event.description}</div>

              <button
                style={{
                  ...styles.unregisterBtn,
                }}
                onClick={() => handleUnregister(event._id)}
                onMouseEnter={(e) => {
                  e.target.style.background =
                    "linear-gradient(135deg, #dc2626, #ef4444)";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background =
                    "linear-gradient(135deg, #ef4444, #f87171)";
                  e.target.style.transform = "none";
                }}
              >
                Unregister
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MyEvents;

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
  eventCard: {
    background: "white",
    borderRadius: "14px",
    padding: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
  eventMeta: {
    fontSize: "13px",
    color: "#64748b",
    marginBottom: "8px",
    fontWeight: "500",
  },
  eventLocation: {
    fontSize: "13px",
    color: "#475569",
    marginBottom: "8px",
  },
  eventDesc: {
    fontSize: "14px",
    color: "#475569",
    marginBottom: "12px",
    lineHeight: "1.5",
  },
  unregisterBtn: {
    marginTop: "16px",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #ef4444, #f87171)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
    width: "100%",
  },
  loadingText: {
    textAlign: "center",
    fontSize: "16px",
    color: "#64748b",
    padding: "40px 20px",
  },
};
