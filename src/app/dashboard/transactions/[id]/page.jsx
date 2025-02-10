"use client";

import { useParams } from "next/navigation";
import React from "react";

const OrderDetailsPage = () => {
  const params = useParams();
  const id = params?.id;

  const orderDetails = {
    orderId: "#12345",
    date: "2024-01-01",
    status: "Completed",
    senderAmount: "CA$1,000.00",
    personalDetails: {
      fullName: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 234-567-8901",
      address: "123 Main Street, Toronto, ON, Canada",
      deliveryMethod: "Bank Deposit",
    },
    exchangeAmount: "CA$1,000.00",
    deliveryFee: "$0",
    totalAmount: "CA$1,000.00",
    receiveAmount: "$697.79",
    exchangeRate: "1 CAD = 0.6978 USD",
  };

  return (
    <section className="p-4 lg:p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-4 lg:p-8">
        <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">
          Order Details
        </h1>

        {/* Order Summary */}
        <div className="mb-6">
          <h2 className="text-base lg:text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Order Summary
          </h2>
          <div className="space-y-3 text-xs lg:text-sm text-gray-700">
            <p>
              <span className="font-medium">Order ID:</span> {orderDetails.orderId}
            </p>
            <p>
              <span className="font-medium">Date:</span> {orderDetails.date}
            </p>
            <p>
              <span className="font-medium">Status:</span>{" "}
              <span
                className={`px-3 py-1 rounded-full text-xs lg:text-sm font-medium ${
                  orderDetails.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {orderDetails.status}
              </span>
            </p>
          </div>
        </div>

        {/* Personal Details */}
        <div className="mb-6">
          <h2 className="text-base lg:text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Personal Details
          </h2>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              <span className="font-medium">Full Name:</span>{" "}
              {orderDetails.personalDetails.fullName}
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              {orderDetails.personalDetails.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span>{" "}
              {orderDetails.personalDetails.phone}
            </p>
            <p>
              <span className="font-medium">Address:</span>{" "}
              {orderDetails.personalDetails.address}
            </p>
            <p>
              <span className="font-medium">Delivery Method:</span>{" "}
              {orderDetails.personalDetails.deliveryMethod}
            </p>
          </div>
        </div>

        {/* Payment Details */}
        <div>
          <h2 className="text-base lg:text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Payment Details
          </h2>
          <div className="space-y-3 text-xs lg:text-sm text-gray-700">
            <p>
              <span className="font-medium">You Send:</span>{" "}
              {orderDetails.senderAmount}
            </p>
            <p>
              <span className="font-medium">Exchange Amount:</span>{" "}
              {orderDetails.exchangeAmount}
            </p>
            <p>
              <span className="font-medium">Delivery Fee:</span>{" "}
              {orderDetails.deliveryFee}
            </p>
            <p>
              <span className="font-medium">Total Amount:</span>{" "}
              {orderDetails.totalAmount}
            </p>
            <p>
              <span className="font-medium">You Receive:</span>{" "}
              {orderDetails.receiveAmount}
            </p>
            <p>
              <span className="font-medium">Exchange Rate:</span>{" "}
              {orderDetails.exchangeRate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetailsPage;