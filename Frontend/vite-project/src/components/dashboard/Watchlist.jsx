const Watchlist = ({ stocks }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6">
      <h2 className="mb-6 text-lg font-semibold text-white">
        Watchlist
      </h2>

      {stocks.map((stock) => (
        <div
          key={stock.id}
          className="flex items-center justify-between border-b border-slate-800 py-4"
        >
          {/* Left */}

          <div>
            <h3 className="font-semibold text-white">
              {stock.company}
            </h3>

            <p className="text-sm text-slate-400">
              {stock.symbol}
            </p>
          </div>

          {/* Right */}

          <div className="text-right">
            <p className="font-semibold text-white">
              {stock.price}
            </p>

            <p
  className={
    stock.change >= 0
      ? "text-green-400"
      : "text-red-400"
  }
>
  {stock.change > 0 ? "+" : ""}
  {stock.change}%
</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;