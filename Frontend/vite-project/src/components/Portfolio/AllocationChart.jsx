import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Apple", value: 40 },
  { name: "Tesla", value: 25 },
  { name: "NVIDIA", value: 20 },
  { name: "Others", value: 15 },
];

const COLORS = [
  "#8B5CF6",
  "#22C55E",
  "#3B82F6",
  "#F59E0B",
];

const AllocationChart = () => {
  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-[#0B1023] p-6 ">

      <h2 className="text-xl font-semibold text-white">
        Portfolio Allocation
      </h2>

      <p className="mt-1 text-sm text-slate-400">
        Distribution of your investments
      </p>

      <div className="mt-6 h-64 w-full sm:h-72 md:h-80">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend
  verticalAlign="bottom"
  align="center"
  wrapperStyle={{
    fontSize: "12px",
  }}
/>

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default AllocationChart;