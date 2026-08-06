import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-12">

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 px-10">

        {/* Brand */}
           <div>

            <h2 className="text-3xl font-bold text-white">
                  Trade<span className="text-violet-500">X</span>
             </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              AI-powered trading platform helping investors make smarter financial
              decisions with real-time market insights.
            </p>

            </div>
        {/* Quick Links */}
              <div>

      <h3 className="text-lg font-semibold text-white">
        Quick Links
      </h3>

      <ul className="mt-4 space-y-3">

        <li>
          <Link to="/" className="text-slate-400 hover:text-violet-500 transition-colors duration-300">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className="text-slate-400 hover:text-violet-500 transition-colors     duration-300">
               About
          </Link>
        </li>

        <li>
          <Link to="/pricing" className="text-slate-400 hover:text-violet-500 transition-colors     duration-300">
            Pricing
          </Link>
        </li>

         <li>
          <Link to="/support" className="text-slate-400 hover:text-violet-500 transition-colors     duration-300">
            support
          </Link>
        </li>


      </ul>

    </div>
        {/* Resources */}
        <div>

  <h3 className="text-lg font-semibold text-white">
    Resources
  </h3>

  <ul className="mt-4 space-y-3">
    <li>
      <Link
  to="/contact"
  className="hover:text-purple-400 transition text-slate-500">
  Contact
</Link>
    </li>
   
      <li>
      <Link to="/privacy" className="text-slate-400 hover:text-violet-500 transition-colors     duration-300">Privacy Policy</Link>
    </li>
     <li>
      <Link to="/terms" className="text-slate-400 hover:text-violet-500 transition-colors     duration-300">Terms & Conditions</Link>
    </li>
    
  </ul>

</div>
        {/* Social */}
        <div>
            <h3 className="text-lg font-semibold text-white">
                Social
            </h3>
            <ul className="mt-4 space-y-3">
               <li>
  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-slate-400 hover:text-violet-500 transition"
  >
    <FaGithub />
    GitHub
  </a>
</li>

<li>
  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-slate-400 hover:text-violet-500 transition"
  >
    <FaLinkedin />
    LinkedIn
  </a>
</li>
             
            
            </ul>
        </div>

      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">

        © 2026 TradeX. All rights reserved.
       
      </div>

      <div className="mt-4 text-center text-sm text-slate-500">
        Built with ❤️ using React, Node.js, Express & MongoDB
      </div>

    </footer>
  );
}

export default Footer;