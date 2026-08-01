import { FaEye, FaTrash } from "react-icons/fa";

const WatchlistList = ({ watchlist }) => {

  return (
    <>

      {/* Desktop */}

      <div className="hidden lg:block overflow-x-auto rounded-xl bg-[#1B263B]">

        <table className="w-full text-left">

          <thead className="bg-[#243B55]">

            <tr>

              <th className="p-4">Symbol</th>

              <th className="p-4">Company</th>

              <th className="p-4">Current Price</th>

              <th className="p-4">Change</th>

              <th className="p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {watchlist.map((stock) => (

              <tr
                key={stock.id}
                className="border-b border-gray-700 hover:bg-[#243B55]"
              >

                <td className="p-4 font-semibold">
                  {stock.symbol}
                </td>

                <td className="p-4">
                  {stock.company}
                </td>

                <td className="p-4">
                  {stock.currentPrice}
                </td>

                <td
                  className={`p-4 font-semibold ${
                    stock.change.startsWith("+")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {stock.change}
                </td>

                <td className="p-4">

                  <div className="flex gap-4">

                    <button className="text-blue-400 hover:text-blue-500">
                      <FaEye />
                    </button>

                    <button className="text-red-400 hover:text-red-500">
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile */}

      <div className="grid gap-4 lg:hidden">

        {watchlist.map((stock) => (

          <div
            key={stock.id}
            className="bg-[#1B263B] rounded-xl p-5"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="font-bold text-lg">
                  {stock.symbol}
                </h2>

                <p className="text-gray-400">
                  {stock.company}
                </p>

              </div>

              <p
                className={`font-semibold ${
                  stock.change.startsWith("+")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {stock.change}
              </p>

            </div>

            <div className="mt-4">

              <p className="text-gray-300">

                Current Price :
                <span className="font-semibold ml-2">
                  {stock.currentPrice}
                </span>

              </p>

            </div>

            <div className="flex gap-3 mt-5">

              <button className="flex-1 bg-blue-600 py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-blue-700">

                <FaEye />

                View

              </button>

              <button className="flex-1 bg-red-600 py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-red-700">

                <FaTrash />

                Remove

              </button>

            </div>

          </div>

        ))}

      </div>

    </>
  );
};

export default WatchlistList;