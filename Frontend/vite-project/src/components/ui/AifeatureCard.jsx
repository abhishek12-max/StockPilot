function AifeatureCard({title,description}) {
    return ( 
         <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40">

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-slate-400 leading-relaxed">
        {description}
      </p>

    </div>
     );
}

export default AifeatureCard;