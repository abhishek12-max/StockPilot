const StockCard = ({ data }) => {
  const recommendationColor = {
    BUY: "bg-green-500",
    HOLD: "bg-yellow-500",
    SELL: "bg-red-500",
  };

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            📈 {data.stock}
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Stock Analysis
          </p>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold text-white ${
            recommendationColor[data.recommendation]
          }`}
        >
          {data.recommendation}
        </span>

      </div>

      {/* Confidence */}

      <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">

        <p className="text-sm text-slate-400">
          Confidence Score
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">
          {data.confidence}/10
        </h3>

      </div>

      {/* Pros */}

      <div className="rounded-xl border border-green-700 bg-green-950/20 p-4">

        <h3 className="mb-3 font-semibold text-green-400">
          ✅ Strengths
        </h3>

        <ul className="space-y-2">

          {data.pros?.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-slate-200"
            >
              <span>✔</span>

              <span>{item}</span>
            </li>
          ))}

        </ul>

      </div>

      {/* Risks */}

      <div className="rounded-xl border border-red-700 bg-red-950/20 p-4">

        <h3 className="mb-3 font-semibold text-red-400">
          ⚠ Risks
        </h3>

        <ul className="space-y-2">

          {data.risks?.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-slate-200"
            >
              <span>⚠</span>

              <span>{item}</span>
            </li>
          ))}

        </ul>

      </div>

      {/* Verdict */}

      <div className="rounded-xl border border-blue-700 bg-blue-950/20 p-4">

        <h3 className="font-semibold text-blue-400">
          🤖 TradeX AI Verdict
        </h3>

        <p className="mt-3 leading-7 text-slate-200">
          {data.verdict}
        </p>

      </div>

    </div>
  );
};

export default StockCard;