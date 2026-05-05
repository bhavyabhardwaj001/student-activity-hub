import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import DemoPaymentModal from "../components/DemoPaymentModal";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/events`)
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

  // Modal state for demo payment
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  // Initialize and reinitialize AOS with slower animation
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
  const handleRegister = async (eventId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/events/${eventId}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (res.ok) {
        alert("Successfully registered for event!");
        // Update the events state to reflect the new registration
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event._id === eventId
              ? {
                  ...event,
                  participants: [...(event.participants || []), userId],
                }
              : event,
          ),
        );
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };
  const token = localStorage.getItem("token");

  let userId = null;

  if (token) {
    const decoded = jwtDecode(token);
    userId = decoded.id;
  }
  return (
    <div style={getStyles(isMobile).pageContainer}>
      {/* Header Section */}
      <div style={getStyles(isMobile).headerSection}>
        <div style={getStyles(isMobile).headerContent}>
          <h2 style={getStyles(isMobile).headerTitle}>Upcoming Events</h2>
          <p style={getStyles(isMobile).headerSubtitle}>
            Explore and register for exciting campus activities
          </p>
        </div>
      </div>

      <main style={getStyles(isMobile).container}>
        {loading && (
          <p style={getStyles(isMobile).loadingText}>Loading events...</p>
        )}

        {!loading && events.length === 0 && (
          <p style={getStyles(isMobile).loadingText}>No events available.</p>
        )}

        <div style={getStyles(isMobile).searchContainer}>
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={getStyles(isMobile).searchInput}
          />
        </div>

        <div style={getStyles(isMobile).filterContainer}>
          <button
            onClick={() => setFilter("All")}
            style={{
              ...getStyles(isMobile).filterBtn,
              ...(filter === "All" ? getStyles(isMobile).filterBtnActive : {}),
            }}
            onMouseEnter={(e) => {
              if (filter !== "All") {
                e.target.style.background = "rgba(37, 99, 235, 0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== "All") {
                e.target.style.background = "rgba(37, 99, 235, 0.1)";
              }
            }}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Technical")}
            style={{
              ...getStyles(isMobile).filterBtn,
              ...(filter === "Technical"
                ? getStyles(isMobile).filterBtnActive
                : {}),
            }}
            onMouseEnter={(e) => {
              if (filter !== "Technical") {
                e.target.style.background = "rgba(37, 99, 235, 0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== "Technical") {
                e.target.style.background = "rgba(37, 99, 235, 0.1)";
              }
            }}
          >
            Technical
          </button>
          <button
            onClick={() => setFilter("Cultural")}
            style={{
              ...getStyles(isMobile).filterBtn,
              ...(filter === "Cultural"
                ? getStyles(isMobile).filterBtnActive
                : {}),
            }}
            onMouseEnter={(e) => {
              if (filter !== "Cultural") {
                e.target.style.background = "rgba(37, 99, 235, 0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== "Cultural") {
                e.target.style.background = "rgba(37, 99, 235, 0.1)";
              }
            }}
          >
            Cultural
          </button>
          <button
            onClick={() => setFilter("Sports")}
            style={{
              ...getStyles(isMobile).filterBtn,
              ...(filter === "Sports"
                ? getStyles(isMobile).filterBtnActive
                : {}),
            }}
            onMouseEnter={(e) => {
              if (filter !== "Sports") {
                e.target.style.background = "rgba(37, 99, 235, 0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== "Sports") {
                e.target.style.background = "rgba(37, 99, 235, 0.1)";
              }
            }}
          >
            Sports
          </button>
          <button
            onClick={() => setFilter("Management")}
            style={{
              ...getStyles(isMobile).filterBtn,
              ...(filter === "Management"
                ? getStyles(isMobile).filterBtnActive
                : {}),
            }}
            onMouseEnter={(e) => {
              if (filter !== "Management") {
                e.target.style.background = "rgba(37, 99, 235, 0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== "Management") {
                e.target.style.background = "rgba(37, 99, 235, 0.1)";
              }
            }}
          >
            Management
          </button>
        </div>
        <div style={getStyles(isMobile).cardsGrid}>
          {events
            .filter((event) => {
              const matchesCategory =
                filter === "All" ? true : event.category === filter;

              const matchesSearch = event.title
                .toLowerCase()
                .includes(search.toLowerCase());

              return matchesCategory && matchesSearch;
            })

            .map((event, index) => {
              const alreadyRegistered = event.participants?.includes(userId);

              return (
                <div
                  key={event._id}
                  style={getStyles(isMobile).eventCard}
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
                    e.currentTarget.style.boxShadow =
                      getStyles(isMobile).eventCard.boxShadow;
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
                      fontSize: isMobile ? "16px" : "18px",
                      color: "#1e293b",
                    }}
                  >
                    {event.title}
                  </h4>

                  <div style={getStyles(isMobile).eventMeta}>
                    {event.category} |{" "}
                    {new Date(event.date).toLocaleDateString()}
                  </div>

                  <div style={getStyles(isMobile).eventLocation}>
                    📍 {event.location}
                  </div>

                  <div style={getStyles(isMobile).eventDesc}>
                    {event.description}
                  </div>
                  <p style={getStyles(isMobile).participantCount}>
                    Participants: {event.participants?.length || 0}
                  </p>
                  <button
                    style={{
                      ...getStyles(isMobile).registerBtn,
                      ...(alreadyRegistered
                        ? getStyles(isMobile).registerBtnDisabled
                        : {}),
                    }}
                    onClick={() => {
                      setSelectedEventId(event._id);
                      setModalOpen(true);
                    }}
                    disabled={alreadyRegistered}
                    onMouseEnter={(e) => {
                      if (!alreadyRegistered) {
                        e.target.style.background =
                          "linear-gradient(135deg, #1d4ed8, #2563eb)";
                        e.target.style.transform = "scale(1.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!alreadyRegistered) {
                        e.target.style.background =
                          "linear-gradient(135deg, #2563eb, #3b82f6)";
                        e.target.style.transform = "none";
                      }
                    }}
                  >
                    {alreadyRegistered ? "Registered" : "Pay & Register"}
                  </button>
                </div>
              );
            })}
        </div>
      </main>

      {/* Demo Payment Modal */}
      <DemoPaymentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        qrImage="/assets/qr-demo.jpeg" // Place your QR image in public/assets/
        eventId={selectedEventId}
        onRegister={handleRegister}
        onSuccess={(ticketId) => {
          alert(`Payment Successful! Ticket ID: ${ticketId}`);
        }}
      />
    </div>
  );
}

export default Events;

const getStyles = (isMobile) => ({
  pageContainer: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa, #e9eff5)",
  },
  headerSection: {
    background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
    color: "white",
    padding: isMobile ? "40px 16px" : "60px 20px",
    textAlign: "center",
    borderBottom: "1px solid rgba(37, 99, 235, 0.3)",
  },
  headerContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  headerTitle: {
    fontSize: isMobile ? "28px" : "42px",
    fontWeight: "700",
    marginBottom: "12px",
    margin: 0,
  },
  headerSubtitle: {
    fontSize: isMobile ? "14px" : "18px",
    color: "#c7d2fe",
    margin: "12px 0 0",
  },
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: isMobile ? "0 12px" : "0 20px",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  searchInput: {
    padding: isMobile ? "10px 14px" : "12px 18px",
    width: "100%",
    maxWidth: isMobile ? "300px" : "400px",
    fontSize: isMobile ? "14px" : "16px",
    borderRadius: "8px",
    border: "2px solid #e2e8f0",
    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    outline: "none",
  },
  filterContainer: {
    display: "flex",
    gap: isMobile ? "8px" : "12px",
    marginBottom: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  filterBtn: {
    padding: isMobile ? "8px 14px" : "10px 20px",
    fontSize: isMobile ? "12px" : "14px",
    fontWeight: "500",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    background: "rgba(37, 99, 235, 0.1)",
    color: "#2563eb",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
  filterBtnActive: {
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    color: "white",
    border: "1px solid #2563eb",
    boxShadow: "0 4px 15px rgba(37, 99, 235, 0.3)",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(auto-fill, minmax(320px, 1fr))",
    gap: isMobile ? "16px" : "24px",
    marginBottom: "40px",
  },
  eventCard: {
    background: "white",
    borderRadius: "14px",
    padding: isMobile ? "14px" : "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
  eventMeta: {
    fontSize: isMobile ? "12px" : "13px",
    color: "#64748b",
    marginBottom: "8px",
    fontWeight: "500",
  },
  eventLocation: {
    fontSize: isMobile ? "12px" : "13px",
    color: "#475569",
    marginBottom: "8px",
  },
  eventDesc: {
    fontSize: isMobile ? "13px" : "14px",
    color: "#475569",
    marginBottom: "12px",
    lineHeight: "1.5",
  },
  participantCount: {
    fontSize: isMobile ? "12px" : "13px",
    marginTop: "8px",
    color: "#64748b",
  },
  registerBtn: {
    marginTop: "16px",
    padding: isMobile ? "10px 14px" : "12px 20px",
    fontSize: isMobile ? "12px" : "14px",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
    width: "100%",
  },
  registerBtnDisabled: {
    background: "#cbd5e1",
    color: "#64748b",
    cursor: "not-allowed",
    opacity: 0.7,
  },
  loadingText: {
    textAlign: "center",
    fontSize: isMobile ? "14px" : "16px",
    color: "#64748b",
    padding: isMobile ? "20px 12px" : "40px 20px",
  },
});

const styles = getStyles(false);
