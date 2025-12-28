 import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // You can set any credentials you want here
    if ((username === "admin" && password === "admin") ||
        (username === "Srujana" && password === "1234")) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
