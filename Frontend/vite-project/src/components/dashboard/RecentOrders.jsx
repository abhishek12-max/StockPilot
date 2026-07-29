const RecentOrders = ({ orders }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6">
      <h2 className="mb-6 text-lg font-semibold text-white">
        Recent Orders
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700 text-left text-sm text-slate-400">
              <th className="pb-3">Stock</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Qty</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-slate-800">
                <td className="py-4 text-white">{order.stock}</td>

                <td
                  className={`py-4 ${
                    order.type === "Buy"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {order.type}
                </td>

                <td className="py-4 text-slate-300">
                  {order.quantity}
                </td>

                <td className="py-4 text-slate-300">
                  {order.price}
                </td>

                <td className="py-4 text-slate-300">
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;