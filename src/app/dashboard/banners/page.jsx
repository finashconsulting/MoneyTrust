"use client";
import { useState } from "react";

const BannersPage = () => {
  const [bannerText, setBannerText] = useState("");
  const [enableDate, setEnableDate] = useState("");
  const [disableDate, setDisableDate] = useState("");

  const handleSave = () => {
    if (!bannerText || !enableDate || !disableDate) {
      alert("Please fill out all fields.");
      return;
    }

    if (new Date(enableDate) > new Date(disableDate)) {
      alert("Enable date cannot be later than the disable date.");
      return;
    }

    // Replace with actual API call
    const bannerData = {
      bannerText,
      enableDate,
      disableDate,
    };
    console.log("Banner Data Saved:", bannerData);
    alert("Banner settings saved successfully!");
  };

  return (
    <div className=" flex items-center justify-center p-4 lg:p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 lg:p-6 space-y-6">
        {/* <h1 className="text-2xl font-semibold text-gray-800">Banner Management</h1> */}
        <div>
          <label className="block  text-lg lg:text-2xl font-bold text-gray-800 border-b pb-4 mb-8">
            Banner Management
          </label>
          <input
            type="text"
            value={bannerText}
            onChange={(e) => setBannerText(e.target.value)}
            placeholder="Enter banner text"
            className="text-sm lg:text-base mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs lg:text-sm font-medium text-gray-600">
            Enable Banner From
          </label>
          <input
            type="date"
            value={enableDate}
            onChange={(e) => setEnableDate(e.target.value)}
            className="text-sm lg:text-base mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs lg:text-sm font-medium text-gray-600">
            Disable Banner To
          </label>
          <input
            type="date"
            value={disableDate}
            onChange={(e) => setDisableDate(e.target.value)}
            className="text-sm lg:text-base mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          onClick={handleSave}
          className="text-sm lg:text-base w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default BannersPage;
