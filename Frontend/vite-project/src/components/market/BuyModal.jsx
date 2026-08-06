import { useEffect, useState } from "react";
import api from "../../api/api";

function BuyModal({
  isOpen,
  onClose,
  stock,
  onSuccess,
}) {
  const [quantity, setQuantity] = useState(1);

  const [orderType, setOrderType] = useState("MARKET");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setOrderType("MARKET");
    }
  }, [isOpen]);

  if (!isOpen || !stock) return null;

  const totalAmount =
    Number(quantity) * stock.currentPrice;

  async function handleBuy() {
    try {
      setLoading(true);

      const response = await api.post("/orders", {
        stockId: stock._id,
        quantity: Number(quantity),
        side: "BUY",
        orderType,
      });

      alert(response.data.message);

      onClose();

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">

      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0B1023] border border-slate-800 p-5">

        <h2 className="text-xl font-bold text-white">
          Buy Stock
        </h2>

        <p className="mt-1 text-slate-400">
          {stock.companyName}
        </p>

        <div className="mt-5 space-y-4">

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Symbol
            </label>

            <input
              value={stock.symbol}
              readOnly
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Current Price
            </label>

            <input
              value={`₹${stock.currentPrice}`}
              readOnly
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Quantity
            </label>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(e.target.value)
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Order Type
            </label>

            <select
              value={orderType}
              onChange={(e) =>
                setOrderType(e.target.value)
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white outline-none focus:border-purple-500"
            >
              <option value="MARKET">
                Market
              </option>

              <option value="LIMIT">
                Limit
              </option>
            </select>
          </div>

          <div className="rounded-xl bg-slate-900 p-4">

            <p className="text-sm text-slate-400">
              Estimated Cost
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              ₹{totalAmount.toFixed(2)}
            </h3>

          </div>

        </div>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-700 px-5 py-2.5 text-white transition hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            onClick={handleBuy}
            disabled={loading}
            className="rounded-xl bg-purple-600 px-5 py-2.5 font-medium text-white transition hover:bg-purple-700 disabled:opacity-50"
          >
            {loading
              ? "Buying..."
              : "Confirm Buy"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default BuyModal;