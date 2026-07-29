import { FiBell, FiSearch, FiMenu } from "react-icons/fi";

const TopNavbar = ({ setIsSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-[#0B1023] px-6 py-4">

      {/* Left Section */}

      <div className="flex items-center gap-4">

        {/* Mobile Menu */}

        <button
          onClick={() => setIsSidebarOpen(true)}
          className="rounded-xl bg-slate-900 p-3 text-white transition hover:bg-slate-800 lg:hidden"
        >
          <FiMenu size={20} />
        </button>

        {/* Search */}

        <div className="relative hidden w-96 lg:block">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
          />

          <input
            type="text"
            placeholder="Search Stocks..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-white outline-none focus:border-purple-500"
          />
        </div>

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-4">

        <button
          className="rounded-xl bg-slate-900 p-3 transition hover:bg-slate-800"
        >
          <FiBell size={20} className="text-white" />
        </button>

        <button
          className="flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-2 transition hover:bg-slate-800"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 font-semibold text-white">
            A
          </div>

          {/* Hide Name on Mobile */}

          <div className="hidden lg:block">
            <h3 className="font-medium text-white">
              Abhishek
            </h3>

            <p className="text-sm text-slate-400">
              Investor
            </p>
          </div>

        </button>

      </div>

    </header>
  );
};

export default TopNavbar;