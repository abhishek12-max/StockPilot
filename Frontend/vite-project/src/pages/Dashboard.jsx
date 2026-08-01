import Dashboardlayout from "../components/layout/Dashboardlayout";
import SummaryCard from "../components/dashboard/SummaryCard";
import RecentOrders from "../components/dashboard/RecentOrders";
import Watchlist from "../components/dashboard/Watchlist";
import { useEffect, useState } from "react";
import api from "../api/api";
import {
  FiDollarSign,
  FiTrendingUp,
  FiPieChart,
  FiShoppingBag,
} from "react-icons/fi";
import PortfolioChart from "../components/dashboard/PortfolioChart";

const cards = [
  {
    title: "Total Balance",
    value: "$125,000",
    percentage: "+12%",
    icon: <FiDollarSign />,
  },
  {
    title: "Today's Profit",
    value: "+$2,400",
    percentage: "+3.8%",
    icon: <FiTrendingUp />,
  },
  {
    title: "Holdings",
    value: "18",
    percentage: "+2",
    icon: <FiPieChart />,
  },
  {
    title: "Orders",
    value: "42",
    percentage: "+5",
    icon: <FiShoppingBag />,
  },
];

const orders = [
  {
    id: 1,
    stock: "AAPL",
    type: "Buy",
    quantity: 10,
    price: "$210",
    status: "Completed",
  },
  {
    id: 2,
    stock: "TSLA",
    type: "Sell",
    quantity: 5,
    price: "$310",
    status: "Pending",
  },
  {
    id: 3,
    stock: "NVDA",
    type: "Buy",
    quantity: 8,
    price: "$150",
    status: "Completed",
  },
];

const watchlist = [
  {
    id: 1,
    symbol: "AAPL",
    company: "Apple Inc.",
    price: 210,
    change: 2.4,
  },
  {
    id: 2,
    symbol: "TSLA",
    company: "Tesla",
    price: 315,
    change: -1.8,
  },
  {
    id: 3,
    symbol: "NVDA",
    company: "NVIDIA",
    price: 155,
    change: 4.2,
  },
];
function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  const FetchDashboard= async()=>{
     const response= await api.get("/dashboard");
     setDashboard(response.data.dashboard);
  }

  useEffect(()=>{
   FetchDashboard();
  },[]);
    return (  
        <>
        <Dashboardlayout>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6 ">
             
        {cards.map((card) => (
          <SummaryCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            value={card.value}
            percentage={card.percentage}
          />
        ))}
        </div>

       <div className="mt-6">
      <PortfolioChart />
      </div>
              {/* order and watchlist */}
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentOrders orders={orders} />

        <Watchlist stocks={watchlist}/>
      </div>
        </Dashboardlayout>
        </>
    );
}

export default Dashboard;