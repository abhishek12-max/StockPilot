function Marketcard({symbol,name,isPositive,change,price}) {
    return ( 
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h3 className="text-xl font-semibold text-white">
          {symbol}
        </h3>

        <span className={`rounded-full px-3 py-1 text-sm font-medium ${isPositive? "bg-green-500/10 text-green-400":"bg-red-500/10 text-red-400"}`} >
          {change}
        </span>

      </div>

      {/* Body */}

      <div className="mt-4">

        <p className="text-slate-400">
         {name}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">
         {price}
        </h3>

      </div>

      {/* Footer */}

      <div className="mt-6">

        <button className="text-indigo-400 font-medium hover:text-indigo-300 transition">
          View Details →
        </button>

      </div>

    </div>
     );
}

export default Marketcard;