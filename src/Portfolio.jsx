// src/components/Portfolio.jsx
import React from "react";

const items = [
  { id: 1, title: "Project One", desc: "UI Design & dev", img: "" },
  { id: 2, title: "Project Two", desc: "Brand & Website", img: "" },
  { id: 3, title: "Project Three", desc: "Motion Design", img: "" },
  { id: 4, title: "Project Four", desc: "Ecommerce", img: "" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold text-indigo-600">Our Work</h2>
          <p className="mt-3 text-3xl font-bold text-gray-900">Selected portfolio</p>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">A glance at projects that combine design and development for real results.</p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.id} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition">
              <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                {/* Replace with <img src={it.img} /> */}
                screenshot
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
                <a href="#" className="mt-4 inline-block text-indigo-600 hover:underline">View case study →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="https://www.behance.net" target="_blank" rel="noreferrer" className="inline-block bg-white border border-gray-200 px-6 py-3 rounded-lg shadow-sm text-gray-700">
            View more projects
          </a>
        </div>
      </div>
    </section>
  );
}
