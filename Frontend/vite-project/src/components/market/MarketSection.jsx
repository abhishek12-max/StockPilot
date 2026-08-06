import { useEffect, useState } from "react";
import api from "../../api/api";
import MarketCard from "./MarketCard";
import BuyModal from "./BuyModal";
import { useSearch } from "../../context/SearchContext";

function MarketSection() {

  const [stocks, setStocks] = useState([]);

  const [loading, setLoading] = useState(true);

  const [serverError, setServerError] = useState("");

  const [selectedStock, setSelectedStock] = useState(null);

  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const { search } = useSearch();
  async function getStocks() {

    try {

      setLoading(true);

      setServerError("");

      const response = await api.get("/market");

      setStocks(response.data.stocks);

    } catch (error) {

      setServerError(

        error.response?.data?.message ||

        "Something went wrong."

      );

    } finally {

      setLoading(false);

    }

  }

 useEffect(() => {

  getStocks();

  const interval = setInterval(() => {

    getStocks();

  }, 10000);

  return () => clearInterval(interval);

}, []);

const filteredStocks = stocks.filter(function (stock) {

  return (

    stock.symbol
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    stock.companyName
      .toLowerCase()
      .includes(search.toLowerCase())

  );

});

  function openBuyModal(stock) {

    setSelectedStock(stock);

    setIsBuyModalOpen(true);

  }

  function closeBuyModal() {

    setSelectedStock(null);

    setIsBuyModalOpen(false);

  }

  async function addToWatchlist(stock) {

    try {

      const response = await api.post(
        "/watchlist",
        {
          stockId: stock._id,
        }
      );

      alert(response.data.message);

    } catch (error) {

      alert(

        error.response?.data?.message ||

        "Something went wrong."

      );

    }

  }

 

  return (

    <section>

      <div>

        <h1 className="text-4xl font-bold text-white">
          Market
        </h1>

        <p className="mt-2 text-slate-400">
          Explore stocks and build your portfolio.
        </p>

      </div>

      {loading && (

        <p className="mt-10 text-center text-slate-400">
          Loading Market...
        </p>

      )}

      {serverError && (

        <p className="mt-10 text-center text-red-500">
          {serverError}
        </p>

      )}

      {!loading && !serverError && (

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                 {filteredStocks.length === 0 && !loading && (

  <div className="col-span-full rounded-xl border border-dashed border-slate-700 p-10 text-center">

    <h2 className="text-xl font-semibold text-white">
      No Stocks Found
    </h2>

    <p className="mt-2 text-slate-400">
      Try searching with another symbol or company name.
    </p>

  </div>

)}
         {filteredStocks.map((stock) => (

  <MarketCard
    key={stock._id}
    stock={stock}
    onBuy={openBuyModal}
    onWatchlist={addToWatchlist}
  />

))}

        </div>

      )}

      <BuyModal

        isOpen={isBuyModalOpen}

        onClose={closeBuyModal}

        stock={selectedStock}

        onSuccess={getStocks}

      />

    </section>

  );

}

export default MarketSection;