const SummaryCard = ({
  icon,
  title,
  value,
  valueColor = "text-white",
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="mb-4 inline-flex rounded-xl bg-purple-600/20 p-3">
        {icon}
      </div>

      <h3 className="text-md font-medium text-slate-400">
        {title}
      </h3>

      <p className={`mt-2 text-3xl font-bold ${valueColor}`}>
        {value}
      </p>

    </div>
  );
};

export default SummaryCard;