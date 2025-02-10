'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const path = usePathname();
    return (
      <div className="min-h-screen flex flex-col mt-[150px]">
        {/* <header className="bg-gray2 text-black p-4 mt-[150px] text-center">Admin Dashboard</header> */}
        <div className="flex flex-1">
          <aside className="bg-blue1 text-white w-28 lg:w-64 pt-10 ">
            <nav>
              <ul className="flex flex-col text-[13px] lg:text-base">
                <li><Link href="/dashboard/rates" className={`block px-2 lg:px-4 py-4 hover:bg-gray-700 ${path === "/dashboard/rates" ? "bg-gray-700" : ""}`}>Rate & Fees Management</Link></li>
                <li><a href="/dashboard/transactions" className={`block px-2 lg:px-4 py-4 hover:bg-gray-700 ${path === "/dashboard/transactions" || path === "/dashboard/transactions/1" ? "bg-gray-700" : ""}`}>Transaction Management</a></li>
                <li><a href="/dashboard/banners" className={`block px-2 lg:px-4 py-4 hover:bg-gray-700 ${path === "/dashboard/banners" ? "bg-gray-700" : ""}`}>Banner Management</a></li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-0 lg:p-6 bg-gray-50">{children}</main>
        </div>
      </div>
    );
  };

  export default Layout;