import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Smart Stay</h2>

      <div className="nav-links">
        {token ? (
          <>
            <NavLink to="/dashboard" className="nav-item">
              Dashboard
            </NavLink>

            <NavLink to="/complaints" className="nav-item">
              Complaints
            </NavLink>

            <NavLink to="/admin" className="nav-item">
              Admin
            </NavLink>

            <button className="btn-nav" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="nav-item">
              Login
            </NavLink>

            <NavLink to="/register" className="nav-item">
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;