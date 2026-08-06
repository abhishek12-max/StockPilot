import {
  FiBell,
  FiSearch,
  FiMenu,
  FiTrendingUp,
  FiDollarSign,
} from "react-icons/fi";

import { FaRobot } from "react-icons/fa";
import { useState } from "react";
import { useSearch } from "../../context/SearchContext";
import { useAuth } from "../../context/AuthContext";

const TopNavbar = ({ setIsSidebarOpen }) => {

  const { user } = useAuth();

  const firstName =
    user?.fullname?.split(" ")[0] || "User";

  const { search, setSearch } = useSearch();

  const [showNotifications, setShowNotifications] =
    useState(false);

  return (
    <header className="border-b border-slate-800 bg-[#0B1023] px-4 py-4 md:px-6">

      {/* Top Row */}

      <div className="flex items-start justify-between">

        {/* Left */}

        <div className="flex items-start gap-3">

          <button
            onClick={() => setIsSidebarOpen(true)}
            className="mt-1 rounded-xl bg-slate-900 p-3 text-white transition hover:bg-slate-800 lg:hidden"
          >
            <FiMenu size={20} />
          </button>

          <div>

            <h1 className="text-2xl font-bold leading-tight text-white md:text-4xl">
              Welcome back,
            </h1>

            <div className="mt-1 flex items-center gap-2">

              <h2 className="text-2xl font-bold text-white md:text-4xl">
                {firstName}
              </h2>

              <span className="text-2xl">
                👋
              </span>

            </div>

            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400 md:text-base">
              Manage your investments and track your portfolio in one place.
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="ml-4 flex items-center gap-3">

          {/* Notification */}

          <div className="relative">

            <button
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
              className="rounded-xl bg-slate-900 p-3 transition hover:bg-slate-800"
            >

              <FiBell
                size={20}
                className="text-white"
              />

            </button>

            {showNotifications && (

              <div className="absolute right-0 z-50 mt-3 w-80 overflow-hidden rounded-2xl border border-slate-700 bg-[#111827] shadow-2xl">

                <div className="border-b border-slate-700 p-4">

                  <h3 className="text-lg font-semibold text-white">
                    Notifications
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Upcoming features
                  </p>

                </div>

                <div className="space-y-4 p-4">

                  <div className="flex items-start gap-3">

                    <div className="rounded-full bg-green-500/10 p-2">

                      <FiTrendingUp className="text-green-400" />

                    </div>

                    <div>

                      <h4 className="font-medium text-white">
                        Market Alerts
                      </h4>

                      <p className="text-sm text-slate-400">
                        Coming Soon
                      </p>

                    </div>

                  </div>

                  <div className="flex items-start gap-3">

                    <div className="rounded-full bg-yellow-500/10 p-2">

                      <FiDollarSign className="text-yellow-400" />

                    </div>

                    <div>

                      <h4 className="font-medium text-white">
                        Price Alerts
                      </h4>

                      <p className="text-sm text-slate-400">
                        Coming Soon
                      </p>

                    </div>

                  </div>

                  <div className="flex items-start gap-3">

                    <div className="rounded-full bg-purple-500/10 p-2">

                      <FaRobot className="text-purple-400" />

                    </div>

                    <div>

                      <h4 className="font-medium text-white">
                        AI Insights
                      </h4>

                      <p className="text-sm text-slate-400">
                        Coming Soon
                      </p>

                    </div>

                  </div>

                </div>

                <div className="border-t border-slate-700 p-4">

                  <p className="text-center text-xs text-slate-500">
                    More notification features will be available in future updates.
                  </p>

                </div>

              </div>

            )}

          </div>

          {/* Profile */}

          <button className="flex items-center gap-3 rounded-xl bg-slate-900 p-2 pr-4 transition hover:bg-slate-800">

            {user?.profileImage ? (

              <img
                src={user.profileImage}
                alt="Profile"
                className="h-11 w-11 rounded-full object-cover"
              />

            ) : (

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 font-semibold text-white">

                {firstName.charAt(0).toUpperCase()}

              </div>

            )}

            <div className="hidden text-left lg:block">

              <h3 className="font-semibold text-white">
                {firstName}
              </h3>

              <p className="text-sm text-slate-400">
                Investor
              </p>

            </div>

          </button>

        </div>

      </div>

      {/* Search */}

      <div className="relative mt-6">

        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search stocks by symbol or company..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none transition focus:border-purple-500"
        />

      </div>

    </header>
  );
};

export default TopNavbar;