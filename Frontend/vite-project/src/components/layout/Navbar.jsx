import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10bg-slate-950/80 backdrop-blur-xl">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex justify-between items-center">

                {/* Logo */}

                <h1 className="text-2xl font-extrabold tracking-tight text-white cursor-pointer">
                    Trade
                    <span className="text-purple-500">X</span>
                </h1>

                {/* Desktop Menu */}

                <div className="hidden md:flex items-center gap-8">

                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>

                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Markets</a>

                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Features</a>

                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Pricing</a>

                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Support</a>

                </div>

                {/* Desktop Buttons */}

                <div className="hidden md:flex items-center gap-4">

                    <button className="px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300">
                        Login
                    </button>

                    <button className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30">
                        Get Started
                    </button>

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

                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"   onClick={() => setOpen(false)}>About</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"  onClick={() => setOpen(false)}>Markets</a>
                            <a href="#"className="text-gray-300 hover:text-white transition-colors duration-300"  onClick={() => setOpen(false)}>Features</a>
                            <a href="#"className="text-gray-300 hover:text-white transition-colors duration-300"  onClick={() => setOpen(false)}>Pricing</a>
                            <a href="#"className="text-gray-300 hover:text-white transition-colors duration-300"  onClick={() => setOpen(false)}>Support</a>

                            <button className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300">
                                Login
                            </button>

                            <button className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300 shadow-lg shadow-purple-500/30">
                                Get Started
                            </button>

                        </div>

                    </div>

                )
            }

        </nav>
    )

}

export default Navbar;