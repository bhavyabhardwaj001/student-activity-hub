import { useEffect, useState } from "react";

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
        <h2>Student Activities Hub</h2>
      </header>

      <main style={{ padding: "16px" }}>
        <h3>Upcoming Events</h3>

        {loading && <p>Loading events...</p>}

        {!loading && events.length === 0 && <p>No events found.</p>}

        <ul>
          {events.map((event) => (
            <li key={event._id} style={{ marginBottom: "12px" }}>
              <strong>{event.title}</strong>
              <br />
              <small>
                {event.category} |{" "}
                {new Date(event.date).toLocaleDateString()}
              </small>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;