import {
  FiActivity,
  FiTrendingUp,
  FiRefreshCw,
  FiClock,
  FiDatabase,
} from "react-icons/fi";

const PortfolioChart = () => {

  const lastUpdated = new Date().toLocaleTimeString();

  return (

    <div className="mt-6 rounded-2xl border border-slate-800 bg-[#0B1023] p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-xl bg-green-500/10 p-3">

            <FiActivity className="text-2xl text-green-400" />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              Market Status
            </h2>

            <p className="text-slate-400">
              Live market simulation overview
            </p>

          </div>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">

          <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

          <span className="font-semibold text-green-400">
            LIVE
          </span>

        </div>

      </div>

      {/* Cards */}

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">

          <div className="flex items-center gap-3">

            <FiTrendingUp className="text-2xl text-green-400" />

            <h3 className="text-lg font-semibold text-white">
              Live Price Updates
            </h3>

          </div>

          <p className="mt-4 text-sm leading-7 text-slate-400">

            Stock prices automatically update every

            <span className="font-semibold text-white">
              {" "}10 seconds
            </span>

            {" "}to simulate a real-time trading market.

          </p>

        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">

          <div className="flex items-center gap-3">

            <FiRefreshCw className="text-2xl text-blue-400" />

            <h3 className="text-lg font-semibold text-white">
              Auto Portfolio Sync
            </h3>

          </div>

          <p className="mt-4 text-sm leading-7 text-slate-400">

            Dashboard, Portfolio and Watchlist refresh
            automatically with the latest stock prices.

          </p>

        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">

          <div className="flex items-center gap-3">

            <FiDatabase className="text-2xl text-purple-400" />

            <h3 className="text-lg font-semibold text-white">
              Market Engine
            </h3>

          </div>

          <p className="mt-4 text-sm leading-7 text-slate-400">

            Prices are generated using a simulated market engine
            for demonstration purposes without relying on
            third-party APIs.

          </p>

        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">

          <div className="flex items-center gap-3">

            <FiClock className="text-2xl text-yellow-400" />

            <h3 className="text-lg font-semibold text-white">
              Last Updated
            </h3>

          </div>

          <p className="mt-4 text-lg font-bold text-white">

            {lastUpdated}

          </p>

          <p className="mt-2 text-sm text-slate-400">

            Updated automatically every 10 seconds.

          </p>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-xl border border-green-500/20 bg-green-500/5 p-5">

        <p className="text-center text-sm leading-7 text-green-300">

          🚀 TradeX is currently running in
          <span className="font-semibold"> Simulation Mode</span>.
          All market prices are dynamically generated to provide a
          realistic trading experience without using live market APIs.

        </p>

      </div>

    </div>

  );

};

export default PortfolioChart;