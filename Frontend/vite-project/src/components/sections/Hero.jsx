import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Brain,
  Zap,
} from "lucide-react";
import Hero3D from "../hero/Hero3D";

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-2 pb-10 lg:px-8 lg:pt-4 lg:pb-12">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute right-[10%] top-[20%] h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start lg:grid-cols-2 lg:gap-4">

        {/* ================= 3D IMAGE ================= */}
        <div className="order-1 flex h-[210px] w-full items-start justify-center lg:order-2 lg:h-[500px] lg:justify-end mt-10">
          <div className="h-full w-full max-w-[650px]">
            <Hero3D />
          </div>
        </div>

        {/* ================= HERO CONTENT ================= */}
        <div className="order-2 relative z-10 -mt-1 max-w-2xl lg:order-1 lg:mt-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 mt-14">
            <span>✦</span>

            <span className="text-sm font-medium text-purple-300 sm:text-base">
              AI-Powered Stock Trading
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Invest Smarter
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              with AI
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            Build your portfolio with real-time market insights,
            powerful analytics, and an intuitive AI-powered trading
            experience.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-4">

            <Link
              to="/signup"
              className="group inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:scale-105 hover:bg-purple-700"
            >
              Get Started Free

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <button
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-slate-800"
            >
              Watch Demo
              <Play size={16} />
            </button>

          </div>

          {/* Trust Features */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <ShieldCheck size={17} className="text-green-400" />
              <span>Secure Platform</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Brain size={17} className="text-purple-400" />
              <span>AI Insights</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Zap size={17} className="text-yellow-400" />
              <span>Real-time Data</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;