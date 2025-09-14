// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-6 sm:grid-cols-3">
        <div>
          <div className="text-white font-bold text-lg">WixLab</div>
          <p className="mt-3 text-sm">Beautiful websites & product design.</p>
        </div>

        <div>
          <div className="font-semibold text-sm text-white">Services</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Web design</li>
            <li>Development</li>
            <li>Branding</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-sm text-white">Contact</div>
          <div className="mt-3 text-sm">hello@rynard.com</div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Rynyard — Built with ❤️
        </div>
      </div>
    </footer>
  );
}
