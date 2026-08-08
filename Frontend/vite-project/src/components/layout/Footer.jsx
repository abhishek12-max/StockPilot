import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <Link
            to="/"
            className="text-3xl font-bold text-white"
          >
            Stock
            <span className="text-violet-500">Pilot</span>
          </Link>

          <p className="mt-4 max-w-sm leading-relaxed text-slate-400">
            AI-powered trading platform helping investors
            make smarter financial decisions with real-time
            market insights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3">
            <li>
              <Link
                to="/how-it-works"
                className="text-slate-400 transition-colors hover:text-violet-500"
              >
                How It Works
              </Link>
            </li>

            <li>
              <Link
                to="/pricing"
                className="text-slate-400 transition-colors hover:text-violet-500"
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                to="/support"
                className="text-slate-400 transition-colors hover:text-violet-500"
              >
                Support
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
                to="/privacy"
                className="text-slate-400 transition-colors hover:text-violet-500"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                to="/terms"
                className="text-slate-400 transition-colors hover:text-violet-500"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            StockPilot
          </h3>

          <p className="mt-4 leading-relaxed text-slate-400">
            Smarter investing powered by real-time market
            data and AI-powered insights.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-6 text-center">
        <p className="text-sm text-slate-500">
          © 2026 StockPilot. All rights reserved.
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Built with React, Node.js, Express & MongoDB
        </p>
      </div>
    </footer>
  );
}

export default Footer;