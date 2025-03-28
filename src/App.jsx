
// App.jsx (updated UI)
import QueryInput from "./components/QueryInput.jsx";
import QueryHistory from "./components/QueryHistory.jsx";
import Results from "./components/Results.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 text-center">
  Gen AI Query Dashboard
</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <QueryInput />
              <Results />
            </div>
            <div className="lg:col-span-1">
              <QueryHistory />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;

