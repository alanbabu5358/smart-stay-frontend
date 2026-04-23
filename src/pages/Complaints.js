import { useEffect, useState } from "react";

function Complaints() {
  const [complaints, setComplaints] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // 🔹 Fetch complaints
  const fetchComplaints = () => {
    fetch("https://smart-stay-backend-fbyj.onrender.com/api/complaints")
      .then(res => res.json())
      .then(data => setComplaints(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  // 🔹 Add complaint
  const handleAddComplaint = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://smart-stay-backend-fbyj.onrender.com/api/complaints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          description
        })
      });

      if (res.ok) {
        alert("Complaint added");

        // clear form
        setTitle("");
        setDescription("");

        // refresh list
        fetchComplaints();
      } else {
        alert("Failed to add complaint");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="complaints-container">
      <h2>Complaints</h2>

      {/* ✅ ADD COMPLAINT FORM */}
      <form className="complaint-form" onSubmit={handleAddComplaint}>
        <h3>Add Complaint</h3>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {/* ✅ DISPLAY COMPLAINTS */}
      {complaints.length === 0 ? (
        <p>No complaints found</p>
      ) : (
        <div className="complaints-grid">
          {complaints.map((c) => (
            <div key={c.id} className="complaint-card">
              <h3>{c.title}</h3>
              <p><strong>Description:</strong> {c.description}</p>
              <p><strong>Status:</strong> {c.status}</p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(c.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Complaints;