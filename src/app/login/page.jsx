"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();

  return (
    <section className="px-4 lg:px-0 min-h-screen mt-14 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h1>
        <p className="text-center text-gray-500 text-sm">
          Please login to your account
        </p>
        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex justify-between items-center text-sm">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
        <button
          onClick={() => router.push("/dashboard/rates")}
          className="w-full bg-blue1 hover:bg-blue1/95 text-white font-medium py-2 rounded-lg transition duration-200"
        >
          Login
        </button>
        {/* <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p> */}
      </form>
    </section>
  );
};

export default Login;