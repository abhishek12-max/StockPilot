import { useState } from "react";

import Sidebar from "../dashboard/Sidebar";
import TopNavbar from "../dashboard/TopNavbar";

import { useAuth } from "../../context/AuthContext";

function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { loading, user } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <p className="text-xl text-white">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-slate-950">
      {/* Sidebar */}

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main Content */}

      <main className="min-w-0 flex-1 flex flex-col">
        <TopNavbar
          setIsSidebarOpen={setIsSidebarOpen}
          user={user}
        />

        <div className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;