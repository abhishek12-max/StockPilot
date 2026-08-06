import { useState } from "react";
import SellModal from "./SellModal";
import { FiTrendingDown } from "react-icons/fi";
import { useSearch } from "../../context/SearchContext";
const HoldingsTable = ({
  holdings,
  refreshPortfolio,
}) => {
const { search } = useSearch();
  const [selectedStock, setSelectedStock] = useState(null);

  const [isSellModalOpen, setIsSellModalOpen] = useState(false);

  function openSellModal(holding) {

    setSelectedStock(holding);

    setIsSellModalOpen(true);

  }

  function closeSellModal() {

    setSelectedStock(null);

    setIsSellModalOpen(false);

  }

  const filteredHoldings = holdings.filter(function (holding) {

  return (

    holding.stock.symbol
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    holding.stock.companyName
      .toLowerCase()
      .includes(search.toLowerCase())

  );

});

  if (holdings.length === 0) {

    return (

      <div className="mt-6 rounded-2xl border border-slate-800 bg-[#0B1023] p-6">

        <h2 className="text-xl font-semibold text-white">
          Holdings
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Your current stock investments
        </p>

        <div className="mt-6 flex h-72 flex-col items-center justify-center rounded-xl border border-dashed border-slate-700">

          <h3 className="text-lg font-semibold text-white">
            No Holdings Found
          </h3>

          <p className="mt-2 max-w-sm text-center text-sm leading-6 text-slate-400">
            Buy your first stock to start building your portfolio.
          </p>

        </div>

      </div>

    );

  }

  return (

  <>

    <div className="mt-6 rounded-2xl border border-slate-800 bg-[#0B1023] p-6">

      <h2 className="text-xl font-semibold text-white">
        Holdings
      </h2>

      <p className="mt-1 text-sm text-slate-400">
        Your current stock investments
      </p>

      {/* Desktop */}

      <div className="mt-6 hidden overflow-x-auto lg:block">

        {filteredHoldings.length === 0 ? (

          <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center">

            <h2 className="text-xl font-semibold text-white">
              No Holdings Found
            </h2>

            <p className="mt-2 text-slate-400">
              Try searching another stock.
            </p>

          </div>

        ) : (

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-700 text-left text-xs uppercase tracking-wide text-slate-400">

                <th className="pb-4">Symbol</th>
                <th className="pb-4">Company</th>
                <th className="pb-4">Qty</th>
                <th className="pb-4">Avg Price</th>
                <th className="pb-4">Current Price</th>
                <th className="pb-4">Investment</th>
                <th className="pb-4">Current Value</th>
                <th className="pb-4">P/L</th>
                <th className="pb-4">Action</th>

              </tr>

            </thead>

            <tbody>

              {filteredHoldings.map(function (holding) {

                return (

                  <tr
                    key={holding.stock._id}
                    className="border-b border-slate-800 text-white"
                  >

                    <td className="py-4 font-semibold">
                      {holding.stock.symbol}
                    </td>

                    <td>
                      {holding.stock.companyName}
                    </td>

                    <td>
                      {holding.quantity}
                    </td>

                    <td>
                      ₹{holding.averagePrice.toFixed(2)}
                    </td>

                    <td>
                      ₹{holding.stock.currentPrice.toFixed(2)}
                    </td>

                    <td>
                      ₹{holding.investment.toFixed(2)}
                    </td>

                    <td>
                      ₹{holding.currentValue.toFixed(2)}
                    </td>

                    <td
                      className={`font-semibold ${
                        holding.profitLoss >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      ₹{holding.profitLoss.toFixed(2)}
                    </td>

                    <td>

                      <button
                        onClick={function () {
                          openSellModal(holding);
                        }}
                        className="flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
                      >

                        <FiTrendingDown />

                        Sell

                      </button>

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

        {filteredHoldings.length === 0 ? (

          <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center">

            <h2 className="text-xl font-semibold text-white">
              No Holdings Found
            </h2>

            <p className="mt-2 text-slate-400">
              Try searching another stock.
            </p>

          </div>

        ) : (

          filteredHoldings.map(function (holding) {

            return (

              <div
                key={holding.stock._id}
                className="rounded-xl border border-slate-700 bg-slate-900 p-4"
              >

                <h3 className="text-lg font-bold text-white">
                  {holding.stock.symbol}
                </h3>

                <p className="text-sm text-slate-400">
                  {holding.stock.companyName}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">

                  <div>

                    <p className="text-slate-400">
                      Quantity
                    </p>

                    <p className="text-white">
                      {holding.quantity}
                    </p>

                  </div>

                  <div>

                    <p className="text-slate-400">
                      Avg Price
                    </p>

                    <p className="text-white">
                      ₹{holding.averagePrice.toFixed(2)}
                    </p>

                  </div>

                  <div>

                    <p className="text-slate-400">
                      Current Price
                    </p>

                    <p className="text-white">
                      ₹{holding.stock.currentPrice.toFixed(2)}
                    </p>

                  </div>

                  <div>

                    <p className="text-slate-400">
                      Current Value
                    </p>

                    <p className="text-white">
                      ₹{holding.currentValue.toFixed(2)}
                    </p>

                  </div>

                  <div>

                    <p className="text-slate-400">
                      Profit / Loss
                    </p>

                    <p
                      className={`font-semibold ${
                        holding.profitLoss >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      ₹{holding.profitLoss.toFixed(2)}
                    </p>

                  </div>

                </div>

                <button
                  onClick={function () {
                    openSellModal(holding);
                  }}
                  className="mt-5 w-full rounded-lg bg-red-600 py-2 text-white hover:bg-red-700"
                >

                  Sell Stock

                </button>

              </div>

            );

          })

        )}

      </div>

    </div>

    <SellModal
      isOpen={isSellModalOpen}
      onClose={closeSellModal}
      stock={selectedStock?.stock}
      maxQuantity={selectedStock?.quantity}
      onSuccess={function () {

        closeSellModal();

        refreshPortfolio();

      }}
    />

  </>

);

}

export default HoldingsTable;