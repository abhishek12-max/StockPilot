import DashboardLayout from "../components/layout/DashboardLayout";
import OrderList from "../components/order/OrderList";
import { useEffect, useState } from "react";
import api from "../api/api";

function Orders() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState("");

  async function getOrders() {

    try {

      setLoading(true);
      setServerError("");

      const response = await api.get("/orders");

      setOrders(response.data.orders);

    } catch (error) {

      setServerError(
        error.response?.data?.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    getOrders();

  }, []);

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold text-white">
        Orders
      </h1>

      <p className="mt-2 text-slate-400">
        View your complete trading history.
      </p>

      <div className="mt-6">

        <OrderList orders={orders} />

      </div>

    </DashboardLayout>

  );

}

export default Orders;