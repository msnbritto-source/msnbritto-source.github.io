export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] to-[#0f0c29] text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Alphot</h1>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-gray-300">
          <a href="#pages" className="hover:text-white">All Pages</a>
          <a href="#about" className="hover:text-white">About Us</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        {/* Button */}
        <button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full font-semibold hover:opacity-90 transition">
          Request Demo
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 mt-12">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Generate Images <br /> with <span className="text-purple-400">Alphot</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Create stunning visuals effortlessly with AI-powered image generation.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full font-semibold hover:opacity-90 transition">
              Get Started Now
            </button>
            <button className="px-6 py-3 border border-gray-400 rounded-full font-semibold hover:bg-gray-800 transition">
              Try API Now
            </button>
          </div>

          <p className="mt-3 text-sm text-gray-400">No credit card required*</p>
        </div>

        {/* Right Content - Images */}
        <div className="grid grid-cols-2 gap-4 mt-12 md:mt-0">
          <img src="/frames/frame_1.jpg" alt="AI 1" className="rounded-xl w-40 md:w-56" />
          <img src="/frames/frame_2.jpg" alt="AI 2" className="rounded-xl w-40 md:w-56" />
          <img src="/frames/frame_3.jpg" alt="AI 3" className="rounded-xl w-40 md:w-56" />
          <img src="/frames/frame_4.jpg" alt="AI 4" className="rounded-xl w-40 md:w-56" />
        </div>
      </section>

      {/* Featured Section */}
      <section className="mt-16 text-center">
        <p className="text-gray-400 uppercase tracking-wide">As Featured In</p>
        <div className="flex flex-wrap justify-center gap-8 mt-6 opacity-80">
          <span className="text-lg font-bold">Logoipsum</span>
          <span className="text-lg font-bold">Logoipsum</span>
          <span className="text-lg font-bold">Logoipsum</span>
          <span className="text-lg font-bold">Logoipsum</span>
        </div>
      </section>
    </div>
  );
}
