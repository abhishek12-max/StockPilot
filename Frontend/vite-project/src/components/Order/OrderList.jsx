import { useSearch } from "../../context/SearchContext";
const OrderList = ({ orders }) => {
const { search } = useSearch();

 const filteredOrders = orders.filter(function (order) {

  return (

    order.stock.symbol
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    order.stock.companyName
      .toLowerCase()
      .includes(search.toLowerCase())

  );

});
  if (orders.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6">

        <h2 className="text-xl font-semibold text-white">
          Orders
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Your complete trading history
        </p>

        <div className="mt-6 flex h-72 flex-col items-center justify-center rounded-xl border border-dashed border-slate-700">

          <h3 className="text-lg font-semibold text-white">
            No Orders Yet
          </h3>

          <p className="mt-2 max-w-sm text-center text-sm leading-6 text-slate-400">
            Place your first order from the Live Market page.
          </p>

        </div>

      </div>
    );
  }

 return (
  <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6">

    <h2 className="text-xl font-semibold text-white">
      Orders
    </h2>

    <p className="mt-1 text-sm text-slate-400">
      Your complete trading history
    </p>

    {/* Desktop */}

    <div className="mt-6 hidden overflow-x-auto lg:block">

      {filteredOrders.length === 0 ? (

        <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center">

          <h2 className="text-xl font-semibold text-white">
            No Orders Found
          </h2>

          <p className="mt-2 text-slate-400">
            Try searching with another stock symbol or company.
          </p>

        </div>

      ) : (

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700 text-left text-xs uppercase tracking-wide text-slate-400">

              <th className="pb-3">Symbol</th>
              <th className="pb-3">Company</th>
              <th className="pb-3">Side</th>
              <th className="pb-3">Qty</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Date & Time</th>

            </tr>

          </thead>

          <tbody>

            {filteredOrders.map(function (order) {

              const orderDate = new Date(order.createdAt);

              return (

                <tr
                  key={order._id}
                  className="border-b border-slate-800 text-white"
                >

                  <td className="py-4 font-semibold">
                    {order.stock.symbol}
                  </td>

                  <td>
                    {order.stock.companyName}
                  </td>

                  <td
                    className={`font-semibold ${
                      order.side === "BUY"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {order.side}
                  </td>

                  <td>
                    {order.quantity}
                  </td>

                  <td>
                    ₹{order.price.toFixed(2)}
                  </td>

                  <td>
                    {order.orderType}
                  </td>

                  <td>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        order.status === "COMPLETED"
                          ? "bg-green-500/10 text-green-400"
                          : order.status === "PENDING"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {order.status}
                    </span>

                  </td>

                  <td>

                    <div>

                      <p>
                        {orderDate.toLocaleDateString()}
                      </p>

                      <p className="text-xs text-slate-400">
                        {orderDate.toLocaleTimeString()}
                      </p>

                    </div>

                  </td>

                </tr>

              );

            })}

          </tbody>

        </table>

      )}

    </div>

    {/* Mobile */}

    <div className="mt-6 space-y-4 lg:hidden">

      {filteredOrders.length === 0 ? (

        <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center">

          <h2 className="text-xl font-semibold text-white">
            No Orders Found
          </h2>

          <p className="mt-2 text-slate-400">
            Try searching with another stock symbol or company.
          </p>

        </div>

      ) : (

        filteredOrders.map(function (order) {

          const orderDate = new Date(order.createdAt);

          return (

            <div
              key={order._id}
              className="rounded-xl border border-slate-700 bg-slate-900 p-4"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-lg font-bold text-white">
                    {order.stock.symbol}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {order.stock.companyName}
                  </p>

                </div>

                <span
                  className={`rounded-lg px-3 py-1 text-sm font-semibold ${
                    order.side === "BUY"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {order.side}
                </span>

              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">

                <div>

                  <p className="text-slate-400">
                    Quantity
                  </p>

                  <p className="font-semibold text-white">
                    {order.quantity}
                  </p>

                </div>

                <div>

                  <p className="text-slate-400">
                    Price
                  </p>

                  <p className="font-semibold text-white">
                    ₹{order.price.toFixed(2)}
                  </p>

                </div>

                <div>

                  <p className="text-slate-400">
                    Order Type
                  </p>

                  <p className="font-semibold text-white">
                    {order.orderType}
                  </p>

                </div>

                <div>

                  <p className="text-slate-400">
                    Status
                  </p>

                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      order.status === "COMPLETED"
                        ? "bg-green-500/10 text-green-400"
                        : order.status === "PENDING"
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {order.status}
                  </span>

                </div>

                <div>

                  <p className="text-slate-400">
                    Date
                  </p>

                  <p className="font-semibold text-white">
                    {orderDate.toLocaleDateString()}
                  </p>

                </div>

                <div>

                  <p className="text-slate-400">
                    Time
                  </p>

                  <p className="font-semibold text-white">
                    {orderDate.toLocaleTimeString()}
                  </p>

                </div>

              </div>

            </div>

          );

        })

      )}

    </div>

  </div>
);
}
export default OrderList;