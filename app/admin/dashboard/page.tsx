'use client';

import { useState } from 'react';
import { LogOut, User, BarChart, Settings } from 'lucide-react';

const roles = ['Admin', 'Cashier', 'AI Assistant'] as const;

export default function Dashboard() {
  const [activeRole, setActiveRole] = useState<typeof roles[number]>('Admin');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Top Nav */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-bold tracking-tight">AIWebPOS</h1>
        <div className="flex space-x-4 items-center">
          <button className="flex items-center gap-2 hover:text-blue-600">
            <User size={18} />
            Profile
          </button>
          <button className="flex items-center gap-2 hover:text-blue-600">
            <BarChart size={18} />
            Analytics
          </button>
          <button className="flex items-center gap-2 hover:text-blue-600">
            <Settings size={18} />
            Actions
          </button>
          <button className="flex items-center gap-2 text-red-500 hover:text-red-700">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </nav>

      {/* Role Toggle + Main Dashboard */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <div className="flex space-x-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  activeRole === role
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-blue-500 hover:text-white'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <section className="col-span-1 md:col-span-2 xl:col-span-3 bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{activeRole} Overview</h2>

            {activeRole === 'Admin' && (
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li>🔧 Configure AI integrations</li>
                <li>📦 Manage inventory and pricing</li>
                <li>👥 Control staff permissions</li>
              </ul>
            )}

            {activeRole === 'Cashier' && (
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li>🧾 Process transactions</li>
                <li>📷 Use visual product recognition</li>
                <li>🧠 View AI-generated suggestions</li>
              </ul>
            )}

            {activeRole === 'AI Assistant' && (
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li>📊 Predict inventory needs</li>
                <li>🎯 Recommend promotions</li>
                <li>🛡️ Monitor fraud/anomalies</li>
              </ul>
            )}
          </section>

          {/* Stats placeholders */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">Sales Forecast</h3>
            <div className="h-32 bg-grid-pattern rounded-lg"></div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">Inventory Status</h3>
            <div className="h-32 bg-grid-pattern rounded-lg"></div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">Customer Insights</h3>
            <div className="h-32 bg-grid-pattern rounded-lg"></div>
          </div>
        </main>
      </div>
    </div>
  );
}

