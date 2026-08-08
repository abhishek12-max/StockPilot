import Navbar from "./Navbar";
import Footer from "./Footer";

function Authlayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />

      <main className="flex-1 px-6 pt-24">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Authlayout;