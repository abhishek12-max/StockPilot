import { useEffect, useRef, useState } from "react";

import api from "../../api/api";

import GreetingCard from "./GreetingCard";
import StockCard from "./StockCard";
import PortfolioCard from "./PortfolioCard";
import FinanceCard from "./FinanceCard";
import NewsCard from "./NewsCard";

const AiChat = () => {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [placeholder, setPlaceholder] = useState(
    "Ask StockPilot AI..."
  );

  const bottomRef = useRef(null);

 

  const sendMessage = async (customMessage = null) => {

    const finalMessage = customMessage || message;

    if (!finalMessage.trim()) return;

    const userMessage = {
      role: "user",
      content: finalMessage,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {

      const { data } = await api.post("/ai/chat", {
        message: finalMessage,
      });

      const aiMessage = {
        role: "assistant",
        content: data.response,
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch (error) {

  let message = "Unable to generate response.";

  if (error.response?.status === 403) {
    message = "🔒 This feature is available for PRO & PREMIUM users only.";
  } else if (error.response?.data?.message) {
    message = error.response.data.message;
  }

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content: {
        type: "text",
        message,
      },
    },
  ]);

} finally {

      setLoading(false);

      setMessage("");

      setPlaceholder("Ask StockPilot AI...");

    }

  };

  const handleSuggestionClick = (item) => {

    switch (item) {

      case "📊 Analyze My Portfolio":

        sendMessage("Analyze my portfolio");

        break;

      case "⚠️ Portfolio Risk":

        sendMessage("Analyze my portfolio risk");

        break;

      case "📰 Market News":

        sendMessage("Latest stock market news");

        break;

      case "📚 Learn Investing":

        sendMessage("Teach me investing for beginners");

        break;

      case "📈 Analyze Any Stock":

        setPlaceholder(
          "Example: Should I buy TCS? Analyze Apple? Analyze Reliance?"
        );

        break;

      default:
        break;

    }

  };

  const renderAIMessage = (content) => {

    if (!content) return null;

    switch (content.type) {

      case "greeting":

        return (
          <GreetingCard
            title={content.title}
            message={content.message}
            suggestions={content.suggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        );

      case "stock-analysis":

        return (
          <StockCard
            data={content}
          />
        );

      case "portfolio-analysis":

        return (
          <PortfolioCard
            data={content}
          />
        );

      case "finance":

        return (
          <FinanceCard
            data={content}
          />
        );

      case "news":

        return (
          <NewsCard
            data={content}
          />
        );

      default:

        return (
          <p className="whitespace-pre-wrap text-slate-200">
            {content.message || JSON.stringify(content)}
          </p>
        );

    }

  };
    return (
    <div className="flex h-[540px] flex-col rounded-2xl border border-slate-800 bg-slate-950 shadow-xl">

      {/* Header */}

      <div className="border-b border-slate-800 p-4">

        <h2 className="text-lg font-bold text-white">
          🤖 StockPilot AI
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          Your Personal Investment Assistant
        </p>

      </div>

      {/* Chat */}

      <div className="flex-1 space-y-4 overflow-y-auto p-4">

        {messages.length === 0 && (

          <div className="mt-12 text-center">

            <h2 className="text-xl font-semibold text-white">
              Welcome 👋
            </h2>

            <p className="mt-2 text-slate-400">
              Ask anything about stocks,
              portfolio or investing.
            </p>

          </div>

        )}

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`rounded-2xl p-4 max-w-[92%]
            ${
              msg.role === "user"
                ? "ml-auto bg-blue-600 text-white"
                : "bg-slate-800 text-white"
            }`}
          >

            {msg.role === "assistant"
              ? renderAIMessage(msg.content)
              : (
                <p className="whitespace-pre-wrap">
                  {msg.content}
                </p>
              )}

          </div>

        ))}

        {loading && (

          <div className="w-fit rounded-xl bg-slate-800 px-4 py-3 text-slate-300 animate-pulse">

            🤖 Thinking...

          </div>

        )}

        <div ref={bottomRef}></div>

      </div>

      {/* Input */}

      <div className="border-t border-slate-800 p-4">

        <div className="flex gap-2">

          <input
            type="text"
            value={message}
            placeholder={placeholder}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {

              if (e.key === "Enter") {

                sendMessage();

              }

            }}
            className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500"
          />

          <button
            onClick={() => sendMessage()}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-6 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >

            Send

          </button>

        </div>

      </div>

    </div>
  );
};

export default AiChat;