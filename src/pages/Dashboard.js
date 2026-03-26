import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <div className="grid">
        <div className="card small">
          <h3>Complaints</h3>
          <p>Manage your maintenance requests</p>
          <Link to="/complaints"><button>View</button></Link>
        </div>

        <div className="card small">
          <h3>Profile</h3>
          <p>User information</p>
          <button disabled>Coming Soon</button>
        </div>

        <div className="card small">
          <h3>Payments</h3>
          <p>Track payments</p>
          <button disabled>Coming Soon</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;