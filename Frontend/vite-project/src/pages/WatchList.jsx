import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/Dashboardlayout";
import WatchlistList from "../components/watchlist/WatchlistList";
import api from "../api/api";

function Watchlist() {

  const [watchlist, setWatchlist] = useState([]);

  const [loading, setLoading] = useState(true);

  const [serverError, setServerError] = useState("");

  async function getWatchlist() {

    try {

      setLoading(true);

      setServerError("");

      const response = await api.get("/watchlist");

      setWatchlist(response.data.data);

    } catch (error) {

      setServerError(
        error.response?.data?.message ||
        "Something went wrong."
      );

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

  getWatchlist();

  const interval = setInterval(() => {

    getWatchlist();

  }, 10000);

  return () => clearInterval(interval);

}, []);

  return (

    <DashboardLayout>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Watchlist
          </h1>

          <p className="mt-1 text-slate-400">
            Track your favourite stocks.
          </p>

        </div>

        {loading && (
          <p className="text-slate-400">
            Loading...
          </p>
        )}

        {serverError && (
          <p className="text-red-500">
            {serverError}
          </p>
        )}

        {!loading && !serverError && (

          <WatchlistList
            watchlist={watchlist}
            refreshWatchlist={getWatchlist}
          />

        )}

      </div>

    </DashboardLayout>

  );

}

export default Watchlist;