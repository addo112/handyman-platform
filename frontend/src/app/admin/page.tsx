"use client";

import { useCurrency } from "@/components/CurrencyProvider";
import { Users, TrendingUp, ShieldAlert, CalendarCheck, ArrowUpRight, Activity } from "lucide-react";

export default function AdminOverview() {
  const { formatPrice } = useCurrency();

  const stats = [
    {
      label: "Total Revenue",
      value: formatPrice(124500),
      trend: "+14.5%",
      isPositive: true,
      icon: TrendingUp,
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-900/30"
    },
    {
      label: "Active Users",
      value: "4,209",
      trend: "+5.2%",
      isPositive: true,
      icon: Users,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      label: "Pending KYC",
      value: "28",
      trend: "-2.1%",
      isPositive: false,
      icon: ShieldAlert,
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-100 dark:bg-orange-900/30"
    },
    {
      label: "Total Bookings",
      value: "1,842",
      trend: "+12.4%",
      isPositive: true,
      icon: CalendarCheck,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-100 dark:bg-purple-900/30"
    }
  ];

  const recentActivity = [
    { id: 1, action: "New Professional KYC submitted", user: "Michael T.", time: "10 mins ago", type: "kyc" },
    { id: 2, action: "Large booking completed ($450)", user: "Sarah J.", time: "1 hour ago", type: "booking" },
    { id: 3, action: "User account flagged for dispute", user: "John D.", time: "2 hours ago", type: "dispute" },
    { id: 4, action: "Payout processed successfully", user: "David K.", time: "3 hours ago", type: "payout" },
    { id: 5, action: "New homeowner registration", user: "Emily R.", time: "5 hours ago", type: "user" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h1>
        <p className="text-slate-500">Platform metrics and recent activity across the network.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-lg ${stat.isPositive ? 'text-green-700 bg-green-50 dark:text-green-400 dark:bg-green-900/20' : 'text-slate-600 bg-slate-50 dark:text-slate-400 dark:bg-slate-800'}`}>
                <ArrowUpRight className={`w-4 h-4 ${!stat.isPositive && 'rotate-90'}`} /> {stat.trend}
              </div>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Placeholder Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-96">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 dark:text-white">Revenue Growth</h3>
            <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 outline-none">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="flex-1 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
            <div className="text-center">
              <Activity className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-500 font-medium">Chart Visualization Placeholder</p>
              <p className="text-sm text-slate-400 mt-1">Connect a charting library like Recharts here.</p>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm h-96 overflow-hidden flex flex-col">
          <h3 className="font-bold text-slate-900 dark:text-white mb-6">Recent Activity</h3>
          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex gap-4">
                <div className="relative mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary-500 ring-4 ring-primary-50 dark:ring-primary-900/20"></div>
                  {activity.id !== recentActivity.length && (
                    <div className="absolute top-4 left-1.5 w-px h-10 bg-slate-200 dark:bg-slate-700 -ml-[0.5px]"></div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white leading-tight">{activity.action}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">{activity.user}</span>
                    <span className="text-xs text-slate-400">• {activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
