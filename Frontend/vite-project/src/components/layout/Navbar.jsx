import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
   const[ismenuopen,setIsmenuOpen]= useState(false);
  
   const navLinks = [
  "Market",
  "Portfolio",
  "Pricing",
  "Support",
  "About",
  
];
  return (
    <>
       <nav className="relative flex justify-between items-center h-20 px-10 bg-slate-900">
      <div className=" px-6 text-white">
        <h1>TradeX</h1>
      </div>

      <div className=" hidden lg:flex gap-10 text-white px-7">
         {navLinks.map((link)=>(
            <a key={link} href="#" className="hover:text-blue-400 transition-all duration-300 hover:-translate-y-1">{link}</a>
         ))}
      </div>

      <div className="hidden lg:flex gap-4 ">
        <button className="border border-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition-all duration-300">Login</button>
        <button  className="bg-blue-600 text-white px-5 py-2 rounded-full  hover:bg-blue-700 transition-all duration-300 hover:scale-105">Get Started</button>
      </div>
            <button onClick={() => setIsmenuOpen((prev) => !prev)}className="text-white lg:hidden">
                 {ismenuopen ? <X size={30} /> : <Menu size={30} />}
                 </button>
    </nav>
        {ismenuopen && (
  <div className="absolute top-20 left-0 w-full bg-slate-900 lg:hidden flex flex-col gap-4 p-6 text-white">
    {navLinks.map((link) => (
      <a
        key={link}
        href="#"
        className="hover:text-blue-400 transition-all duration-300"
      >
        {link}
      </a>
    ))}

    <button className="border border-blue-600 rounded-full py-2">
      Login
    </button>

    <button className="bg-blue-600 rounded-full py-2">
      Get Started
    </button>
  </div>
)}

    </>
  
  );
};

export default Navbar;