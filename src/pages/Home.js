import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="card center">
      <h1>Welcome to Smart Stay</h1>
      <p>Modern Apartment Management System</p>

      <div className="btn-group">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button className="secondary">Register</button></Link>
      </div>
    </div>
  );
}

export default Home;