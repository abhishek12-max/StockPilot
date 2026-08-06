import { CircleHelp, Headset, Mail } from "lucide-react";

function SupportSection() {
  return (
    <section className="py-20 px-6">

      {/* Hero */}

      <div className="max-w-3xl mx-auto text-center space-y-5">

        <div className="inline-flex items-center gap-2 rounded-full bg-purple-600/20 px-4 py-2 text-purple-400">
          <Headset className="h-5 w-5" />
          <span>Support</span>
        </div>

        <h2 className="text-4xl font-bold text-white">
          We're Here to Help
        </h2>

        <p className="text-lg leading-relaxed text-slate-400">
          Need assistance? Our team is here to help with your account,
          pricing and everything in between.
        </p>

      </div>

      {/* Cards */}

      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Email */}

        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 text-center space-y-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500">

          <Mail className="mx-auto h-12 w-12 text-purple-500" />

          <h3 className="text-2xl font-semibold text-white">
            Email Us
          </h3>

          <p className="text-slate-400">
            ap7785980@gmail.com
          </p>

          <a href="mailto:ap7785980@gmail.com?subject=TradeX Support">

            <button className="rounded-full bg-purple-600 px-6 py-2 text-white transition hover:bg-purple-700">

              Send Email

            </button>

          </a>

        </div>

        {/* FAQ Card */}

        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 text-center space-y-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500">

          <CircleHelp className="mx-auto h-12 w-12 text-purple-500" />

          <h3 className="text-2xl font-semibold text-white">
            Help Center
          </h3>

          <p className="text-slate-400">
            Browse our frequently asked questions.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("faq")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full bg-purple-600 px-6 py-2 text-white transition hover:bg-purple-700"
          >
            View FAQs
          </button>

        </div>

      </div>

      {/* FAQ Section */}

      <section
        id="faq"
        className="max-w-5xl mx-auto mt-24"
      >

        <h2 className="mb-10 text-center text-3xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

            <h3 className="font-semibold text-white">
              Is TradeX free to use?
            </h3>

            <p className="mt-2 text-slate-400">
              Yes. TradeX offers a FREE plan with essential trading features.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

            <h3 className="font-semibold text-white">
              How do I upgrade to PRO?
            </h3>

            <p className="mt-2 text-slate-400">
              Visit the Pricing page and complete your subscription securely using Razorpay.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

            <h3 className="font-semibold text-white">
              Payment completed but plan wasn't updated?
            </h3>

            <p className="mt-2 text-slate-400">
              Contact us via email with your payment details and we'll resolve it as soon as possible.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

            <h3 className="font-semibold text-white">
              How can I contact TradeX?
            </h3>

            <p className="mt-2 text-slate-400">
              You can reach us anytime at{" "}
              <span className="text-purple-400">
                ap7785980@gmail.com
              </span>
            </p>

          </div>

        </div>

      </section>

    </section>
  );
}

export default SupportSection;