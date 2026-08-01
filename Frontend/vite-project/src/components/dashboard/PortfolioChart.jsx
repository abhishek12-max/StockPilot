const PortfolioChart = () => {
  return (
    <div className="flex h-96 flex-col rounded-2xl border border-slate-800 bg-[#0B1023] p-6">

      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-white">
          Portfolio Performance
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Track your portfolio growth over time
        </p>
      </div>

      {/* Stats */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            Current Value
          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">
            $24,580
          </h3>
        </div>

        <div className="rounded-lg bg-green-500/10 px-3 py-1">
          <span className="text-sm font-semibold text-green-400">
            +2.45%
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6 flex flex-1 items-center justify-center rounded-xl border border-dashed border-slate-700">
        <p className="text-slate-500">
          Chart will be added here
        </p>
      </div>

      {/* Footer */}
      <p className="mt-4 text-right text-xs text-slate-500">
        Last Updated : 10:30 AM
      </p>

    </div>
  );
};

export default PortfolioChart;