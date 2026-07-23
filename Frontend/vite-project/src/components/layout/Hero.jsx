import { Play,ShieldCheck,Brain,ChartColumnIncreasing } from "lucide-react";
function Hero() {
    return ( 
        
      <section className="bg-slate-900 min-h-screen">
  <div className="max-w-7xl mx-auto flex justify-between items-center min-h-screen px-12">
    <div className="w-1/2">
      <h1 className="text-6xl font-bold text-white">
        Trade Smarter.
        <br />
        Invest Better.
      </h1>
       <p className="mt-6 text-lg text-slate-300 leading-8 px-2">
  Real-time market insights, AI-powered analysis, and a
  seamless trading experience — all in one platform.
</p>  
         <div className="flex gap-4 mt-8">
        <button  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105"> Get Started Free</button>
       <button className="flex items-center gap-2 border border-slate-600 text-white px-6 py-3 rounded-full hover:border-blue-500 hover:text-blue-400 transition-all duration-300">  <Play size={18} /> Watch Demo</button>
        </div>
    </div>
    
      <div className="w-1/2 flex justify-center items-center">
  <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8">
    <h2 className="text-3xl font-bold text-white">
      TradeX AI
      </h2>

      <p className="mt-2 text-lg font-semibold text-blue-400">
     AI Portfolio Analyzer
     </p>

       <p className="mt-4 text-slate-300 leading-7 max-w-sm">
       Analyze your investments with AI-powered insights,
      personalized risk analysis, and smart recommendations
     in seconds.
    </p>
    <hr className="my-6 border-slate-700" />
    <div className="space-y-5">
      <p>✓ Diversification Score</p>
      <p>✓ Risk Analysis</p>
      <p>✓ Smart AI Suggestions</p>
    </div>

    <div>
      <p>🔒 Bank-Level Security</p>
      <p>⚡ Real-Time Market Data</p>
      <p>🧠 AI Powered Insights</p>
    </div>

    <p>Powered by OpenAI • Polygon.io • Razorpay</p>
  </div>
</div>
    
  </div>
</section>
        
     );
}

export default Hero;