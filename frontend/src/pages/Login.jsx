import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(""); // ✅ clear old errors
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/events");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-bg">
      {/* Animated Background */}
      <svg
        className="login-bg-svg"
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        fill="none"
      >
        <motion.ellipse
          cx="200"
          cy="300"
          rx="180"
          ry="120"
          fill="#60a5fa"
          fillOpacity="0.25"
          animate={{
            cx: [200, 220, 200],
            cy: [300, 320, 300],
            rx: [180, 200, 180],
            ry: [120, 140, 120],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.ellipse
          cx="600"
          cy="350"
          rx="140"
          ry="90"
          fill="#2563eb"
          fillOpacity="0.18"
          animate={{
            cx: [600, 580, 600],
            cy: [350, 370, 350],
            rx: [140, 160, 140],
            ry: [90, 110, 90],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <motion.div
        className="login-glass-card"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome Back ✨
        </motion.h2>

        <form onSubmit={handleSubmit} className="login-form">
          <motion.div
            className="login-field"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
              className="login-input"
            />
          </motion.div>

          <motion.div
            className="login-field"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
            />
          </motion.div>

          {/* ✅ Error message */}
          {error && <p className="error-text">{error}</p>}

          <motion.button
            type="submit"
            className="login-btn"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
          >
            {loading ? <div className="spinner"></div> : "Login"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;