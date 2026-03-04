import { useEffect, useState } from "react";
import "../App.css";

function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/clubs")
      .then((res) => res.json())
      .then((data) => {
        setClubs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="section-title">College Clubs</h2>

      {loading && <p>Loading clubs...</p>}

      {!loading && clubs.length === 0 && <p>No clubs available.</p>}

      {clubs.map((club) => (
        <div key={club._id} className="event-card">
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
              }}
            />
          )}

          <h3>{club.name}</h3>

          <div className="event-meta">{club.category}</div>

          <p className="event-desc">{club.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Clubs;