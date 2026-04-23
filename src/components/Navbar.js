import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  // 🔥 Keeps navbar in sync with login/logout
  useEffect(() => {
    const syncToken = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", syncToken);

    return () => {
      window.removeEventListener("storage", syncToken);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
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