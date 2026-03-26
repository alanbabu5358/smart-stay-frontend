import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      {/* Logo */}
      <h2 className="logo">Smart Stay</h2>

      {/* Navigation Links */}
      <div className="nav-links">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/dashboard" className="nav-item">Dashboard</NavLink>
        <NavLink to="/complaints" className="nav-item">Complaints</NavLink>
        <NavLink to="/admin" className="nav-item">Admin</NavLink>

        {/* Highlight Buttons */}
        <NavLink to="/login" className="btn-nav">Login</NavLink>
        <NavLink to="/register" className="btn-nav">Register</NavLink>
      </div>
    </div>
  );
}

export default Navbar;