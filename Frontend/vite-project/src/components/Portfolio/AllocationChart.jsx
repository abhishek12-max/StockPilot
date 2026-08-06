import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import { FiPieChart } from "react-icons/fi";

const COLORS = [
  "#8B5CF6",
  "#22C55E",
  "#3B82F6",
  "#F59E0B",
  "#EF4444",
  "#06B6D4",
];

const AllocationChart = ({ portfolio }) => {

  const data = portfolio.map((item) => ({
    name: item.stock.companyName,
    value: item.currentValue,
  }));

  if (portfolio.length === 0) {
    return (
      <div className="mt-6 rounded-2xl border border-slate-800 bg-[#0B1023] p-6">

        <h2 className="text-xl font-semibold text-white">
          Portfolio Allocation
        </h2>

        <p className="mt-1 text-sm text-slate-400 mb-4">
          Distribution of your investments
        </p>

        <div className="flex h-72 flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 ">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10">

            <FiPieChart className="text-3xl text-purple-400" />

          </div>

          <h3 className="mt-5 text-lg font-semibold text-white">
            No Portfolio Data
          </h3>

          <p className="mt-2 max-w-sm text-center text-sm leading-6 text-slate-400">
            Buy your first stock to see your portfolio allocation.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-[#0B1023] p-6">

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