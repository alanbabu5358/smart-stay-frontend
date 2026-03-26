import { useState } from "react";

function Complaints() {
  const [complaints, setComplaints] = useState([]);
  const [text, setText] = useState("");

  const addComplaint = () => {
    if (!text.trim()) return;

    setComplaints([
      ...complaints,
      { text: text, status: "Pending" }
    ]);

    setText("");
  };

  return (
    <div className="card">
      <h2>My Complaints</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your complaint..."
      />

      <button onClick={addComplaint}>Add Complaint</button>

      <ul>
        {complaints.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            No complaints yet
          </p>
        ) : (
          complaints.map((c, index) => (
            <li key={index}>
              <span>{c.text}</span>
              <span className="status">{c.status}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Complaints;