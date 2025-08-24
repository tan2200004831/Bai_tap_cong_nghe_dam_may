// src/client/src/App.js
import React, { useState, useEffect } from "react"; // Import hooks
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import ProjectList from "./components/ProjectList";

function App() {
  const [serverTime, setServerTime] = useState(""); // Thêm state

  // Gọi API khi component được mount
  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => setServerTime(data.time));
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Profile />
        <ProjectList />
        <div className="container text-center mt-5">
          <p className="text-muted">Server Time: {serverTime}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
