const SummaryCard = ({ icon, title, value }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

      <div className="mb-4 inline-flex rounded-xl bg-purple-600/20 p-3 text-purple-400">
        {icon}
      </div>

      <h3 className="text-sm font-medium text-slate-400">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold text-white">
        {value}
      </p>

    </div>
  );
};

export default SummaryCard;