// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">Rynyard</div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#portfolio" className="hover:text-purple-400">Portfolio</a>
          <a href="#services" className="hover:text-purple-400">Services</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>

        {/* Button */}
        <button className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg shadow hover:opacity-90">
          Request Demo
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-900 px-4 pb-4 space-y-2">
          <a href="#home" className="block hover:text-purple-400">Home</a>
          <a href="#about" className="block hover:text-purple-400">About</a>
          <a href="#portfolio" className="block hover:text-purple-400">Portfolio</a>
          <a href="#services" className="block hover:text-purple-400">Services</a>
          <a href="#contact" className="block hover:text-purple-400">Contact</a>
        </div>
      )}
    </nav>
  );
}
