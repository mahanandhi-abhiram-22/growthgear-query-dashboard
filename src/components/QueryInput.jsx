import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery, querySuccess, queryFailure } from "../redux/querySlice.jsx";

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!query.trim()) return; // Prevent empty submissions
    dispatch(submitQuery());
    setTimeout(() => {
      if (query.toLowerCase().includes("error")) {
        dispatch(queryFailure("Invalid query"));
      } else {
        dispatch(querySuccess({ query, data: [Math.random() * 100, Math.random() * 100] }));
      }
    }, 1000);
    setQuery(""); // Clear input after submission
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-lg">
      <div className="relative">
        <input
          type="text"
          className="w-full p-4 pr-20 rounded-lg border-0 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700 placeholder-gray-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown} // 🔥 Listen for Enter key
          placeholder="Ask a business question..."
        />
        <button 
          className="absolute right-2 top-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-md hover:shadow-md transition-all transform hover:scale-105 active:scale-95"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QueryInput;
