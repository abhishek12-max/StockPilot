import DashboardLayout from "../components/layout/DashboardLayout";
import SummaryCard from "../components/dashboard/SummaryCard";
import AllocationChart from "../components/portfolio/AllocationChart";
import HoldingsTable from "../components/Portfolio/HoldingTable";

import {
  FiDollarSign,
  FiTrendingUp,
  FiPieChart,
  FiBriefcase,
} from "react-icons/fi";

const portfolioSummary = [
  {
    title: "Total Investment",
    value: "$20,000",
    icon: <FiDollarSign />,
  },
  {
    title: "Current Value",
    value: "$24,580",
    icon: <FiTrendingUp />,
  },
  {
    title: "Total Profit",
    value: "+$4,580",
    icon: <FiPieChart />,
  },
  {
    title: "Holdings",
    value: "18 Stocks",
    icon: <FiBriefcase />,
  },
];
const holdings = [
  {
    id: 1,
    symbol: "AAPL",
    company: "Apple Inc.",
    quantity: 10,
    avgPrice: 180,
    currentPrice: 210,
    profitLoss: 300,
  },
  {
    id: 2,
    symbol: "TSLA",
    company: "Tesla Inc.",
    quantity: 5,
    avgPrice: 290,
    currentPrice: 315,
    profitLoss: 125,
  },
  {
    id: 3,
    symbol: "NVDA",
    company: "NVIDIA",
    quantity: 8,
    avgPrice: 120,
    currentPrice: 155,
    profitLoss: 280,
  },
];

function Portfolio() {
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
    {portfolioSummary.map((item) => (
      <SummaryCard
        key={item.title}
        icon={item.icon}
        title={item.title}
        value={item.value}
      />
    ))}
  </div>
  <div className=" space-y-6">
  <AllocationChart/>
  <HoldingsTable holdings={holdings}/>
   
  </div>
  
</DashboardLayout>
  );
}

export default Portfolio;