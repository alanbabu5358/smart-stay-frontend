import { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("https://smart-stay-backend-fbyj.onrender.com/api/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <div className="profile-card">
        <h3>Welcome, {user.name}</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>ID:</strong> {user.id}</p>
      </div>
    </div>
  );
}

export default Dashboard;