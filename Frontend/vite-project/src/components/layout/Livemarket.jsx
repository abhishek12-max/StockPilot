import Marketcard from "./Marketcard";

function Livemarket() {

  const marketData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "₹98,42,000",
    change: "+2.34%",
    isPositive: true,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "₹2,85,000",
    change: "-1.12%",
    isPositive: false,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "₹14,500",
    change: "+5.80%",
    isPositive: true,
  },
  {
  symbol: "AAPL",
  name: "Apple Inc.",
  price: "$214.32",
  change: "+1.45%",
  isPositive: true,
}
];
    return ( 
        <section  className="py-24 px-6">
            {/* ye div heading ke liye hai */}
            <div className="text-center">
                <h2 className="text-5xl font-bold text-white">
                    Live Market
                </h2>
                <p className=" mt-4 max-w-2xl mx-auto text-slate-400">
             Track real-time prices of top cryptocurrencies and stocks,
             powered by fast market updates.
                </p>
             </div>

               <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {marketData.map((coin) => (
               <Marketcard key={coin.symbol}
              symbol={coin.symbol}
              name={coin.name}
               price={coin.price}
           change={coin.change}
          isPositive={coin.isPositive}
                />
               ))}
             </div>
             
             
        </section>
     );
}

export default Livemarket;