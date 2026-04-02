import React from "react";
import { motion } from "framer-motion";
import "../components/DemoPaymentModal.css"; // Reuse glassmorphism styles

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
    color: "#e11d48",
  },
  {
    title: "Meetup",
    url: "https://www.meetup.com/",
    desc: "Find meetups and communities",
    color: "#2563eb",
  },
  {
    title: "Eventbrite",
    url: "https://www.eventbrite.com/",
    desc: "Explore global events on Eventbrite",
    color: "#a21caf",
  },
];

// --- Card Component ---
function EventCard({ event, badge }) {
  return (
    <motion.div
      className="explore-card glass"
      whileHover={{ scale: 1.04, boxShadow: "0 6px 32px #60a5fa33" }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      <div className="explore-card-header">
        <span className="explore-card-title">{event.title}</span>
        {badge && <span className="explore-card-badge">{badge}</span>}
      </div>
      <div className="explore-card-meta">
        <span className="explore-card-category">{event.category}</span>
        {event.distance && (
          <span className="explore-card-distance">📍 {event.distance}</span>
        )}
        {event.popularity && event.trending && (
          <span className="explore-card-trending">🔥 {event.popularity} interested</span>
        )}
      </div>
    </motion.div>
  );
}

function ExploreLinkCard({ link }) {
  return (
    <motion.a
      className="explore-link-card glass"
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, boxShadow: `0 6px 32px ${link.color}44` }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      style={{ borderLeft: `5px solid ${link.color}` }}
    >
      <div className="explore-link-title">{link.title}</div>
      <div className="explore-link-desc">{link.desc}</div>
    </motion.a>
  );
}

// --- Main Page ---
export default function Explore() {
  // Simulate user interest
  const userInterest = "Technical";
  const aiRecommended = mockEvents.filter(e => e.aiRecommended);
  const trending = mockEvents.filter(e => e.trending);
  const nearby = mockEvents;

  return (
    <div className="explore-root">
      <motion.div
        className="explore-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>Explore Events Near You</h1>
        <div className="explore-subtext">✨ AI-powered recommendations</div>
      </motion.div>

      {/* Nearby Events */}
      <motion.section
        className="explore-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h2 className="explore-section-title">📍 Nearby Events</h2>
        <div className="explore-card-list">
          {nearby.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </motion.section>

      {/* AI Recommended */}
      <motion.section
        className="explore-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="explore-section-title">✨ AI Recommended</h2>
        <div className="explore-card-list">
          {aiRecommended.map(event => (
            <EventCard key={event.id} event={event} badge="AI Recommended" />
          ))}
        </div>
      </motion.section>

      {/* Trending Events */}
      <motion.section
        className="explore-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h2 className="explore-section-title">🔥 Trending Events</h2>
        <div className="explore-card-list">
          {trending.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </motion.section>

      {/* Explore More */}
      <motion.section
        className="explore-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h2 className="explore-section-title">🌐 Explore More</h2>
        <div className="explore-link-list">
          {exploreLinks.map(link => (
            <ExploreLinkCard key={link.title} link={link} />
          ))}
        </div>
      </motion.section>
    </div>
  );
}
