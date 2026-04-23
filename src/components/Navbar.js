import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2 className="logo">Smart Stay</h2>

      <div className="nav-links">
        {/* Show only when logged in */}
        {token && (
          <>
            <NavLink to="/dashboard" className="nav-item">Dashboard</NavLink>
            <NavLink to="/complaints" className="nav-item">Complaints</NavLink>
            <NavLink to="/admin" className="nav-item">Admin</NavLink>
          </>
        )}

        {/* If NOT logged in */}
        {!token ? (
          <>
            <NavLink to="/login" className="btn-nav">Login</NavLink>
            <NavLink to="/register" className="btn-nav">Register</NavLink>
          </>
        ) : (
          <button onClick={handleLogout} className="btn-nav">
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;