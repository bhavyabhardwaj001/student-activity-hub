import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import "../App.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
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
    <div>
      <header className="header">
        <h2>Student Activities Hub</h2>
        <p style={{ margin: "4px 0 0", fontSize: "14px", color: "#ddd" }}>
          A centralized platform for college events
        </p>
      </header>

      <main className="container">
        <h3 className="section-title">Upcoming Events</h3>

        {loading && <p>Loading events...</p>}

        {!loading && events.length === 0 && <p>No events available.</p>}

        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            width: "100%",
            maxWidth: "300px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
          <button onClick={() => setFilter("All")}>All</button>
          <button onClick={() => setFilter("Technical")}>Technical</button>
          <button onClick={() => setFilter("Cultural")}>Cultural</button>
          <button onClick={() => setFilter("Sports")}>Sports</button>
          <button onClick={() => setFilter("Management")}>Management</button>
        </div>
        <div className="cards-grid">
          {events
            .filter((event) => {
              const matchesCategory =
                filter === "All" ? true : event.category === filter;

              const matchesSearch = event.title
                .toLowerCase()
                .includes(search.toLowerCase());

              return matchesCategory && matchesSearch;
            })
            
            .map((event) => {
              const alreadyRegistered = event.participants?.includes(userId);

              return (
                <div key={event._id} className="event-card">
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
                      }}
                    />
                  )}

                  <h4>{event.title}</h4>

                  <div className="event-meta">
                    {event.category} |{" "}
                    {new Date(event.date).toLocaleDateString()}
                  </div>

                  <div
                    style={{
                      fontSize: "13px",
                      color: "#666",
                      marginBottom: "8px",
                    }}
                  >
                    📍 {event.location}
                  </div>

                  <div className="event-desc">{event.description}</div>
                  <p style={{ fontSize: "13px", marginTop: "8px" }}>
                    Participants: {event.participants?.length || 0}
                  </p>
                  <button
                    className="register-btn"
                    onClick={() => handleRegister(event._id)}
                    disabled={alreadyRegistered}
                  >
                    {alreadyRegistered ? "Registered" : "Register"}
                  </button>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}

export default Events;
