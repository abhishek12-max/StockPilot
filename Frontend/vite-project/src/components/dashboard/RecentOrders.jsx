import { FiShoppingBag } from "react-icons/fi";

const RecentOrders = ({ orders }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6">

      {/* Heading */}

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Recent Orders
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Your latest buy and sell transactions.
        </p>
      </div>

      {/* Empty State */}

      {orders.length === 0 ? (

        <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-slate-700">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10">

            <FiShoppingBag className="text-3xl text-purple-400" />

          </div>

          <h3 className="mt-5 text-lg font-semibold text-white">
            No Recent Orders
          </h3>

          <p className="mt-2 max-w-sm text-center text-sm leading-6 text-slate-400">
            Your recent buy and sell transactions
            will appear here once you place your
            first order.
          </p>

        </div>

      ) : (

        <>
          {/* Desktop Table */}

          <div className="hidden overflow-x-auto md:block">

            <table className="w-full">

              <thead>

                <tr className="border-b border-slate-700 text-left text-sm text-slate-400">

                  <th className="pb-4">Stock</th>
                  <th className="pb-4">Type</th>
                  <th className="pb-4">Qty</th>
                  <th className="pb-4">Price</th>
                  <th className="pb-4">Status</th>

                </tr>

              </thead>

              <tbody>

                {orders.map((order) => (

                  <tr
                    key={order._id}
                    className="border-b border-slate-800 last:border-none"
                  >

                    <td className="py-4 font-medium text-white">
                      {order.stock.symbol}
                    </td>

                    <td className="py-4">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          order.side === "BUY"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {order.side}
                      </span>

                    </td>

                    <td className="py-4 text-slate-300">
                      {order.quantity}
                    </td>

                    <td className="py-4 text-slate-300">
                      ₹{order.price}
                    </td>

                    <td className="py-4">

                      <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">

                        {order.orderType}

                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Mobile Cards */}

          <div className="space-y-4 md:hidden">

            {orders.map((order) => (

              <div
                key={order._id}
                className="rounded-xl border border-slate-800 bg-slate-900 p-4"
              >

                <div className="flex items-center justify-between">

                  <h3 className="font-semibold text-white">
                    {order.stock.symbol}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      order.side === "BUY"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {order.side}
                  </span>

                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">

                  <div>

                    <p className="text-slate-500">
                      Quantity
                    </p>

                    <p className="mt-1 text-white">
                      {order.quantity}
                    </p>

                  </div>

                  <div>

                    <p className="text-slate-500">
                      Price
                    </p>

                    <p className="mt-1 text-white">
                      ₹{order.price}
                    </p>

                  </div>

                  <div>

                    <p className="text-slate-500">
                      Order
                    </p>

                    <p className="mt-1 text-white">
                      {order.orderType}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </>

      )}

    </div>
  );
};

export default RecentOrders;