import { Link } from "react-router-dom";
import { Target, TargetIcon } from "lucide-react";
function AboutHero() {
    return ( 
        <section>
            {/* ye pura ek container hai */}
            <div className="grid  grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto px-6 ">
              {/* left div  */}
             <div className="space-y-10">
                {/* ye badge hai isme */}
               <div className="inline-block rounded-full bg-violet-500/10 text-violet-400 font-bold text-xl px-6 py-4">
                  <h3>🚀 About TradeX</h3>
               </div>
               {/* heading or decscription */}
               <div className="space-y-6">
                   <h2 className="text-2xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight tracking-tight max-w-xl">
                    Trade Smarter with AI,
                    Invest with Confidence.
                   </h2>
                   <p className="text-lg text-slate-400 leading-8 max-w-xl">
                    TradeX is an AI-powered trading platform that helps
                    investors make smarter financial decisions through
                    real-time market data, intelligent analytics,
                    and a modern trading experience.
                   </p>
               </div>
               {/* buttons ke liye  */}
               <div className="flex items-center gap-10 px-6">
                <Link
    to="/signup"
    className=" text-3xl font-xl  inline-block px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30"
>
    Get Started
</Link>
               
               </div>
             </div>
               {/* right div */}
               <div className="rounded-3xl bg-slate-900 p-8 border border-slate-800 mt-24 max-w-xl">
                 
                 <div className="flex items-center gap-5" >
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-2xl">
                    <TargetIcon className="w-6 h-6 text-violet-400"/>
                    </div>
                     <h2  className="text-2xl font-bold text-white">Our Mission </h2>
                 </div>
                    <p className="mt-6 text-slate-400 leading-8">
                    Make investing simple, secure 
                     and accessible for everyone.   
                    </p>
                   <div>
                      <ul  className="mt-8 space-y-4">
                        <li  className="flex items-center gap-3 text-slate-300">✔ Simplicity</li>
                        <li  className="flex items-center gap-3 text-slate-300">✔ Transparency</li>
                        <li  className="flex items-center gap-3 text-slate-300">✔ Security</li>
                        <li  className="flex items-center gap-3 text-slate-300">✔ AI-Powered Insights</li>
                      </ul>
                   </div>
                    
               </div>

            </div>
            {/* your story */}
         <div className="max-w-4xl mx-auto px-6 rounded-3xl bg-slate-900 border border-slate-800 p-10 mt-24">

         <div  className="inline-block bg-violet-500/10 text-violet-400 px-5 py-2 rounded-full">
            <p>📖 Our Story</p>
        </div>

        <h2 className="mt-8 text-4xl font-bold text-white">Why We Built TradeX</h2>

        <p className="mt-6 text-lg text-slate-400 leading-8">
            TradeX was built with a simple vision—to make investing easier for everyone.
            We believe financial tools should be simple, transparent, and accessible,
            empowering both beginners and experienced investors to make smarter
            decisions with confidence.
        </p>

    </div>
        </section>
            
     );
}

export default AboutHero;