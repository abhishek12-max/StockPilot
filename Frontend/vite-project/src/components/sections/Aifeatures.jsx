import AifeatureCard from "../ui/AifeatureCard";

const featureData = [
  {
    title: "AI Portfolio Analysis",
    description:
      "Get personalized insights to understand your portfolio and make smarter investment decisions.",
  },
  {
    title: "AI Market Prediction",
    description:
      "Discover market trends with AI-powered analysis and intelligent market insights.",
  },
  {
    title: "AI News Summary",
    description:
      "Get concise summaries of important financial news without reading everything.",
  },
  {
    title: "AI Trading Assistant",
    description:
      "Ask questions and get instant AI-powered assistance based on your portfolio and market data.",
  },
];

function Aifeatures() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}

        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            AI Powered
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Intelligence built into your trading
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Let AI analyze your portfolio, understand market trends,
            summarize financial news, and help you make smarter decisions.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featureData.map((feature) => (
            <AifeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Aifeatures;