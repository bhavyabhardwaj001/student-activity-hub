import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <header className="header">
        <h2>Student Activities Hub</h2>
        <p style={{ margin: "4px 0 0", fontSize: "14px", color: "#ddd" }}>
          A centralized platform for college events
        </p>
      </header>

      <main className="container">
        <h3>Upcoming Events</h3>

        {loading && <p>Loading events...</p>}

        {!loading && events.length === 0 && <p>No events available.</p>}

        {events.map((event) => (
          <div key={event._id} className="event-card">
            <h4>{event.title}</h4>
            <div className="event-meta">
              {event.category} | {new Date(event.date).toLocaleDateString()}
            </div>
            <div className="event-desc">{event.description}</div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
