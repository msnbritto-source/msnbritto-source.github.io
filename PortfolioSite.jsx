import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/frames/frame_1.jpg", caption: "Project 1", link: "https://www.behance.net/brittomsn" },
  { src: "/frames/frame_2.jpg", caption: "Project 2", link: "https://www.behance.net/brittomsn" },
  { src: "/frames/frame_3.jpg", caption: "Project 3", link: "https://www.behance.net/brittomsn" },
  { src: "/frames/frame_4.jpg", caption: "Project 4", link: "https://www.behance.net/brittomsn" },
  { src: "/frames/frame_5.jpg", caption: "Project 5", link: "https://www.behance.net/brittomsn" },
];

export default function PortfolioSite() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Rynyard's Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-2xl max-w-2xl"
        >
          Creative Developer & Designer bringing ideas to life with motion and design.
        </motion.p>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">About Me</h2>
        <p className="text-lg text-gray-300">
          I design and develop modern, interactive websites with a focus on clean visuals and smooth user experience.
        </p>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden cursor-pointer group bg-gray-800 rounded-lg" onClick={() => setSelected(img)}>
              <img src={img.src} alt={img.caption} className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
              <div className="p-4">{img.caption}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="https://www.behance.net/brittomsn" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 rounded-lg hover:underline">See More on Behance</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">Contact</h2>
        <p className="text-lg text-gray-300">
          Feel free to reach out via email at <a href="mailto:hello@example.com" className="underline hover:text-blue-400">hello@example.com</a>.
        </p>
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl max-w-3xl w-full relative">
            <button onClick={() => setSelected(null)} className="absolute top-2 right-2 text-white text-xl">✕</button>
            <img src={selected.src} alt={selected.caption} className="w-full rounded-lg" />
            <div className="mt-4 flex justify-between items-center">
              <h3 className="text-xl font-bold">{selected.caption}</h3>
              <a href={selected.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">View on Behance</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
