import { useState } from "react";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    alert(`Registered: ${firstName} ${lastName}`);
  };

  return (
    <div className="card">
      <h2>Create Account</h2>

      {error && <p className="error">{error}</p>}

    <div className="name-row">
      <input
         placeholder="First Name"
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)}
      />

     <input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <small className="hint">Password must be at least 6 characters</small>

      {/* Confirm Password */}
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {/* Button */}
      <button
        onClick={handleRegister}
        disabled={
          !firstName ||
          !lastName ||
          !email ||
          !password ||
          !confirmPassword
        }
      >
        Register
      </button>
    </div>
  );
}

export default Register;