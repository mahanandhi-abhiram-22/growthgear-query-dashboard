
// Results.jsx (updated UI)
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const Results = () => {
  const { result, loading, error } = useSelector((state) => state.query);

  if (loading) return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-inner flex justify-center items-center">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-indigo-400 h-3 w-3"></div>
        <div className="rounded-full bg-indigo-500 h-3 w-3"></div>
        <div className="rounded-full bg-indigo-600 h-3 w-3"></div>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-inner">
      <p className="text-red-600 font-medium">Error: {error}</p>
    </div>
  );
  
  if (!result) return null;

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
        Query Results
      </h2>
      <div className="bg-white bg-opacity-80 p-4 rounded-lg backdrop-blur-sm">
        <BarChart 
          width={500} 
          height={300} 
          data={[{ name: "Result", value: result.data[0] }, { name: "Result 2", value: result.data[1] }]}
        >
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#4f46e5' }}
          />
          <YAxis 
            tick={{ fill: '#4f46e5' }}
          />
          <Bar 
            dataKey="value" 
            fill="url(#barGradient)" 
            radius={[4, 4, 0, 0]}
          />
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </BarChart>
      </div>
    </div>
  );
};

export default Results;

