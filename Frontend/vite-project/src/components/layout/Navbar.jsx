import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex justify-between items-center">

                {/* Logo */}

                <Link
  to="/"
  className="text-3xl font-extrabold tracking-tight text-white"
>
  Trade
  <span className="text-purple-500">X</span>
</Link>

                {/* Desktop Menu */}

                <div className="hidden md:flex items-center gap-8">
                   <Link to={"/"} className="text-gray-300 hover:text-white transition-colors duration-300 text-xl">Home</Link>
                   <Link to={"/about"} className="text-gray-300 hover:text-white transition-colors duration-300 text-xl">About</Link>
                   <Link to={"/pricing"} className="text-gray-300 hover:text-white transition-colors duration-300 text-xl">Pricing</Link>
                    <Link to={"/support"} className="text-gray-300 hover:text-white transition-colors duration-300 text-xl">Support</Link>

                </div>

                {/* Desktop Buttons */}

                <div className="hidden md:flex items-center gap-4">

                    <Link
  to="/login"
  className="px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 text-2xl"
>
  Login
</Link>

                    <Link
  to="/signup"
  className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30 text-xl"
>
  Get Started
</Link>

                </div>

                {/* Mobile Icon */}

                <button
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                >
                    {
                        open
                            ? <X size={28}/>
                            : <Menu size={28}/>
                    }
                </button>

            </div>

            {/* Mobile Menu */}

            {
                open && (

                    <div className="md:hidden bg-slate-950 border-t border-white/10">

                        <div className="flex flex-col p-6 gap-5">
                            <Link to={"/"} className="text-gray-300 hover:text-white transition-colors duration-300"   onClick={() => setOpen(false)}>Home</Link>
                            
                            <Link to={"/about"} className="text-gray-300 hover:text-white transition-colors duration-300"   onClick={() => setOpen(false)}>About</Link>
                            <Link to={"/pricing"} className="text-gray-300 hover:text-white transition-colors duration-300"  onClick={() => setOpen(false)}>Pricing</Link>
                            <Link
                             to="/support"
                             className="text-gray-300 hover:text-white transition-colors duration-300"
                             onClick={() => setOpen(false)}>Support
                           </Link>

                           <Link
                        to="/login"
                        onClick={() => setOpen(false)}
                        className="px-4 py-2 rounded-lg border border-white/10 text-center text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                      >
                        Login
                      </Link>

                           <Link
                      to="/signup"
                      onClick={() => setOpen(false)}
                      className="px-6 py-2 rounded-full bg-purple-600 text-center text-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30"
                     >
                   Get Started
                   </Link>

                        </div>

                    </div>

                )
            }

        </nav>
    )

}

export default Navbar;