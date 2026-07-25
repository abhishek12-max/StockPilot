import { ArrowRight, Play ,ShieldCheck,Brain,Zap,LayoutDashboard} from "lucide-react";
const Hero = () => {
   const features = [
  {
    icon: Brain,
    title: "AI Portfolio Analysis",
    description: "Get personalized investment insights",
    color: "text-purple-400",
    bg: "bg-purple-600/10",
  },
  {
    icon: Zap,
    title: "Live Market Data",
    description: "Real-time prices & updates",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description: "Safe and reliable account protection",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: LayoutDashboard,
    title: "Interactive Dashboard",
    description: "Track your investments easily",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
];
  return (
      <section className="min-h-screen bg-slate-950 text-white pt-32">
   
   <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16">

    {/* Left */}
    <div className="flex-1">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
        <span>✨</span>
        <span className="text-sm font-medium text-purple-300">
          AI-Powered Stock Trading
        </span>
      </div>

      {/* Heading */}
      <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight">
        Invest Smarter <br />
        with AI
      </h1>
       
       <p className="mt-6 max-w-xl text-lg text-slate-400 leading-8">
          Build your portfolio with real-time market insights,
           powerful analytics, and an intuitive trading experience.
       </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">

              <button className=" group inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-purple-700 hover:scale-105">
                  Get Started Free
                  <ArrowRight size={18}  className="transition-transform duration-300 group-hover:translate-x-1"/>
              </button>

             <button className=" inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-slate-800">
                Live Demo
                <Play size={16}/>
              </button>

         </div>
         <div className="mt-8 flex flex-wrap items-center gap-6">

           <div className="flex items-center gap-2 text-slate-400">
             <ShieldCheck size={18} className="text-green-400" />
             <span className="text-sm">Secure Authentication</span>
           </div>
         
           <div className="flex items-center gap-2 text-slate-400">
             <Brain size={18} className="text-purple-400" />
             <span className="text-sm">AI-Powered Insights</span>
           </div>
         
           <div className="flex items-center gap-2 text-slate-400">
             <Zap size={18} className="text-yellow-400" />
             <span className="text-sm">Lightning Fast Experience</span>
           </div>
         
         </div>
  </div>

    {/* Right */}
    <div className="flex-1"> 


      {/* card */}
       <div  className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8">
        {/* header */}
        <div className="border-b border-slate-800 pb-5">
          <h2  className="text-2xl font-bold text-white">Why TradeX?</h2>
          <p className="mt-2 text-slate-400">Built for modern investors</p>
        </div>
    
        {/* feature */}
        <div>
          {features.map((feature, index) => {
            const Icon = feature.icon;
                  return (
                      <div key={index}  className=" group mt-6 flex items-start gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-white/5">
                        {/* Icon Box */}
                    <div className={`rounded-lg p-2 ${feature.bg}`}>
                           <Icon
                             size={20}
                              className={`${feature.color} transition-transform duration-300 group-hover:scale-110`}
                           />
                         </div>
                        <div> 
                      <h3 className="font-medium text-white">{feature.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{feature.description}</p>
                      </div>
                      </div>

              );

               })}
        </div>
        
       </div>  

      
    </div>

  </div>
</section>
  )
}

export default Hero;