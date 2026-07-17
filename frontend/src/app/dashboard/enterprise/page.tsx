import { Building2, Users, Wrench, AlertTriangle, TrendingUp, DollarSign, Calendar, MapPin, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";

export default function EnterpriseDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs mb-4 shadow-sm uppercase tracking-wider">
            B2B Enterprise Portal
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Property Management Overview</h2>
          <p className="text-slate-500">Monitor maintenance across all your institutional properties.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Building2 className="w-4 h-4" /> Add Property
          </button>
          <Link href="/ai-chat">
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-primary-700 transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" /> Bulk Maintenance Request
            </button>
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Total Properties</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">12</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-slate-500">
            Across 3 cities
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-amber-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Active Work Orders</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">24</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-red-600 font-medium">
            <AlertTriangle className="w-4 h-4" /> 3 require urgent attention
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Monthly Spend (YTD)</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">$14.2k</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-green-600 font-medium">
            <TrendingUp className="w-4 h-4" /> 8% below budget
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary-900 to-slate-900 p-6 rounded-2xl shadow-sm text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Users className="w-24 h-24" />
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <p className="text-sm font-medium text-primary-200 mb-1">Dedicated Teams</p>
              <h3 className="text-3xl font-bold">5</h3>
            </div>
            <div className="mt-4">
              <p className="text-xs text-primary-200 mb-2">Enterprise SLA Status: Perfect</p>
              <div className="w-full bg-white/20 rounded-full h-1.5">
                <div className="bg-green-400 h-1.5 rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        
        {/* Properties List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Properties requiring attention</h3>
            <button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline">View All Properties</button>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                  <th className="p-4 font-semibold text-sm text-slate-500">Property</th>
                  <th className="p-4 font-semibold text-sm text-slate-500">Status</th>
                  <th className="p-4 font-semibold text-sm text-slate-500">Active Jobs</th>
                  <th className="p-4 font-semibold text-sm text-slate-500">Est. Cost</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5 text-slate-500" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white text-sm">Tech Hub Complex</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> Accra Central</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-red-100 text-red-700 text-xs font-bold">
                      <AlertTriangle className="w-3 h-3" /> URGENT
                    </span>
                  </td>
                  <td className="p-4 font-medium text-sm">4</td>
                  <td className="p-4 font-medium text-sm">$1,250</td>
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-primary-600"><ChevronRight className="w-5 h-5" /></button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5 text-slate-500" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white text-sm">Osu Retail Park</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> Osu, Accra</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-amber-100 text-amber-700 text-xs font-bold">
                      MAINTENANCE
                    </span>
                  </td>
                  <td className="p-4 font-medium text-sm">2</td>
                  <td className="p-4 font-medium text-sm">$450</td>
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-primary-600"><ChevronRight className="w-5 h-5" /></button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5 text-slate-500" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white text-sm">East Legon Villas</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> East Legon</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-bold">
                      NORMAL
                    </span>
                  </td>
                  <td className="p-4 font-medium text-sm">1</td>
                  <td className="p-4 font-medium text-sm">$80</td>
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-primary-600"><ChevronRight className="w-5 h-5" /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ProConnect Predictive Maintenance */}
        <div className="space-y-6">
          <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-200 dark:bg-primary-800 rounded-full blur-2xl opacity-50"></div>
            
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-primary-900 dark:text-primary-100 relative z-10">
              ✨ ProConnect Predictive Maintenance
            </h3>
            
            <div className="space-y-5 relative z-10">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-primary-100 dark:border-primary-900/50">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg shrink-0">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">HVAC Failure Risk</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Historical data suggests the central AC at Tech Hub Complex is 85% likely to fail next month due to usage patterns.
                    </p>
                  </div>
                </div>
                <button className="w-full mt-2 bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold py-2 rounded-lg transition-colors">
                  Schedule Preventative Maintenance
                </button>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-primary-100 dark:border-primary-900/50">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">Quarterly Inspections</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Fire safety inspections are due for 3 properties in 14 days. 
                    </p>
                  </div>
                </div>
                <button className="w-full mt-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold py-2 rounded-lg transition-colors">
                  Auto-Assign to Vendor
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
