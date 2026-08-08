function AifeatureCard({ title, description }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05]">
      {/* Icon */}

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
        ✦
      </div>

      {/* Content */}

      <h3 className="mt-6 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>

      {/* Bottom Accent */}

      <div className="mt-6 h-px w-0 bg-violet-500 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default AifeatureCard;