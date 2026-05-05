import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { apiUrl } from "../api";
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
      const res = await fetch(apiUrl("/api/auth/login"), {
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
      {/* Magical Animated Starfield Background */}
      <div className="login-bg-svg">
        {[...Array(36)].map((_, i) => {
          // Randomize initial position and animation for each star
          const top = Math.random() * 95;
          const left = Math.random() * 95;
          const delay = Math.random() * 4;
          const duration = 5 + Math.random() * 5;
          const size = 4 + Math.random() * 6;
          return (
            <motion.span
              key={i}
              className="star"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
              }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.7, 1.2, 0.7],
                background: [
                  "linear-gradient(135deg, #fff 60%, #60a5fa 100%)",
                  "linear-gradient(135deg, #60a5fa 60%, #2563eb 100%)",
                  "linear-gradient(135deg, #2563eb 60%, #f59e0b 100%)",
                  "linear-gradient(135deg, #f59e0b 60%, #fff 100%)",
                  "linear-gradient(135deg, #fff 60%, #60a5fa 100%)",
                ],
                filter: [
                  "drop-shadow(0 0 8px #60a5fa88)",
                  "drop-shadow(0 0 16px #2563eb88)",
                  "drop-shadow(0 0 12px #f59e0b88)",
                  "drop-shadow(0 0 8px #60a5fa88)",
                ],
              }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: "mirror",
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

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
          Welcome Back 
        </motion.h2>

        <form onSubmit={handleSubmit} className="login-form">
          <motion.div
            className="login-field"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
              placeholder=" "
            />
            <label>Email</label>
          </motion.div>

          <motion.div
            className="login-field"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
              placeholder=" "
            />
            <label>Password</label>
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
