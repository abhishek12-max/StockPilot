import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />

      <main className="flex-1 px-6">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;