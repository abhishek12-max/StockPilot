import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <section className="mx-auto max-w-5xl px-6 pt-32 pb-20">

        <h1 className="text-4xl font-bold">
          Privacy Policy
        </h1>

        <p className="mt-4 text-slate-400">
          Last Updated: August 2026
        </p>

        <div className="mt-10 space-y-10">

          <div>
            <h2 className="text-2xl font-semibold">
              1. Information We Collect
            </h2>

            <p className="mt-3 text-slate-400 leading-8">
              TradeX collects basic information such as your name,
              email address and account details when you register.
              This information is used only to provide our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              2. How We Use Your Information
            </h2>

            <ul className="mt-3 list-disc pl-6 text-slate-400 space-y-2">
              <li>Authenticate your account</li>
              <li>Manage your portfolio</li>
              <li>Provide subscription services</li>
              <li>Improve user experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              3. Cookies
            </h2>

            <p className="mt-3 text-slate-400 leading-8">
              We use secure cookies to keep you logged in and maintain
              your session while using TradeX.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              4. Data Security
            </h2>

            <p className="mt-3 text-slate-400 leading-8">
              Your data is protected using industry-standard security
              practices. Passwords are encrypted before being stored.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              5. Third Party Services
            </h2>

            <p className="mt-3 text-slate-400 leading-8">
              TradeX uses Razorpay for secure payment processing.
              Payment information is handled securely by Razorpay.
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

export default PrivacyPolicy;