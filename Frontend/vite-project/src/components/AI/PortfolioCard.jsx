const PortfolioCard = ({ data }) => {
  const isProfit = String(data.profitLoss).includes("+");

  return (
    <div className="space-y-5">

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold text-white">
          💼 Portfolio Analysis
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          AI Generated Portfolio Report
        </p>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-3">

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
          <p className="text-xs text-slate-400">
            Investment
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            {data.investment}
          </h3>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
          <p className="text-xs text-slate-400">
            Current Value
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            {data.currentValue}
          </h3>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
          <p className="text-xs text-slate-400">
            Profit / Loss
          </p>

          <h3
            className={`mt-2 text-xl font-bold ${
              isProfit
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {data.profitLoss}
          </h3>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
          <p className="text-xs text-slate-400">
            Risk
          </p>

          <h3 className="mt-2 text-xl font-bold text-yellow-400">
            {data.risk}
          </h3>
        </div>

      </div>

      {/* Diversification */}

      <div className="rounded-xl border border-blue-700 bg-blue-950/20 p-4">

        <h3 className="font-semibold text-blue-400">
          🌍 Diversification
        </h3>

        <p className="mt-3 text-slate-200">
          {data.diversification}
        </p>

      </div>

      {/* Best Performer */}

      <div className="rounded-xl border border-green-700 bg-green-950/20 p-4">

        <h3 className="font-semibold text-green-400">
          🏆 Best Performer
        </h3>

        <p className="mt-3 text-slate-200">
          {data.bestPerformer}
        </p>

      </div>

      {/* Worst Performer */}

      <div className="rounded-xl border border-red-700 bg-red-950/20 p-4">

        <h3 className="font-semibold text-red-400">
          📉 Worst Performer
        </h3>

        <p className="mt-3 text-slate-200">
          {data.worstPerformer}
        </p>

      </div>

      {/* Summary */}

      <div className="rounded-xl border border-purple-700 bg-purple-950/20 p-4">

        <h3 className="font-semibold text-purple-400">
          🤖 TradeX AI Summary
        </h3>

        <p className="mt-3 leading-7 text-slate-200">
          {data.summary}
        </p>

      </div>

    </div>
  );
};

export default PortfolioCard;