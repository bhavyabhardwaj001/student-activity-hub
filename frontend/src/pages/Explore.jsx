import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import DemoPaymentModal from "../components/DemoPaymentModal";

// --- Mock Data ---
const mockEvents = [
  {
    id: 1,
    _id: "mock-1",
    title: "Tech Innovators Meetup",
    category: "Technical",
    distance: "2.1 km",
    popularity: 1200,
    trending: true,
    aiRecommended: false,
    date: new Date("2026-04-15"),
    location: "Innovation Hub, Campus A",
    description:
      "Join us for an exciting meetup with tech innovators. Network, learn, and grow together.",
    imageUrl:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFRlY2glMjBJbm5vdmF0b3JzJTIwTWVldHVwfGVufDB8fDB8fHww",
    participants: [],
  },
  {
    id: 2,
    _id: "mock-2",
    title: "Cultural Fest 2026",
    category: "Cultural",
    distance: "3.5 km",
    popularity: 950,
    trending: true,
    aiRecommended: false,
    date: new Date("2026-04-20"),
    location: "Main Auditorium, Campus B",
    description:
      "Experience diverse cultures through music, dance, food, and art performances.",
    imageUrl:
      "https://images.unsplash.com/photo-1761853321751-01ac4a5d0f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGN1bHR1cmUlMjBmZXN0fGVufDB8fDB8fHww",
    participants: [],
  },
  {
    id: 3,
    _id: "mock-3",
    title: "Startup Pitch Night",
    category: "Entrepreneurship",
    distance: "1.2 km",
    popularity: 700,
    trending: false,
    aiRecommended: false,
    date: new Date("2026-04-18"),
    location: "Business Center, Campus A",
    description:
      "Watch innovative startups pitch their ideas to investors and mentors.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    participants: [],
  },
  {
    id: 4,
    _id: "mock-4",
    title: "Art & Music Carnival",
    category: "Arts",
    distance: "4.8 km",
    popularity: 1100,
    trending: true,
    aiRecommended: false,
    date: new Date("2026-04-25"),
    location: "Open Ground, Campus B",
    description:
      "Celebrate art and music with live performances, art installations, and creative workshops.",
    imageUrl:
      "https://images.unsplash.com/photo-1636847458484-653f9d40011a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    participants: [],
  },
  {
    id: 5,
    _id: "mock-5",
    title: "Robotics Workshop",
    category: "Technical",
    distance: "2.7 km",
    popularity: 600,
    trending: false,
    aiRecommended: false,
    date: new Date("2026-04-22"),
    location: "Robotics Lab, Campus A",
    description:
      "Learn robotics fundamentals and build your own robot in this hands-on workshop.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1663091646722-41f500f34668?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Um9ib3RpY3MlMjBXb3Jrc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
    participants: [],
  },
  {
    id: 6,
    _id: "mock-6",
    title: "Literature Open Mic",
    category: "Literature",
    distance: "3.0 km",
    popularity: 400,
    trending: false,
    aiRecommended: false,
    date: new Date("2026-04-28"),
    location: "Library Lounge, Campus B",
    description:
      "Share your poetry, stories, and prose with fellow literature enthusiasts.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl0ZXJhdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    participants: [],
  },
  {
    id: 7,
    _id: "ai-1",
    title: "Bhuwin Experience - Noor-e-daastaan",
    category: "AI",
    distance: "1.5 km",
    popularity: 800,
    trending: false,
    aiRecommended: true,
    date: new Date("2026-05-01"),
    location: "Ravinder Bhavan",
    description: "First AI recommended event description.",
    imageUrl:
      "https://assets-in.bmscdn.com/nmcms/desktop/media-desktop-bhuwin-experience-noor-e-daastaan-2026-2-21-t-10-15-14.jpg",
    url: "https://example.com/ai-event-1",
    participants: [],
  },
  {
    id: 8,
    _id: "ai-2",
    title: "Clay Modelling Workshop",
    category: "AI",
    distance: "2.0 km",
    popularity: 750,
    trending: false,
    aiRecommended: true,
    date: new Date("2026-05-05"),
    location: "Tech Center, Campus B",
    description: "Second AI recommended event description.",
    imageUrl:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-clay-modelling-workshop-0-2024-9-25-t-4-6-9.jpg",
    url: "https://example.com/ai-event-2",
    participants: [],
  },
  {
    id: 9,
    _id: "ai-3",
    title: "Blood on the Clocktower - Social Deduction Game",
    category: "AI",
    distance: "2.5 km",
    popularity: 700,
    trending: false,
    aiRecommended: true,
    date: new Date("2026-05-10"),
    location: "Innovation Space, Campus A",
    description: "Third AI recommended event description.",
    imageUrl:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-blood-on-the-clocktower-social-deduction-game-0-2025-9-12-t-5-11-15.jpg ",
    url: "https://example.com/ai-event-3",
    participants: [],
  },
];

const exploreLinks = [
  {
    title: "BookMyShow",
    url: "https://in.bookmyshow.com/",
    desc: "Discover more events on BookMyShow",
  },
  {
    title: "Meetup",
    url: "https://www.meetup.com/",
    desc: "Find meetups and communities",
  },
  {
    title: "Eventbrite",
    url: "https://www.eventbrite.com/",
    desc: "Explore global events on Eventbrite",
  },
];

// --- Main Page ---
export default function Explore() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [events, setEvents] = useState(mockEvents);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    AOS.refresh();
  }, []);

  const handleRegister = async (eventId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/events/${eventId}/register`,
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

  // Simulate user interest
  const aiRecommended = events.filter((e) => e.aiRecommended);
  const trendingRaw = events.filter(
    (e) => !e.aiRecommended && (e.trending || e.popularity >= 800),
  );
  const trending =
    trendingRaw.length > 0
      ? trendingRaw
      : [...events.filter((e) => !e.aiRecommended)]
          .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
          .slice(0, 3);
  const nearby = events.filter((e) => !e.aiRecommended);

  return (
    <div style={getStyles(isMobile).pageContainer}>
      {/* Header Section */}
      <div style={getStyles(isMobile).headerSection}>
        <div style={getStyles(isMobile).headerContent}>
          <h2 style={getStyles(isMobile).headerTitle}>Explore Events</h2>
          <p style={getStyles(isMobile).headerSubtitle}>
            Discover and explore exciting events near you
          </p>
        </div>
      </div>

      <main style={getStyles(isMobile).container}>
        {/* Nearby Events */}
        <section style={getStyles(isMobile).section}>
          <h3 style={getStyles(isMobile).sectionTitle}>📍 Nearby Events</h3>
          <div style={getStyles(isMobile).cardsGrid}>
            {nearby.map((event, index) => {
              const alreadyRegistered = event.participants?.includes(userId);
              return (
                <div
                  key={event._id}
                  style={getStyles(isMobile).eventCard}
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
        </section>

        {/* AI Recommended Section */}
        <section style={getStyles(isMobile).section}>
          <h3 style={getStyles(isMobile).sectionTitle}>✨ AI Recommended</h3>
          <div style={getStyles(isMobile).cardsGrid}>
            {aiRecommended.length === 0 ? (
              <p style={getStyles(isMobile).emptyMessage}>
                No AI recommended events yet.
              </p>
            ) : (
              aiRecommended.map((event, index) => {
                const alreadyRegistered = event.participants?.includes(userId);
                return (
                  <div
                    key={event._id}
                    style={{
                      ...getStyles(isMobile).eventCard,
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      // Don't navigate if clicking on the register button
                      if (
                        e.target.tagName !== "BUTTON" &&
                        !e.target.closest("button")
                      ) {
                        window.open(event.url, "_blank");
                      }
                    }}
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
              })
            )}
          </div>
        </section>

        {/* Trending Events Section */}
        <section style={getStyles(isMobile).section}>
          <h3 style={getStyles(isMobile).sectionTitle}>🔥 Trending Events</h3>
          <div style={getStyles(isMobile).cardsGrid}>
            {trending.length === 0 ? (
              <p style={getStyles(isMobile).emptyMessage}>
                No trending events right now.
              </p>
            ) : (
              trending.map((event, index) => {
                const alreadyRegistered = event.participants?.includes(userId);
                return (
                  <div
                    key={event._id}
                    style={getStyles(isMobile).eventCard}
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
              })
            )}
          </div>
        </section>

        {/* Explore More Section */}
        <section style={getStyles(isMobile).section}>
          <h3 style={getStyles(isMobile).sectionTitle}>🌐 Explore More</h3>
          <div style={getStyles(isMobile).cardsGrid}>
            {(exploreLinks.length === 0
              ? [
                  {
                    title: "No links found",
                    url: "#",
                    desc: "No additional explore links are available.",
                  },
                ]
              : exploreLinks
            ).map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={getStyles(isMobile).exploreCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow =
                    getStyles(isMobile).exploreCard.boxShadow;
                }}
              >
                <h4 style={getStyles(isMobile).cardTitle}>{link.title}</h4>
                <p style={getStyles(isMobile).linkDesc}>{link.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Demo Payment Modal */}
      <DemoPaymentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        qrImage="/assets/qr-demo.jpeg"
        eventId={selectedEventId}
        onRegister={handleRegister}
        onSuccess={(ticketId) => {
          alert(`Payment Successful! Ticket ID: ${ticketId}`);
        }}
      />
    </div>
  );
}

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
    margin: 0,
    marginBottom: "12px",
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
  section: {
    marginBottom: "50px",
  },
  sectionTitle: {
    fontSize: isMobile ? "20px" : "26px",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "24px",
    margin: "0 0 24px 0",
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
  exploreCard: {
    background: "white",
    borderRadius: "14px",
    padding: isMobile ? "14px" : "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: "8px",
    fontSize: "18px",
    color: "#1e293b",
    fontWeight: "600",
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
    margin: "8px 0",
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
  linkDesc: {
    fontSize: isMobile ? "13px" : "14px",
    color: "#64748b",
    margin: 0,
    lineHeight: "1.4",
  },
  emptyMessage: {
    color: "#64748b",
    textAlign: "center",
    gridColumn: "1 / -1",
    padding: "16px",
    fontStyle: "italic",
  },
});
