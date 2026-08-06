const NewsCard = ({ data }) => {
  return (
    <div className="space-y-5">

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold text-white">
          📰 {data.title}
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Latest Market Update
        </p>

      </div>

      {/* Summary */}

      <div className="rounded-xl border border-blue-700 bg-blue-950/20 p-4">

        <h3 className="font-semibold text-blue-400">
          📝 Summary
        </h3>

        <p className="mt-3 leading-7 text-slate-200">
          {data.summary}
        </p>

      </div>

      {/* Market Impact */}

      <div className="rounded-xl border border-orange-700 bg-orange-950/20 p-4">

        <h3 className="font-semibold text-orange-400">
          📊 Market Impact
        </h3>

        <p className="mt-3 leading-7 text-slate-200">
          {data.impact}
        </p>

      </div>

      {/* Tips */}

      <div className="rounded-xl border border-green-700 bg-green-950/20 p-4">

        <h3 className="font-semibold text-green-400">
          💡 Key Takeaways
        </h3>

        <ul className="mt-3 space-y-2">

          {data.tips?.map((tip, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-slate-200"
            >
              <span>✔</span>

              <span>{tip}</span>

            </li>
          ))}

        </ul>

      </div>

    </div>
  );
};

export default NewsCard;