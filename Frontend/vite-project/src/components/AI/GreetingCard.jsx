const GreetingCard = ({ title, message, suggestions, onSuggestionClick }) => {
  return (
    <div>

      <h2 className="text-xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        {message}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">

        {suggestions?.map((item, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(item)}
            className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-white transition-all hover:border-blue-500 hover:bg-blue-600"
          >
            {item}
          </button>
        ))}

      </div>

    </div>
  );
};

export default GreetingCard;