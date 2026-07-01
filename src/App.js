import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    alert("🎉 Welcome to React Hooks!");
  }, []);

  const [number, setNumber] = useState(5);

  const multiplyByTwo = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  const showWelcome = useCallback(() => {
    alert("👋 Welcome " + (name || "Student") + "!");
  }, [name]);

  const showMessage = useCallback(() => {
    alert("🌸 Have a Nice Day!");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #74ebd5, #ACB6E5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "700px",
          background: "#fff",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#4B0082",
            marginBottom: "30px",
          }}
        >
          ⚛ React Hooks Demo
        </h1>

        {/* useState */}
        <div
          style={{
            background: "#E3F2FD",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        >
          <h2>👤 useState - Student Name</h2>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "2px solid #2196F3",
              fontSize: "16px",
            }}
          />

          <h3 style={{ color: "#1565C0", marginTop: "15px" }}>
            Welcome, {name || "Student"} 😊
          </h3>
        </div>

        {/* useEffect */}
        <div
          style={{
            background: "#FFF3E0",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        >
          <h2>⚡ useEffect</h2>

          <p>
            ✔ Welcome alert appears automatically when the page loads.
          </p>
        </div>

        {/* useMemo */}
        <div
          style={{
            background: "#E8F5E9",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        >
          <h2>🧠 useMemo</h2>

          <h3>Current Number: {number}</h3>

          <button
            onClick={() => setNumber(number + 1)}
            style={{
              padding: "10px 20px",
              background: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ➕ Increase Number
          </button>

          <h3 style={{ color: "#2E7D32", marginTop: "15px" }}>
            Result = {multiplyByTwo}
          </h3>
        </div>

        {/* useCallback */}
        <div
          style={{
            background: "#F3E5F5",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h2>🔄 useCallback</h2>

          <button
            onClick={showWelcome}
            style={{
              padding: "10px 20px",
              background: "#673AB7",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginRight: "10px",
              fontSize: "16px",
            }}
          >
            👋 Welcome
          </button>

          <button
            onClick={showMessage}
            style={{
              padding: "10px 20px",
              background: "#FF9800",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            🌸 Show Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;