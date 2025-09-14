// src/components/AboutServices.jsx
import React from "react";

export default function AboutServices() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h3 className="text-sm font-semibold text-indigo-600">About us</h3>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">We design and build high quality digital products</h2>
          <p className="mt-4 text-gray-600">Helping startups and brands bring ideas to life — from strategy to product design and development.</p>
          <ul className="mt-6 grid gap-3">
            <li className="text-gray-700">• Product strategy & research</li>
            <li className="text-gray-700">• UI / UX Design</li>
            <li className="text-gray-700">• Front-end & Back-end development</li>
          </ul>
        </div>

        <div id="services">
          <h3 className="text-sm font-semibold text-indigo-600">Services</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="bg-gray-50 border rounded-lg p-6">
              <h4 className="font-semibold">Web design</h4>
              <p className="mt-2 text-sm text-gray-600">Pixel-perfect interfaces that convert.</p>
            </div>
            <div className="bg-gray-50 border rounded-lg p-6">
              <h4 className="font-semibold">Web development</h4>
              <p className="mt-2 text-sm text-gray-600">Fast modern websites and apps.</p>
            </div>
            <div className="bg-gray-50 border rounded-lg p-6">
              <h4 className="font-semibold">Branding</h4>
              <p className="mt-2 text-sm text-gray-600">Identity, logos and visuals.</p>
            </div>
            <div className="bg-gray-50 border rounded-lg p-6">
              <h4 className="font-semibold">Motion & animation</h4>
              <p className="mt-2 text-sm text-gray-600">Micro-interactions and hero transitions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
