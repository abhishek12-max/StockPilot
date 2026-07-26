function Pricingsection() {
    return ( 
       <section>
        <div className="text-center space-y-5">
            <h1 className="text-3xl  text-white font-bold">
                💳 Pricing
            </h1>
            <p className="text-slate-400 leading-tight  tracking-tight text-lg">
                Choose the perfect plan for your trading journey.
               Simple pricing with no hidden charges.
            </p>
        </div>
       {/* card */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  max-w-7xl mx-auto mt-10 gap-8">
           {/* first card */}
         <div className="bg-slate-900 border border-slate-600/10 w-full p-4 rounded-3xl">
            <div className="text-center space-y-8">
                <h3 className="text-3xl font-bold text-white ">BASIC FREE</h3>
                <div>
                    <ul className="space-y-4">
                        <li className="text-slate-300 ">✔ Watchlist</li>
                        <li className="text-slate-300 "> ✔ Market</li>
                        <li className="text-slate-300 ">✔ Portfolio</li>
                        <li className="text-slate-300 "> ✖ AI </li>
                    </ul>
                </div>
                <div>
                    <button className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30">
                        Get Started
                    </button>
                </div>
            </div>
         </div>
           {/* second card */}
         <div className="bg-slate-900 border border-slate-600/10 w-full p-4 rounded-2xl mt-10 lg:mt-0">
            <div className="text-center space-y-8">
                <h3 className="text-3xl font-bold text-white ">PRO ⭐ ₹299/mo</h3>
    
                <div>
                    <ul className="space-y-4">
                        <li className="text-slate-300 "> ✔ Everything</li>
                        <li className="text-slate-300 "> ✔ AI</li>
                        <li className="text-slate-300 ">✔ Alerts</li>
                        <li className="text-slate-300 "> ✔ Analytics </li>
                    </ul>
                </div>
                <div>
                    <button className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30">
                        Upgrade
                    </button>
                </div>
            </div>
         </div>
          {/* third card */}

         <div  className="bg-slate-900 border border-slate-600/10 w-full p-4 rounded-2xl mt-10 lg:mt-0">
             <div className="text-center space-y-8">
                <h3 className="text-3xl font-bold text-white ">PREMIUM  ₹699/mo</h3>
    
                <div>
                    <ul className="space-y-4">
                        <li className="text-slate-300 ">  ✔ Everything</li>
                        <li className="text-slate-300 "> ✔ AI Chat</li>
                        <li className="text-slate-300 ">✔ ✔ Priority</li>
                        <li className="text-slate-300 "> ✔ API</li>
                    </ul>
                </div>
                <div>
                    <button className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30">
                       Go Premium 
                    </button>
                </div>
            </div>
         </div>
       </div>

       </section>
     );
}

export default Pricingsection;