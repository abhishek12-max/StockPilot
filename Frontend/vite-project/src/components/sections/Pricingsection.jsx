import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check, X } from "lucide-react";

import api from "../../api/api";
import { useAuth } from "../../context/AuthContext";

function Pricingsection() {
  const [loading, setLoading] = useState(false);

  const { user, getProfile } = useAuth();
  const navigate = useNavigate();

  const handlePayment = async (plan) => {
    try {
      // User login check
      if (!user) {
        alert("Please login first to upgrade your plan.");
        navigate("/login");
        return;
      }

      // Already PRO
      if (user.plan === "PRO") {
        alert("You are already on the PRO plan.");
        return;
      }

      // Razorpay SDK check
      if (!window.Razorpay) {
        alert("Payment system is not loaded. Please try again.");
        return;
      }

      setLoading(true);

      // =========================
      // CREATE RAZORPAY ORDER
      // =========================

      const { data } = await api.post(
        "/payment/create-order",
        {
          plan,
        }
      );

      const options = {
        key: data.key,

        amount: data.order.amount,

        currency: data.order.currency,

        name: "StockPilot",

        description: `${plan} Plan Subscription`,

        order_id: data.order.id,

        prefill: {
          name: user.fullname || "",
          email: user.email || "",
        },

        theme: {
          color: "#7C3AED",
        },

        // =========================
        // PAYMENT SUCCESS
        // =========================

        handler: async function (response) {
          try {
            const verifyResponse = await api.post(
              "/payment/verify-payment",
              {
                ...response,
                plan,
              }
            );

            alert(verifyResponse.data.message);

            // Get latest user data
            await getProfile();

            // Go to dashboard
            navigate("/dashboard");

          } catch (error) {
            console.error(
              "Payment Verification Error:",
              error.response?.data || error
            );

            alert(
              error.response?.data?.message ||
                "Payment verification failed."
            );
          }
        },

        // =========================
        // PAYMENT CLOSED
        // =========================

        modal: {
          ondismiss: function () {
            console.log("Payment cancelled by user.");
          },
        },
      };

      // Open Razorpay
      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (error) {
      console.error(
        "Payment Error:",
        error.response?.data || error
      );

      alert(
        error.response?.data?.message ||
          "Unable to start payment."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 py-8">

      {/* =========================
          BACK BUTTON
      ========================= */}

      <div className="mb-8">
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-purple-500 hover:text-white"
        >
          <ArrowLeft size={18} />

          Back to Dashboard
        </button>
      </div>

      {/* =========================
          HEADER
      ========================= */}

      <div className="mx-auto max-w-2xl text-center">

        <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
          StockPilot Plans
        </span>

        <h1 className="mt-5 text-4xl font-bold text-white">
          Choose Your Plan
        </h1>

        <p className="mt-4 leading-7 text-slate-400">
          Start for free and upgrade to PRO when you need
          advanced AI-powered trading insights.
        </p>
      </div>

      {/* =========================
          PRICING CARDS
      ========================= */}

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">

        {/* =========================
            FREE PLAN
        ========================= */}

        <div
          className={`rounded-3xl border p-8 ${
            user?.plan === "FREE"
              ? "border-white/20 bg-white/[0.04]"
              : "border-white/10 bg-white/[0.02]"
          }`}
        >
          <div className="flex h-full flex-col">

            <div>
              <p className="text-sm font-medium text-slate-400">
                BASIC
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                Free
              </h2>

              <p className="mt-3 text-slate-400">
                Everything you need to get started.
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-white">
                  ₹0
                </span>

                <span className="ml-2 text-slate-500">
                  / forever
                </span>
              </div>
            </div>

            {/* Features */}

            <ul className="mt-8 space-y-4">

              <li className="flex items-center gap-3 text-slate-300">
                <Check
                  size={18}
                  className="text-emerald-400"
                />
                Watchlist
              </li>

              <li className="flex items-center gap-3 text-slate-300">
                <Check
                  size={18}
                  className="text-emerald-400"
                />
                Market Data
              </li>

              <li className="flex items-center gap-3 text-slate-300">
                <Check
                  size={18}
                  className="text-emerald-400"
                />
                Portfolio
              </li>

              <li className="flex items-center gap-3 text-slate-500">
                <X
                  size={18}
                  className="text-slate-600"
                />
                AI Assistant
              </li>

            </ul>

            {/* Current Plan */}

            <button
              type="button"
              disabled
              className="mt-auto rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-400"
             >
              {user?.plan === "FREE"
                ? "Current Plan"
                : "Free Plan"}
            </button>

          </div>
        </div>

        {/* =========================
            PRO PLAN
        ========================= */}

        <div className="relative rounded-3xl border border-purple-500/50 bg-purple-500/[0.05] p-8 shadow-xl shadow-purple-500/10">

          {/* Popular */}

          <div className="absolute right-6 top-6 rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white">
            PRO
          </div>

          <div className="flex h-full flex-col">

            <div>
              <p className="text-sm font-medium text-purple-400">
                PREMIUM
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                Pro
              </h2>

              <p className="mt-3 text-slate-400">
                Unlock the full TradeX experience.
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-white">
                  ₹299
                </span>

                <span className="ml-2 text-slate-500">
                  / month
                </span>
              </div>
            </div>

            {/* Features */}

            <ul className="mt-8 space-y-4">

              <li className="flex items-center gap-3 text-slate-300">
                <Check
                  size={18}
                  className="text-purple-400"
                />
                Everything in Free
              </li>

              <li className="flex items-center gap-3 text-slate-300">
                <Check
                  size={18}
                  className="text-purple-400"
                />
                AI Assistant
              </li>

              <li className="flex items-center gap-3 text-slate-300">
                <Check
                  size={18}
                  className="text-purple-400"
                />
                Smart Alerts
              </li>

              <li className="flex items-center gap-3 text-slate-300">
                <Check
                  size={18}
                  className="text-purple-400"
                />
                Advanced Analytics
              </li>

            </ul>

            {/* Upgrade */}

            <button
              type="button"
              onClick={() => handlePayment("PRO")}
              disabled={loading || user?.plan === "PRO"}
              className="mt-auto rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:scale-[1.02] disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
            >
              {user?.plan === "PRO"
                ? "Current Plan"
                : loading
                ? "Processing..."
                : "Upgrade to PRO"}
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Pricingsection;