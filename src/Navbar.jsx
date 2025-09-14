// src/components/Navbar.jsx
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/60 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
            WL
          </div>
          <span className="text-lg font-semibold text-gray-900">WixLab</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#portfolio" className="text-gray-700 hover:text-indigo-600 transition">Portfolio</a>
          <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
          <a href="#services" className="text-gray-700 hover:text-indigo-600 transition">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:scale-[.995] transition"
          >
            Start Project
          </a>
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="p-2 rounded-md text-gray-700 border border-gray-200"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#portfolio" className="text-gray-700">Portfolio</a>
            <a href="#about" className="text-gray-700">About</a>
            <a href="#services" className="text-gray-700">Services</a>
            <a href="#contact" className="text-gray-700">Contact</a>
            <a href="#contact" className="mt-2 inline-block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg">Start Project</a>
          </div>
        </div>
      )}
    </header>
  );
}
