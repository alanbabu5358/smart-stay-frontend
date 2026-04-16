import { useState, useEffect } from "react";

function Complaints() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complaints, setComplaints] = useState([]);

  // Fetch complaints
  useEffect(() => {
    fetch("https://smart-stay-backend-fbyj.onrender.com/api/complaints")
      .then(res => res.json())
      .then(data => setComplaints(data));
  }, []);

  // Submit complaint
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://smart-stay-backend-fbyj.onrender.com/api/complaints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, description })
    });

    alert("Complaint added!");

    // refresh list
    window.location.reload();
  };

  return (
    <div>
      <h2>Complaints</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <h3>All Complaints</h3>

      {complaints.map((c) => (
        <div key={c.id}>
          <p>{c.title}</p>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Complaints;