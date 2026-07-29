const HoldingsTable = ({ holdings }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6">
      <h2 className="text-xl font-semibold text-white">
        Holdings
      </h2>

      <p className="mt-1 text-sm text-slate-400">
        Your current stock investments
      </p>

      {/* ---------------- Desktop Table ---------------- */}

      <div className="mt-6 hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700 text-left text-xs uppercase tracking-wide text-slate-400">
              <th className="pb-3">Symbol</th>
              <th className="pb-3">Company</th>
              <th className="pb-3">Qty</th>
              <th className="pb-3">Avg Price</th>
              <th className="pb-3">Current Price</th>
              <th className="pb-3">P/L</th>
              <th className="pb-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((stock) => (
              <tr
                key={stock.id}
                className="border-b border-slate-800 text-white"
              >
                <td className="py-4 font-semibold">
                  {stock.symbol}
                </td>

                <td>{stock.company}</td>

                <td>{stock.quantity}</td>

                <td>${stock.avgPrice}</td>

                <td>${stock.currentPrice}</td>

                <td
                  className={`font-semibold ${
                    stock.profitLoss >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  ${stock.profitLoss}
                </td>

                <td>
                  <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm text-white hover:bg-purple-700">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------- Mobile Cards ---------------- */}

      <div className="mt-6 space-y-4 lg:hidden">
        {holdings.map((stock) => (
          <div
            key={stock.id}
            className="rounded-xl border border-slate-700 bg-slate-900 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {stock.symbol}
                </h3>

                <p className="text-sm text-slate-400">
                  {stock.company}
                </p>
              </div>

              <button className="rounded-lg bg-purple-600 px-3 py-2 text-sm text-white hover:bg-purple-700">
                View
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-400">Quantity</p>
                <p className="font-semibold text-white">
                  {stock.quantity}
                </p>
              </div>

              <div>
                <p className="text-slate-400">Avg Price</p>
                <p className="font-semibold text-white">
                  ${stock.avgPrice}
                </p>
              </div>

              <div>
                <p className="text-slate-400">Current Price</p>
                <p className="font-semibold text-white">
                  ${stock.currentPrice}
                </p>
              </div>

              <div>
                <p className="text-slate-400">Profit / Loss</p>

                <p
                  className={`font-semibold ${
                    stock.profitLoss >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  ${stock.profitLoss}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoldingsTable;