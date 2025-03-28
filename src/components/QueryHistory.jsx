
// QueryHistory.jsx (updated UI)
import { useSelector } from "react-redux";

const QueryHistory = () => {
  const { history } = useSelector((state) => state.query);

  return (
    <div className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
        Query History
      </h2>
      <ul className="space-y-2">
        {history.map((q, index) => (
          <li 
            key={index} 
            className="p-3 rounded-lg bg-white bg-opacity-80 backdrop-blur-sm border border-opacity-20 border-gray-300 hover:shadow transition-all"
          >
            <span className="text-sm font-medium text-gray-700">{q}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;

