import { useEffect, useState } from "react";
import "../App.css";

function Clubs() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/clubs")
      .then((res) => res.json())
      .then((data) => setClubs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <header className="header">
        <h2>Clubs</h2>
        <p>Explore student clubs and communities</p>
      </header>

      <main className="container">
        <div className="cards-grid">
          {clubs.map((club) => (
            <div key={club._id} className="event-card" data-aos="fade-up">
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
                    transition: "transform 0.3s ease",
                  }}
                />
              )}

              <h4>{club.name}</h4>

              <div className="event-meta">{club.category}</div>

              <div className="event-desc">{club.description}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Clubs;
