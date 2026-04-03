import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

// --- Mock Data ---
const mockEvents = [
  {
    id: 1,
    title: "Tech Innovators Meetup",
    category: "Technical",
    distance: "2.1 km",
    popularity: 1200,
    trending: true,
    aiRecommended: true,
  },
  {
    id: 2,
    title: "Cultural Fest 2026",
    category: "Cultural",
    distance: "3.5 km",
    popularity: 950,
    trending: true,
    aiRecommended: false,
  },
  {
    id: 3,
    title: "Startup Pitch Night",
    category: "Entrepreneurship",
    distance: "1.2 km",
    popularity: 700,
    trending: false,
    aiRecommended: true,
  },
  {
    id: 4,
    title: "Art & Music Carnival",
    category: "Arts",
    distance: "4.8 km",
    popularity: 1100,
    trending: true,
    aiRecommended: false,
  },
  {
    id: 5,
    title: "Robotics Workshop",
    category: "Technical",
    distance: "2.7 km",
    popularity: 600,
    trending: false,
    aiRecommended: true,
  },
  {
    id: 6,
    title: "Literature Open Mic",
    category: "Literature",
    distance: "3.0 km",
    popularity: 400,
    trending: false,
    aiRecommended: false,
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

  // Simulate user interest
  const aiRecommended = mockEvents.filter((e) => e.aiRecommended);
  const trending = mockEvents.filter((e) => e.trending);
  const nearby = mockEvents;

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
            {nearby.map((event, index) => (
              <div
                key={event.id}
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
                <div style={getStyles(isMobile).cardHeader}>
                  <h4 style={getStyles(isMobile).cardTitle}>{event.title}</h4>
                </div>

                <div style={getStyles(isMobile).categoryBadge}>
                  {event.category}
                </div>

                {event.distance && (
                  <div style={getStyles(isMobile).cardMeta}>
                    <span style={{ fontWeight: 500 }}>Distance:</span>{" "}
                    {event.distance}
                  </div>
                )}

                {event.popularity && event.trending && (
                  <div style={getStyles(isMobile).cardMeta}>
                    <span style={{ fontWeight: 500 }}>Interest:</span> 🔥{" "}
                    {event.popularity}
                  </div>
                )}

                {event.aiRecommended && (
                  <div style={getStyles(isMobile).aiRecommendedBadge}>
                    ✨ AI Recommended
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* AI Recommended Section */}
        <section style={getStyles(isMobile).section}>
          <h3 style={getStyles(isMobile).sectionTitle}>✨ AI Recommended</h3>
          <div style={getStyles(isMobile).cardsGrid}>
            {aiRecommended.map((event, index) => (
              <div
                key={event.id}
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
                <div style={getStyles(isMobile).cardHeader}>
                  <h4 style={getStyles(isMobile).cardTitle}>{event.title}</h4>
                </div>

                <div style={getStyles(isMobile).categoryBadge}>
                  {event.category}
                </div>

                {event.distance && (
                  <div style={getStyles(isMobile).cardMeta}>
                    <span style={{ fontWeight: 500 }}>Distance:</span>{" "}
                    {event.distance}
                  </div>
                )}

                {event.popularity && event.trending && (
                  <div style={getStyles(isMobile).cardMeta}>
                    <span style={{ fontWeight: 500 }}>Interest:</span> 🔥{" "}
                    {event.popularity}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Trending Events Section */}
        <section style={getStyles(isMobile).section}>
          <h3 style={getStyles(isMobile).sectionTitle}>🔥 Trending Events</h3>
          <div style={getStyles(isMobile).cardsGrid}>
            {trending.map((event, index) => (
              <div
                key={event.id}
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
                <div style={getStyles(isMobile).cardHeader}>
                  <h4 style={getStyles(isMobile).cardTitle}>{event.title}</h4>
                </div>

                <div style={getStyles(isMobile).categoryBadge}>
                  {event.category}
                </div>

                {event.distance && (
                  <div style={getStyles(isMobile).cardMeta}>
                    <span style={{ fontWeight: 500 }}>Distance:</span>{" "}
                    {event.distance}
                  </div>
                )}

                {event.popularity && event.trending && (
                  <div style={getStyles(isMobile).cardMeta}>
                    <span style={{ fontWeight: 500 }}>Interest:</span> 🔥{" "}
                    {event.popularity}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Explore More Section */}
        <section style={getStyles(isMobile).section}>
          <h3 style={getStyles(isMobile).sectionTitle}>🌐 Explore More</h3>
          <div style={getStyles(isMobile).cardsGrid}>
            {exploreLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={getStyles(isMobile).exploreCard}
                data-aos="fade-up"
                data-aos-duration="800"
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
  cardHeader: {
    marginBottom: "8px",
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: "8px",
    fontSize: "18px",
    color: "#1e293b",
    fontWeight: "600",
  },
  categoryBadge: {
    fontSize: isMobile ? "11px" : "13px",
    fontWeight: "500",
    backgroundColor: "rgba(37, 99, 235, 0.1)",
    color: "#2563eb",
    display: "inline-block",
    borderRadius: "6px",
    padding: "4px 10px",
    marginBottom: "8px",
  },
  cardMeta: {
    fontSize: isMobile ? "12px" : "13px",
    color: "#64748b",
    marginBottom: "6px",
  },
  aiRecommendedBadge: {
    fontSize: isMobile ? "11px" : "12px",
    fontWeight: "600",
    backgroundColor: "linear-gradient(90deg, #a78bfa 0%, #60a5fa 100%)",
    color: "white",
    display: "inline-block",
    borderRadius: "6px",
    padding: "4px 10px",
    marginTop: "8px",
  },
  linkDesc: {
    fontSize: isMobile ? "13px" : "14px",
    color: "#64748b",
    margin: 0,
    lineHeight: "1.4",
  },
});
