import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useSearch } from "../../context/SearchContext";
import api from "../../api/api";
import BuyModal from "../market/BuyModal";

const WatchlistList = ({
  watchlist,
  refreshWatchlist,
}) => {

  const { search } = useSearch();

  const [selectedStock, setSelectedStock] = useState(null);

  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  const filteredWatchlist = watchlist.filter(function (item) {

    return (

      item.stock.symbol
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      item.stock.companyName
        .toLowerCase()
        .includes(search.toLowerCase())

    );

  });

  async function removeStock(stockId) {

    try {

      const response = await api.delete(
        `/watchlist/${stockId}`
      );

      alert(response.data.message);

      refreshWatchlist();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Something went wrong."
      );

    }

  }

  function openBuyModal(stock) {

    setSelectedStock(stock);

    setIsBuyModalOpen(true);

  }

  function closeBuyModal() {

    setSelectedStock(null);

    setIsBuyModalOpen(false);

  }

  return (

    <>

      {/* Desktop */}

      <div className="hidden overflow-x-auto rounded-xl bg-[#1B263B] lg:block">

        {filteredWatchlist.length === 0 ? (

          <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center">

            <h2 className="text-xl font-semibold text-white">
              No Stocks Found
            </h2>

            <p className="mt-2 text-slate-400">
              Try searching another stock.
            </p>

          </div>

        ) : (

          <table className="w-full text-left">

            <thead className="bg-[#243B55]">

              <tr>

                <th className="p-4">
                  Symbol
                </th>

                <th className="p-4">
                  Company
                </th>

                <th className="p-4">
                  Exchange
                </th>

                <th className="p-4">
                  Industry
                </th>

                <th className="p-4">
                  Current Price
                </th>

                <th className="p-4">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredWatchlist.map(function (item) {

                return (

                  <tr
                    key={item._id}
                    className="border-b border-slate-700 hover:bg-[#243B55]"
                  >

                    <td className="p-4 font-semibold">
                      {item.stock.symbol}
                    </td>

                    <td className="p-4">
                      {item.stock.companyName}
                    </td>

                    <td className="p-4">
                      {item.stock.exchange}
                    </td>

                    <td className="p-4">
                      {item.stock.industry}
                    </td>

                    <td className="p-4">
                      ₹{item.stock.currentPrice.toFixed(2)}
                    </td>

                    <td className="p-4">

                      <div className="flex items-center gap-4">

                        <button
                          onClick={function () {
                            openBuyModal(item.stock);
                          }}
                          className="text-green-400 transition hover:text-green-500"
                        >

                          <FiShoppingCart size={18} />

                        </button>

                        <button
                          onClick={function () {
                            removeStock(item.stock._id);
                          }}
                          className="text-red-400 transition hover:text-red-500"
                        >

                          <FaTrash size={16} />

                        </button>

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

      <div className="grid gap-4 lg:hidden">

        {filteredWatchlist.length === 0 ? (

          <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center">

            <h2 className="text-xl font-semibold text-white">
              No Stocks Found
            </h2>

            <p className="mt-2 text-slate-400">
              Try searching another stock.
            </p>

          </div>

        ) : (

          filteredWatchlist.map(function (item) {

            return (

              <div
                key={item._id}
                className="rounded-xl bg-[#1B263B] p-5"
              >

                <h2 className="text-lg font-bold text-white">
                  {item.stock.symbol}
                </h2>

                <p className="text-slate-400">
                  {item.stock.companyName}
                </p>

                <div className="mt-4 space-y-2 text-sm text-slate-300">

                  <p>

                    <span className="font-semibold">
                      Exchange :
                    </span>{" "}

                    {item.stock.exchange}

                  </p>

                  <p>

                    <span className="font-semibold">
                      Industry :
                    </span>{" "}

                    {item.stock.industry}

                  </p>

                  <p>

                    <span className="font-semibold">
                      Current Price :
                    </span>{" "}

                    ₹{item.stock.currentPrice.toFixed(2)}

                  </p>

                </div>

                <div className="mt-5 flex gap-3">

                  <button
                    onClick={function () {
                      openBuyModal(item.stock);
                    }}
                    className="flex-1 rounded-lg bg-purple-600 py-2 text-white transition hover:bg-purple-700"
                  >

                    Buy

                  </button>

                  <button
                    onClick={function () {
                      removeStock(item.stock._id);
                    }}
                    className="flex-1 rounded-lg bg-red-600 py-2 text-white transition hover:bg-red-700"
                  >

                    Remove

                  </button>

                </div>

              </div>

            );

          })

        )}

      </div>

      <BuyModal

        isOpen={isBuyModalOpen}

        onClose={closeBuyModal}

        stock={selectedStock}

        onSuccess={function () {

          closeBuyModal();

          refreshWatchlist();

        }}

      />

    </>

  );

};

export default WatchlistList;