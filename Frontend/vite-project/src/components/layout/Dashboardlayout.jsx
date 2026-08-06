import Sidebar from "../dashboard/Sidebar";
import TopNavbar from "../dashboard/TopNavbar";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function DashboardLayout({ children }) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { loading, user } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950">

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main className="flex min-w-0 flex-1 flex-col">

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