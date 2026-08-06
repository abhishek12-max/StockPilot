import { useState } from "react";
import api from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Pricingsection() {

  const [loading, setLoading] = useState(false);

 const { user, getProfile } = useAuth();
const navigate = useNavigate();
  const handlePayment = async (plan) => {
      
    try {
           
      setLoading(true);
      
       if (!user) {

  alert("Please login first to upgrade your plan.");

  navigate("/login");

  return;

}

      const { data } = await api.post("/payment/create-order", {
        plan,
      });

      const options = {

        key: data.key,

        amount: data.order.amount,

        currency: data.order.currency,

        name: "TradeX",

        description: `${plan} Plan Subscription`,

        order_id: data.order.id,

        prefill: {
          name: "",
          email: "",
        },

        theme: {
          color: "#7C3AED",
        },

       handler: async function (response) {

  try {

    const verify = await api.post("/payment/verify-payment", {
      ...response,
      plan,
    });

    alert(verify.data.message);

    // User ka latest plan fetch karo
    await getProfile();

    // AI page pe bhejo
    navigate("/dashboard");

  } catch (error) {

    console.log(error.response?.data || error);

    alert("Payment verification failed.");

  }

},

        modal: {

          ondismiss: function () {

            console.log("Payment Cancelled");

            navigate("/dashboard");

          },

        },

      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (error) {

      console.log(error.response?.data || error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <section>

      {/* Back Button */}

      <div className="mb-8">

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-purple-500 hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

      </div>

      {/* Heading */}

      <div className="text-center space-y-5">

        <h1 className="text-3xl font-bold text-white">
          💳 Pricing
        </h1>

        <p className="text-lg leading-tight tracking-tight text-slate-400">
          Choose the perfect plan for your trading journey.
          Simple pricing with no hidden charges.
        </p>

      </div>

      {/* Cards */}

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">

        {/* Free */}

        <div className="w-full rounded-3xl border border-slate-700 bg-slate-900 p-6">

          <div className="space-y-8 text-center">

            <h3 className="text-3xl font-bold text-white">
              BASIC FREE
            </h3>

            <ul className="space-y-4">

              <li className="text-slate-300">✔ Watchlist</li>

              <li className="text-slate-300">✔ Market</li>

              <li className="text-slate-300">✔ Portfolio</li>

              <li className="text-slate-300">✖ AI Assistant</li>

            </ul>

           {user ? (
  <button
    disabled
    className="rounded-full bg-slate-700 px-6 py-2 text-white cursor-default"
  >
    Current Plan
  </button>
) : (
  <Link to="/signup">
    <button className="rounded-full bg-purple-600 px-6 py-2 text-white transition hover:scale-105 hover:bg-purple-700">
      Get Started
    </button>
  </Link>
)}

          </div>

        </div>

        {/* Pro */}

        <div className="mt-10 w-full rounded-3xl border border-purple-600 bg-slate-900 p-6 lg:mt-0">

          <div className="space-y-8 text-center">

            <h3 className="text-3xl font-bold text-white">
              PRO ⭐ ₹299/mo
            </h3>

            <ul className="space-y-4">

              <li className="text-slate-300">✔ Everything</li>

              <li className="text-slate-300">✔ AI Assistant</li>

              <li className="text-slate-300">✔ Alerts</li>

              <li className="text-slate-300">✔ Analytics</li>

            </ul>

            <button
  onClick={() => handlePayment("PRO")}
  disabled={loading || user?.plan === "PRO"}
  className="rounded-full bg-purple-600 px-6 py-2 text-white transition hover:scale-105 hover:bg-purple-700 disabled:bg-slate-700 disabled:cursor-default"
>

             {user?.plan === "PRO"
  ? "Current Plan"
  : loading
  ? "Loading..."
  : "Upgrade"}

            </button>

          </div>

        </div>

       

      </div>

    </section>

  );

}

export default Pricingsection;