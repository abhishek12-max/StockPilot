import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-3xl font-extrabold tracking-tight text-white"
        >
          Stock
          <span className="text-violet-500">Pilot</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/how-it-works"
            className="text-xl text-gray-300 transition-colors duration-300 hover:text-white"
          >
            How It Works
          </Link>

          <Link
            to="/pricing"
            className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
          >
            Pricing
          </Link>

          <Link
            to="/support"
            className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
          >
            Support
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">

          <Link
            to="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/5 hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:scale-105 hover:bg-violet-500"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((previous) => !previous)}
          className="text-white md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden">

          <div className="flex flex-col gap-2 px-6 py-6">

            <Link
              to="/how-it-works"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              How It Works
            </Link>

            <Link
              to="/pricing"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              Pricing
            </Link>

            <Link
              to="/support"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              Support
            </Link>

            <div className="my-3 border-t border-white/10" />

            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded-lg border border-white/10 px-4 py-3 text-center text-slate-300 transition-all hover:bg-white/5 hover:text-white"
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={closeMenu}
              className="rounded-full bg-violet-600 px-5 py-3 text-center font-semibold text-white shadow-lg shadow-violet-500/20 transition-all hover:bg-violet-500"
            >
              Get Started
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;