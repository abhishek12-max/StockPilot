import {
  FiGrid,
  FiPieChart,
  FiBriefcase,
  FiClipboard,
  FiStar,
  FiSettings,
  FiLogOut,
  FiX,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: FiGrid,
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: FiPieChart,
  },
 
  {
    name: "Orders",
    path: "/orders",
    icon: FiClipboard,
  },
  {
    name: "Watchlist",
    path: "/watchlist",
    icon: FiStar,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: FiSettings,
  },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          w-64
          bg-[#0B1023]
          border-r border-slate-800
          flex flex-col
          transform transition-transform duration-300
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
          lg:static
          lg:translate-x-0
          lg:h-screen
        `}
      >
        {/* Logo */}

        <div className="flex items-center justify-between border-b border-slate-800 p-6">
          <h1 className="text-3xl font-bold text-white">
            Trade<span className="text-purple-600">X</span>
          </h1>

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-white lg:hidden"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex-1 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all duration-200 ${
                    isActive
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:bg-slate-700"
                  }`
                }
              >
                <Icon size={20} />

                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Logout */}

        <div className="border-t border-slate-800 p-4">
          <button className="flex w-full items-center gap-3 rounded-lg bg-blue-600 px-4 py-3 text-white transition hover:bg-blue-500">
            <FiLogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay */}

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;