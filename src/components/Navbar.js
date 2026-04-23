import { NavLink, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  // ✅ Hide navbar on login/register pages
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // 🔥 force refresh
  };

  return (
    <div className="navbar">
      <h2 className="logo">Smart Stay</h2>

      <div className="nav-links">

        {token ? (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/complaints">Complaints</NavLink>
            <NavLink to="/admin">Admin</NavLink>

            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}

      </div>
    </div>
  );
}

export default Navbar;