import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  // ✅ Keep navbar in sync with localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2 className="logo">Smart Stay</h2>

      <div className="nav-links">

        {/* ✅ Show only when logged in */}
        {token && (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/complaints">Complaints</NavLink>
            <NavLink to="/admin">Admin</NavLink>
          </>
        )}

        {/* ❌ Not logged in */}
        {!token ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}

      </div>
    </div>
  );
}

export default Navbar;