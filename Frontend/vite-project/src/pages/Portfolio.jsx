import DashboardLayout from "../components/layout/Dashboardlayout";
import SummaryCard from "../components/dashboard/SummaryCard";
import AllocationChart from "../components/Portfolio/AllocationChart";
import HoldingsTable from "../components/Portfolio/HoldingTable";
import {
  FiDollarSign,
  FiTrendingUp,
  FiPieChart,
  FiBriefcase,
} from "react-icons/fi";
import {useState, useEffect } from "react";
import api from "../api/api";

function Portfolio() {

   const [portfolio, setPortfolio] = useState([]);
const [summary, setSummary] = useState(null);

const [loading, setLoading] = useState(true);
const [serverError, setServerError] = useState("");

  async function getPortfolio(){
      try {
          setServerError("")
          setLoading(true)
     const response= await api.get("/portfolio");
         setPortfolio(response.data.portfolio);

    setSummary(response.data.summary);

      } catch (error) {
         setServerError(
      error.response?.data?.message ||
      "Something went wrong"
    );
      }finally{
         setLoading(false)
      }

  }

  useEffect(() => {

  getPortfolio();

  const interval = setInterval(() => {

    getPortfolio();

  }, 10000);

  return () => clearInterval(interval);

}, []);

  return (
   <DashboardLayout>

  <div>
    <h1 className="text-3xl font-bold text-white">
      Portfolio
    </h1>

    <p className="mt-2 text-slate-400">
      Track your investments and holdings
    </p>
  </div>
  <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

  <SummaryCard
    title="Total Investment"
    value={`₹${summary?.totalInvestment ?? 0}`}
    icon={<FiDollarSign />}
  />

  <SummaryCard
    title="Current Value"
    value={`₹${summary?.totalCurrentValue ?? 0}`}
    icon={<FiTrendingUp />}
  />

  <SummaryCard
    title="Total Profit"
    value={`₹${summary?.totalProfitLoss ?? 0}`}
    icon={<FiPieChart />}
  />

  <SummaryCard
    title="Holdings"
    value={summary?.totalHoldings ?? 0}
    icon={<FiBriefcase />}
  />

</div>

  <div className=" space-y-6">
  <AllocationChart portfolio = {portfolio} />
  <HoldingsTable holdings={portfolio}   refreshPortfolio={getPortfolio}/>
   
  </div>
  
</DashboardLayout>
  );
}

export default Portfolio;