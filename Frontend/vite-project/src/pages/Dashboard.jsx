import Dashboardlayout from "../components/layout/Dashboardlayout";
import SummaryCard from "../components/dashboard/SummaryCard";
import RecentOrders from "../components/dashboard/RecentOrders";
import Watchlist from "../components/dashboard/Watchlist";
import PortfolioChart from "../components/dashboard/PortfolioChart";
import AiChat from "../components/AI/AiChat";

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../api/api";

import {
  FaWallet,
  FaChartPie,
  FaArrowTrendUp,
  FaBriefcase,
  FaRegStar,
} from "react-icons/fa6";

function Dashboard() {

  const { user } = useAuth();

  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState("");

  const [orders, setOrders] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);

  async function getDashboard(showLoader = true) {
    try {

      if (showLoader) {
        setLoading(true);
      }

      setServerError("");

      const response = await api.get("/dashboard");

      setDashboard(response.data.data);

    } catch (error) {

      setServerError(
        error.response?.data?.message ||
        "Something went wrong"
      );

    } finally {

      if (showLoader) {
        setLoading(false);
      }

    }
  }

  async function getRecentOrders() {
    try {

      const response = await api.get("/orders/recent");

      setOrders(response.data.orders);

    } catch (error) {
      console.log(error);
    }
  }

  async function getWatchlist() {
    try {

      const response = await api.get("/watchlist");

      setWatchlist(response.data.data);

      setPortfolioData(response.data.data.portfolioData);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    getDashboard(true);

    const interval = setInterval(() => {

      getDashboard(false);

    }, 10000);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {

    getRecentOrders();

    getWatchlist();

  }, []);

  if (loading) {
    return (
      <Dashboardlayout>
        <h1 className="text-white text-xl">
          Loading Dashboard...
        </h1>
      </Dashboardlayout>
    );
  }

  if (serverError) {
    return (
      <Dashboardlayout>
        <h1 className="text-red-500">
          {serverError}
        </h1>
      </Dashboardlayout>
    );
  }

  return (
    <Dashboardlayout>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

        {/* Left Side */}

        <div className="xl:col-span-3">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            <SummaryCard
              title="Total Investment"
              value={`₹${dashboard?.totalInvestment?.toFixed(2) || 0}`}
              icon={<FaWallet className="text-2xl text-blue-400" />}
            />

            <SummaryCard
              title="Total Profit / Loss"
              value={`${dashboard?.totalProfitLoss >= 0 ? "+" : ""}₹${dashboard?.totalProfitLoss?.toFixed(2) || "0.00"}`}
              valueColor={
                dashboard?.totalProfitLoss >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }
              icon={<FaChartPie className="text-2xl text-purple-400" />}
            />

            <SummaryCard
              title="Total Current Value"
              value={`₹${dashboard?.totalCurrentValue?.toFixed(2) || 0}`}
              icon={<FaArrowTrendUp className="text-2xl text-green-400" />}
            />

            <SummaryCard
              title="Total Holding"
              value={dashboard?.totalholdings || 0}
              icon={<FaBriefcase className="text-2xl text-orange-400" />}
            />

            <SummaryCard
              title="Total Watchlist"
              value={dashboard?.watchlistcount || 0}
              icon={<FaRegStar className="text-2xl text-yellow-400" />}
            />

          </div>

          <div className="mt-6">
            <PortfolioChart portfolioData={portfolioData} />
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

            <RecentOrders orders={orders} />

            <Watchlist stocks={watchlist} />

          </div>

        </div>

        {/* Right Side */}

        <div className="xl:col-span-1">

          {user?.plan === "PRO" || user?.plan === "PREMIUM" ? (

            <AiChat />

          ) : (

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <h2 className="text-2xl font-bold text-white">
                🔒 TradeX AI
              </h2>

              <p className="mt-4 text-slate-400">
                Upgrade to PRO or PREMIUM to unlock AI powered stock analysis,
                portfolio insights and investment suggestions.
              </p>

              <button
                onClick={() => {
                  window.location.href = "/pricing";
                }}
                className="mt-6 w-full rounded-xl bg-purple-600 py-3 text-white hover:bg-purple-700"
              >
                Upgrade Now
              </button>

            </div>

          )}

        </div>

      </div>

    </Dashboardlayout>
  );
}

export default Dashboard;