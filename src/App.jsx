import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />   {/* ✅ Navbar will appear at top */}

      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black text-white"
      >
        <h1 className="text-5xl font-bold">Rynyard's Portfolio</h1>
        <p className="mt-4 text-lg text-gray-300">
          Creative Developer & Designer bringing ideas to life with motion and design.
        </p>
      </section>
    </>
  );
}

export default App;
