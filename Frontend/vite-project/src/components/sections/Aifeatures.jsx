import AifeatureCard from "../ui/AifeatureCard";
function Aifeatures() {
    const featureData = [
  {
    title: "AI Portfolio Analysis",
    description:
      "Get personalized insights to improve your investment portfolio.",
  },
  {
    title: "AI Market Prediction",
    description:
      "Discover market trends with AI-powered analysis and forecasts.",
  },
  {
    title: "AI News Summary",
    description:
      "Read concise summaries of the latest financial and crypto news.",
  },
  {
    title: "AI Trading Assistant",
    description:
      "Ask questions and receive instant AI-powered trading guidance.",
  },
];
    return ( 
        <section  className="pt-12 pb-24 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
                AI Powered Features
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-400">
              Let AI analyze markets, summarize news, and help you make smarter investment decisions.  
            </p>
          </div>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
           {featureData.map((feature) => (
          <AifeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
           ))}
      </div>
        </section>
     );
}

export default Aifeatures;