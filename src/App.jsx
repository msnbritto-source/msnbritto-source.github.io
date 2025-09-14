// src/App.jsx
import React from "react";
import Navbar from "./Navbar";   // ✅ Import the Navbar

export default function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      {/* ✅ Navbar is now rendered */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Rynyard's Portfolio</h1>
        <p className="text-lg text-gray-300">
          Creative Developer & Designer bringing ideas to life with motion and design.
        </p>
      </section>
    </div>
  );
}
