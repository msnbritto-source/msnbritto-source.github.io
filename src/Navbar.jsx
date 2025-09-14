import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Your existing sections */}
      <main>
        <section id="home" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-semibold">About Us</h2>
        </section>

        <section id="portfolio" className="min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-semibold">Portfolio</h2>
        </section>

        <section id="services" className="min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-semibold">Services</h2>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-semibold">Contact</h2>
        </section>
      </main>
    </>
  );
}

export default App;
