'use client';

import Link from "next/link";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Create Your WebPOSAI Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-500 dark:text-gray-400">
          Already have an account? <Link href="/login" className="text-indigo-600 dark:text-indigo-400 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
