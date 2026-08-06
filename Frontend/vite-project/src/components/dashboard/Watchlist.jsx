import { FiStar } from "react-icons/fi";

const Watchlist = ({ stocks }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6">

      {/* Heading */}

      <div className="mb-6">

        <h2 className="text-xl font-semibold text-white">
          Watchlist
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Keep an eye on your favourite stocks.
        </p>

      </div>

      {/* Empty State */}

      {stocks.length === 0 ? (

        <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-slate-700">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10">

            <FiStar className="text-3xl text-purple-400" />

          </div>

          <h3 className="mt-5 text-lg font-semibold text-white">
            Watchlist is Empty
          </h3>

          <p className="mt-2 max-w-sm text-center text-sm leading-6 text-slate-400">
            Add stocks to your watchlist and monitor
            market movements in one place.
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {stocks.map((item) => (

            <div
              key={item._id}
              className="rounded-xl border border-slate-800 bg-slate-900 p-4 transition hover:border-purple-500/40"
            >

              <div className="flex items-center justify-between">

                {/* Left */}

                <div>

                  <h3 className="font-semibold text-white">
                    {item.stock.companyName}
                  </h3>

                  <span className="mt-2 inline-block rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">

                    {item.stock.symbol}

                  </span>

                </div>

                {/* Right */}

                <div className="text-right">

                  <p className="text-sm text-slate-400">
                    Current Price
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    ₹{item.stock.currentPrice}
                  </h3>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Watchlist;