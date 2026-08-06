import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function TermsConditions() {

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <section className="mx-auto max-w-5xl px-6 pt-32 pb-20">

        <h1 className="text-4xl font-bold">
          Terms & Conditions
        </h1>

        <p className="mt-4 text-slate-400">
          Last Updated: August 2026
        </p>

        <div className="mt-10 space-y-10">

          <div>

            <h2 className="text-2xl font-semibold">
              1. Acceptance of Terms
            </h2>

            <p className="mt-3 text-slate-400 leading-8">
              By using TradeX, you agree to these terms and conditions.
            </p>

          </div>

          <div>

            <h2 className="text-2xl font-semibold">
              2. User Responsibilities
            </h2>

            <p className="mt-3 text-slate-400 leading-8">
              You are responsible for maintaining the security of your
              account and login credentials.
            </p>

          </div>

          <div>

            <h2 className="text-2xl font-semibold">
              3. Subscription Plans
            </h2>

            <p className="mt-3 text-slate-400 leading-8">
              Paid plans unlock additional premium features including
              AI-powered insights and advanced analytics.
            </p>

          </div>

          <div>

            <h2 className="text-2xl font-semibold">
              4. Payments
            </h2>

            <p className="mt-3 text-slate-400 leading-8">
              Payments are processed securely using Razorpay. Prices
              may change in future updates.
            </p>

          </div>

          <div>

            <h2 className="text-2xl font-semibold">
              5. Investment Disclaimer
            </h2>

            <p className="mt-3 text-slate-400 leading-8">
              TradeX provides market information and analytical tools
              only. We do not guarantee profits or investment returns.
              Investing in financial markets involves risk.
            </p>

          </div>

          <div>

            <h2 className="text-2xl font-semibold">
              6. Contact
            </h2>

            <p className="mt-3 text-slate-400">
              Email: ap7785980@gmail.com
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </div>

  );

}

export default TermsConditions;