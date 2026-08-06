import { FiShoppingCart, FiStar } from "react-icons/fi";

function MarketCard({
  stock,
  onBuy,
  onWatchlist,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-xl font-bold text-white">
            {stock.companyName}
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            {stock.symbol}
          </p>

        </div>

        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
          {stock.exchange}
        </span>

      </div>

      {/* Price */}

      <div className="mt-8">

        <p className="text-sm text-slate-400">
          Current Price
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          ₹{stock.currentPrice}
        </h2>

      </div>

      {/* Industry */}

      <div className="mt-6">

        <p className="text-sm text-slate-400">
          {stock.industry}
        </p>

      </div>

      {/* Buttons */}

      <div className="mt-8 grid grid-cols-2 gap-3">

        <button
          onClick={() => onBuy(stock)}
          className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 font-medium text-white transition hover:bg-purple-700"
        >
          <FiShoppingCart />

          Buy
        </button>

        <button
          onClick={() => onWatchlist(stock)}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 py-3 font-medium text-white transition hover:bg-slate-800"
        >
          <FiStar />

          Watchlist
        </button>

      </div>

    </div>
  );
}

export default MarketCard;