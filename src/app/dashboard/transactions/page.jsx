import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";

const TransactionsPage = () => {
  const transactions = [
    { id: 1, name: "#12345", date: "2024-01-01", status: "Completed",  },
    { id: 2, name: "#12345", date: "2024-01-02", status: "Pending", },
    { id: 3, name: "#12345", date: "2024-01-02", status: "Completed", },
    { id: 4, name: "#12345", date: "2024-01-02", status: "Pending"},
  ];

  return (
    // <Layout>
    <section className="p-4 lg:p-6 bg-gray-50 min-h-screen w-screen lg:w-full overflow-x-scroll">
    <h1 className="text-lg lg:text-2xl font-semibold mb-6 text-gray-800">
      Transaction Management
    </h1>
    <div className="overflow-x-auto">
      <table className="table border-gray-200 bg-white shadow-md min-w-[900px]">
        {/* Table Header */}
        <thead className="bg-blue1">
          <tr className="text-xs lg:text-sm text-white uppercase ">
            <th className="py-3 px-4 text-left">#</th>
            <th className="py-3 px-4 text-left">Order</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Action</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={transaction?.id}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="py-4 px-4">{index + 1}</td>
              <td className="py-4 px-4">{transaction.name}</td>
              <td className="py-4 px-4">{transaction.date}</td>
              <td className="py-4 px-4">
                <span
                  className={`px-4 py-1 rounded-full text-xs lg:text-sm font-medium ${
                    transaction.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : transaction.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
              <td className="py-4 px-4">
                <Link
                  href={`/dashboard/transactions/${transaction.id}`}
                  className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                >
                  <IoEyeSharp />
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
  );
};
export default TransactionsPage;
