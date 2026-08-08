import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description:
        "Create your TradeX account and get ready to explore the market.",
    },
    {
      number: "02",
      title: "Explore the Market",
      description:
        "Search stocks, view real-time prices and discover market opportunities.",
    },
    {
      number: "03",
      title: "Trade with AI",
      description:
        "Use AI-powered insights to understand your portfolio and make smarter decisions.",
    },
    {
      number: "04",
      title: "Track Your Portfolio",
      description:
        "Monitor your holdings, orders, investments and overall portfolio performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="px-6 pt-32 pb-24">
        {/* Header */}
        <section className="mx-auto max-w-4xl text-center">

          <div className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2">
            <span className="text-sm font-medium text-purple-300">
              Simple Process
            </span>
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
            How It Works
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Start investing smarter with TradeX in just a few simple steps.
          </p>
        </section>

        {/* Steps */}
        <section className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/[0.05]"
            >
              <span className="text-sm font-semibold text-purple-400">
                {step.number}
              </span>

              <h2 className="mt-4 text-2xl font-semibold">
                {step.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HowItWorks;