import Layout from "../layout";

const RatesPage = () => {
    return (
      <section className="p-4 lg:p-6 bg-gray-50 flex justify-center">
      <div className="w-full max-w-md space-y-6 bg-white p-4 lg:p-6 rounded-lg shadow-md">
        <h1 className="text-lg lg:text-2xl font-bold text-gray-800 border-b pb-4">
          Rate & Fees Management
        </h1>

        <div>
          <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">
            Margin on Currency Exchange (%)
          </label>
          <input
            type="number"
            placeholder="Enter percentage"
            className="text-sm lg:text-base  block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">
            Margin on Gold Transactions (%)
          </label>
          <input
            type="number"
            placeholder="Enter percentage"
            className="text-sm lg:text-base block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">
            Transaction Fees
          </label>
          <input
            type="number"
            placeholder="Enter fee amount"
            className="text-sm lg:text-base block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button className="text-sm lg:text-base w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          Save
        </button>
      </div>
    </section>
    );
  };
  export default RatesPage;  