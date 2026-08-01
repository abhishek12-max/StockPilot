import DashboardLayout from "../components/layout/Dashboardlayout";
import WatchlistList from "../components/watchlist/WatchlistList";

const Watchlist = () => {

  const watchlist = [
    {
      id: 1,
      symbol: "AAPL",
      company: "Apple Inc.",
      currentPrice: "$210.45",
      change: "+2.35%"
    },
    {
      id: 2,
      symbol: "TSLA",
      company: "Tesla",
      currentPrice: "$315.20",
      change: "-1.12%"
    },
    {
      id: 3,
      symbol: "MSFT",
      company: "Microsoft",
      currentPrice: "$445.80",
      change: "+0.82%"
    },
    {
      id: 4,
      symbol: "GOOGL",
      company: "Alphabet",
      currentPrice: "$180.60",
      change: "-0.65%"
    },
    {
      id: 5,
      symbol: "NVDA",
      company: "NVIDIA",
      currentPrice: "$128.50",
      change: "+4.25%"
    }
  ];

  return (
    <DashboardLayout>
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Watchlist
        </h1>

        <p className="text-gray-400 mt-1">
          Track your favorite stocks.
        </p>
      </div>

      <WatchlistList watchlist={watchlist} />

    </div>
    </DashboardLayout>
  );
};

export default Watchlist;