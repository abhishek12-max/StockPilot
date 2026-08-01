const SettingsCard = ({ item }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6">

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-xl text-white">
        {item.icon}
      </div>

      <h2 className="text-xl font-semibold text-white">
        {item.title}
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        {item.description}
      </p>

      <button className="mt-6 rounded-lg bg-purple-600 px-5 py-2 text-white transition hover:bg-purple-700">
        {item.button}
      </button>

    </div>
  );
};

export default SettingsCard;