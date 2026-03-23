import { useEffect, useState } from "react";
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
    <div>
      <header className="header">
        <h2>My Registered Events</h2>
      </header>

      <main className="container">
        {loading && <p>Loading events...</p>}

        {!loading && events.length === 0 && (
          <p>You have not registered for any events yet.</p>
        )}

        <div className="cards-grid">
          {events.map((event) => (
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
                {event.category} | {new Date(event.date).toLocaleDateString()}
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
              <div className="event-desc">{event.description}</div>

              <button
                className="register-btn"
                onClick={() => handleUnregister(event._id)}
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
