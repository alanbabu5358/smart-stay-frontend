import { useEffect, useState } from "react";

function Complaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetch("https://smart-stay-backend-fbyj.onrender.com/api/complaints")
      .then(res => res.json())
      .then(data => setComplaints(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="complaints-container">
      <h2>Complaints</h2>

      {complaints.length === 0 ? (
        <p>No complaints found</p>
      ) : (
        <div className="complaints-grid">
          {complaints.map((c) => (
            <div key={c.id} className="complaint-card">
              <h3>{c.title}</h3>
              <p><strong>Description:</strong> {c.description}</p>
              <p><strong>Status:</strong> {c.status}</p>
              <p><strong>Date:</strong> {new Date(c.created_at).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Complaints;