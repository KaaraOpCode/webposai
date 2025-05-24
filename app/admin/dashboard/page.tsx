'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LogOut, 
  User, 
  BarChart, 
  Settings, 
  TrendingUp, 
  Package, 
  Users, 
  DollarSign,
  ShoppingCart,
  AlertTriangle,
  Eye,
  Bell
} from 'lucide-react';

const roles = ['Admin', 'Cashier', 'AI Assistant'] as const;

// Modular Components
const NavButton = ({ icon: Icon, label, variant = 'default', onClick }: {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  label: string;
  variant?: 'default' | 'danger';
  onClick?: () => void;
}) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
      variant === 'danger' 
        ? 'text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20' 
        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
    }`}
  >
    <Icon size={18} />
    <span className="hidden sm:inline">{label}</span>
  </button>
);
const RoleButton = ({ role, isActive, onClick }: {
  role: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
      isActive
        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white hover:shadow-md hover:transform hover:scale-105'
    }`}
  >
    {role}
  </button>
);

const StatCard = ({ title, value, change, icon: Icon, trend = 'up' }: {
  title: string;
  value: string;
  change: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  trend?: 'up' | 'down';
}) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
        <p className={`text-sm mt-1 flex items-center gap-1 ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          <TrendingUp size={14} className={trend === 'down' ? 'rotate-180' : ''} />
          {change}
        </p>
      </div>
      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
        <Icon size={24} className="text-blue-600 dark:text-blue-400" />
      </div>
    </div>
  </div>
);
const OverviewCard = ({ role }: { role: string }) => {
  const getContent = () => {
    switch (role) {
      case 'Admin':
        return {
          title: 'Admin Control Center',
          items: [
            { icon: '🔧', text: 'Configure AI integrations and system settings' },
            { icon: '📦', text: 'Manage inventory, pricing, and product catalog' },
            { icon: '👥', text: 'Control staff permissions and user roles' },
            { icon: '📊', text: 'Access comprehensive analytics and reports' },
            { icon: '🔒', text: 'Monitor security and system performance' }
          ]
        };
      case 'Cashier':
        return {
          title: 'Cashier Workspace',
          items: [
            { icon: '🧾', text: 'Process transactions with AI assistance' },
            { icon: '📷', text: 'Use visual product recognition technology' },
            { icon: '🧠', text: 'View AI-generated sales suggestions' },
            { icon: '💳', text: 'Handle multiple payment methods seamlessly' },
            { icon: '📱', text: 'Access mobile-friendly POS interface' }
          ]
        };
      case 'AI Assistant':
        return {
          title: 'AI Intelligence Hub',
          items: [
            { icon: '📊', text: 'Predict inventory needs with machine learning' },
            { icon: '🎯', text: 'Recommend targeted promotions and offers' },
            { icon: '🛡️', text: 'Monitor fraud detection and anomalies' },
            { icon: '📈', text: 'Generate sales forecasts and trends' },
            { icon: '🔍', text: 'Provide customer behavior insights' }
          ]
        };
      default:
        return { title: '', items: [] };
    }
  };

  const content = getContent();

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
          <Eye className="text-blue-600 dark:text-blue-400" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{content.title}</h2>
      </div>
      
      <div className="grid gap-4">
        {content.items.map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChartPlaceholder = ({ title, height = 'h-40' }: { title: string; height?: string }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>
    <div className={`${height} bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center`}>
      <div className="text-center">
        <BarChart size={32} className="text-blue-400 mx-auto mb-2" />
        <p className="text-sm text-gray-500 dark:text-gray-400">Chart visualization</p>
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  const [activeRole, setActiveRole] = useState<typeof roles[number]>('Admin');
  const router = useRouter();

  const handleSignOut = () => {
    // Add any logout logic here (clear tokens, session, etc.)
    // For now, we'll just redirect to home page
    router.push('/');
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Enhanced Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <button 
              onClick={handleLogoClick}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AIWebPOS
              </h1>

            </button>
            
            <div className="flex items-center gap-2">
              <NavButton icon={Bell} label="Notifications" />
              <NavButton icon={User} label="Profile" />
              <NavButton icon={BarChart} label="Analytics" />
              <NavButton icon={Settings} label="Settings" />
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2" />

              <NavButton 
                icon={LogOut} 
                label="Sign Out" 
                variant="danger" 
                onClick={handleSignOut}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Dashboard
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Welcome back! Heres whats happening with your store today.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <RoleButton
                key={role}
                role={role}
                isActive={activeRole === role}
                onClick={() => setActiveRole(role)}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Today's Sales"
            value="$12,426"
            change="+12.5%"
            icon={DollarSign}
            trend="up"
          />
          <StatCard
            title="Total Orders"
            value="156"
            change="+8.2%"
            icon={ShoppingCart}
            trend="up"
          />
          <StatCard
            title="Active Products"
            value="1,247"
            change="-2.1%"
            icon={Package}
            trend="down"
          />
          <StatCard
            title="Customers"
            value="89"
            change="+15.3%"
            icon={Users}
            trend="up"
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Role Overview - Takes full width on mobile, 2 columns on xl */}
          <div className="xl:col-span-2">
            <OverviewCard role={activeRole} />
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <Package className="text-blue-600" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">Add New Product</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <Users className="text-green-600" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">Manage Staff</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="text-orange-600" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">View Alerts</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          <ChartPlaceholder title="Sales Forecast" />
          <ChartPlaceholder title="Inventory Status" />
          <ChartPlaceholder title="Customer Insights" />
        </div>
      </div>
    </div>
  );
}
