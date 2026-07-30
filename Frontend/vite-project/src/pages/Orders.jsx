import DashboardLayout from "../components/layout/DashboardLayout";
import SummaryCard from "../components/dashboard/SummaryCard";
import {FiClipboard , FiCheckCircle,FiClock,FiXCircle } from "react-icons/fi"
import OrderList from "../components/Order/OrderList";
const orders = [
  {
    id: 1,
    symbol: "AAPL",
    type: "Buy",
    quantity: 10,
    price: 210,
    status: "Completed",
    date: "30 Jul 2026",
  },
  {
    id: 2,
    symbol: "TSLA",
    type: "Sell",
    quantity: 5,
    price: 315,
    status: "Pending",
    date: "29 Jul 2026",
  },
  {
    id: 3,
    symbol: "NVDA",
    type: "Buy",
    quantity: 8,
    price: 155,
    status: "Completed",
    date: "28 Jul 2026",
  },
  {
    id: 4,
    symbol: "META",
    type: "Sell",
    quantity: 3,
    price: 520,
    status: "Cancelled",
    date: "27 Jul 2026",
  },
];

const totalOrders = orders.length;

const completedOrders = orders.filter(
  (order) => order.status === "Completed"
).length;

const pendingOrders = orders.filter(
  (order) => order.status === "Pending"
).length;

const cancelledOrders = orders.filter(
  (order) => order.status === "Cancelled"
).length;

const ordersSummary = [
  {
    title: "Total Orders",
    value: totalOrders,
    icon: <FiClipboard />,
  },
  {
    title: "Completed",
    value: completedOrders,
    icon: <FiCheckCircle />,
  },
  {
    title: "Pending",
    value: pendingOrders,
    icon: <FiClock />,
  },
  {
    title: "Cancelled",
    value: cancelledOrders,
    icon: <FiXCircle />,
  },
];
function Orders() {
  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold text-white">
        Orders
      </h1>

      <p className="mt-2 text-slate-400">
        Manage and track your trading orders
      </p>

       <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
    {ordersSummary.map((item) => (
      <SummaryCard
        key={item.title}
          icon={item.icon}
        title={item.title}
        value={item.value}
      />
    ))}
  </div>
  <div className="mt-5">
    <OrderList orders={orders}/>
  </div>

    </DashboardLayout>
  );
}

export default Orders;