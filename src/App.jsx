// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import AboutServices from "./components/AboutServices";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Portfolio />
        <AboutServices />
      </main>
      <Footer />
    </div>
  );
}
