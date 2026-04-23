import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // ✅ If no token → go to login
    if (!token) {
      navigate("/login");
      return;
    }

    fetch("https://smart-stay-backend-fbyj.onrender.com/api/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        // ✅ If token invalid → force logout
        if (!res.ok) {
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then(data => {
        setUser(data);
      })
      .catch(err => {
        console.error(err);

        // ✅ Remove bad token & redirect
        localStorage.removeItem("token");
        navigate("/login");
      });

  }, [navigate]);

  // ✅ Loading state
  if (!user) {
    return <p>Loading profile...</p>;
  }

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