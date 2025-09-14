import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-heading font-bold">Alphot</div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-gray-300">
          <a href="#pages" className="hover:text-white transition">All Pages</a>
          <a href="#about" className="hover:text-white transition">About Us</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Button */}
        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full text-sm font-medium">
          Request Demo
        </button>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 px-8 md:px-16 py-16 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
            Generate Images <br /> with Alphot
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Create stunning visuals effortlessly with AI-powered image generation.
          </p>

          {/* CTA Buttons */}
          <div className="flex space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-medium">
              Get Started Now
            </button>
            <button className="border border-gray-400 hover:border-white px-6 py-3 rounded-full font-medium">
              Try API Now
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">No credit card required*</p>
        </div>

        {/* Right Content: Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img src="/frame_1.jpg" alt="AI Image 1" className="rounded-lg" />
          <img src="/frame_2.jpg" alt="AI Image 2" className="rounded-lg" />
          <img src="/frame_3.jpg" alt="AI Image 3" className="rounded-lg" />
          <img src="/frame_4.jpg" alt="AI Image 4" className="rounded-lg" />
          <img src="/frame_5.jpg" alt="AI Image 5" className="rounded-lg col-span-2" />
        </div>
      </section>

      {/* Featured Logos */}
      <section className="text-center py-12 border-t border-gray-700">
        <p className="text-gray-400 mb-6">As Featured In</p>
        <div className="flex justify-center space-x-10 opacity-70">
          <span className="text-xl font-bold">Logoipsum</span>
          <span className="text-xl font-bold">Logoipsum</span>
          <span className="text-xl font-bold">Logoipsum</span>
          <span className="text-xl font-bold">Logoipsum</span>
        </div>
      </section>
    </div>
  );
}

export default App;
