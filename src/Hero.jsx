// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        {/* Left: text */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Crafting Modern Digital Experiences
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            We design and build fast, conversion-focused websites and web apps with thoughtful design and engineering.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
              Start a Project
            </a>
            <a href="#portfolio" className="inline-block border border-gray-200 px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition">
              View Portfolio
            </a>
          </div>

          <div className="mt-8 flex items-center gap-8">
            <div>
              <div className="text-sm text-gray-500">Trusted by</div>
              <div className="flex gap-4 mt-3">
                <div className="h-8 w-20 bg-gray-100 rounded-md" />
                <div className="h-8 w-20 bg-gray-100 rounded-md" />
                <div className="h-8 w-20 bg-gray-100 rounded-md" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: image mockup */}
        <div className="md:w-1/2">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-900 to-purple-700 p-6">
            <div className="bg-white/5 rounded-xl p-6 text-white">
              {/* A placeholder "mockup" — replace with screenshot or carousel */}
              <div className="w-full h-56 md:h-80 bg-gradient-to-br from-indigo-800/40 to-purple-800/20 rounded-lg flex items-center justify-center text-white text-xl">
                Featured Work Mockup
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-20 bg-white/10 rounded" />
                <div className="h-20 bg-white/10 rounded" />
                <div className="h-20 bg-white/10 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
