import { DollarSign, Briefcase, Star, TrendingUp, Calendar, MapPin, MessageSquare, CheckCircle } from "lucide-react";

export default function ProfessionalDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Header & Stats Overview */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Overview</h2>
          <p className="text-slate-500">Here's what's happening with your business today.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 border border-green-200">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            Online & Accepting Jobs
          </div>
          <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-slate-50 transition-colors">
            Update Schedule
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6 border-t-4 border-t-primary-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Total Earnings</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">$1,245<span className="text-sm font-normal text-slate-500">.00</span></h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-green-600 font-medium">
            <TrendingUp className="w-4 h-4" /> +12.5% this week
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Active Jobs</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">3</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-slate-500">
            2 scheduled for today
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Average Rating</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                4.9
              </h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-slate-500">
            Based on 128 reviews
          </div>
        </div>

        <div className="glass-card p-6 bg-gradient-to-br from-primary-900 to-slate-900 text-white border-none relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Star className="w-24 h-24" />
          </div>
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-2">Pro Tier Status</h3>
            <p className="text-primary-200 text-sm mb-4">You're in the top 5% of professionals in your area!</p>
            <div className="w-full bg-white/20 rounded-full h-2 mb-2">
              <div className="bg-amber-400 h-2 rounded-full w-[85%]"></div>
            </div>
            <p className="text-xs text-primary-200">15 jobs until Elite Tier</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Job Requests */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">New Job Requests</h3>
            <button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline">View All</button>
          </div>
          
          <div className="space-y-4">
            {/* Request Card 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row gap-5 hover:border-primary-300 transition-colors">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg">Emergency Pipe Leak</h4>
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">URGENT</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> 2.4 km away</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Today, ASAP</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  "Water is leaking under the kitchen sink very fast. Need someone immediately to fix the valve!"
                </p>
                <div className="flex items-center gap-2">
                  <img src="https://i.pravatar.cc/150?u=a1" alt="Client" className="w-8 h-8 rounded-full" />
                  <span className="text-sm font-medium text-slate-900 dark:text-white">Sarah Jenkins</span>
                  <span className="text-xs text-slate-500">• 5.0 Rating</span>
                </div>
              </div>
              <div className="sm:w-48 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-700 pt-4 sm:pt-0 sm:pl-5">
                <div className="mb-4 sm:mb-0">
                  <p className="text-xs text-slate-500 mb-1">AI Estimated Price</p>
                  <p className="font-bold text-xl text-primary-600 dark:text-primary-400">$120 - $150</p>
                </div>
                <div className="space-y-2">
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                    <CheckCircle className="w-4 h-4" /> Accept Job
                  </button>
                  <button className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 text-slate-700 dark:text-slate-300 text-sm font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                    <MessageSquare className="w-4 h-4" /> Message
                  </button>
                </div>
              </div>
            </div>

            {/* Request Card 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row gap-5 hover:border-primary-300 transition-colors">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg">Full House Wiring Inspection</h4>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> 5.1 km away</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Tomorrow, 10:00 AM</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  "Need a certified electrician to inspect the wiring in my newly purchased 3-bedroom house."
                </p>
                <div className="flex items-center gap-2">
                  <img src="https://i.pravatar.cc/150?u=a2" alt="Client" className="w-8 h-8 rounded-full" />
                  <span className="text-sm font-medium text-slate-900 dark:text-white">Michael Chang</span>
                </div>
              </div>
              <div className="sm:w-48 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-700 pt-4 sm:pt-0 sm:pl-5">
                <div className="mb-4 sm:mb-0">
                  <p className="text-xs text-slate-500 mb-1">AI Estimated Price</p>
                  <p className="font-bold text-xl text-primary-600 dark:text-primary-400">$300 - $450</p>
                </div>
                <div className="space-y-2">
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                    <CheckCircle className="w-4 h-4" /> Accept Job
                  </button>
                  <button className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 text-slate-700 dark:text-slate-300 text-sm font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                    <MessageSquare className="w-4 h-4" /> Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights & Sidebar */}
        <div className="space-y-6">
          <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-2xl p-5">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-primary-900 dark:text-primary-100">
              ✨ AI Insights
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="mt-0.5 text-primary-500"><TrendingUp className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white">High Demand Alert</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">AC repair requests are up 40% in your area this week. Consider adjusting your availability.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-0.5 text-amber-500"><Star className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Profile Optimization</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Pros who added a portfolio of recent work saw a 25% increase in bookings. <button className="text-primary-600 font-medium hover:underline">Add photos</button></p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 className="font-bold text-lg mb-4">Today's Schedule</h3>
            
            <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 pl-4 space-y-6">
              <div className="relative">
                <div className="absolute -left-[23px] top-1 w-3 h-3 bg-slate-200 rounded-full border-2 border-white dark:border-slate-800"></div>
                <p className="text-xs font-semibold text-slate-500 mb-1">09:00 AM</p>
                <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg border border-slate-100 dark:border-slate-600">
                  <p className="font-medium text-sm text-slate-900 dark:text-white">AC Maintenance</p>
                  <p className="text-xs text-slate-500 mt-1">123 Oxford Street • Completed</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[23px] top-1 w-3 h-3 bg-primary-500 rounded-full border-2 border-white dark:border-slate-800 ring-4 ring-primary-100 dark:ring-primary-900/30"></div>
                <p className="text-xs font-semibold text-primary-600 mb-1">02:30 PM (Current)</p>
                <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg border border-primary-100 dark:border-primary-800">
                  <p className="font-medium text-sm text-primary-900 dark:text-white">Generator Repair</p>
                  <p className="text-xs text-primary-700 dark:text-primary-300 mt-1">45 Valley Road • In Progress</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[23px] top-1 w-3 h-3 bg-slate-200 rounded-full border-2 border-white dark:border-slate-800"></div>
                <p className="text-xs font-semibold text-slate-500 mb-1">05:00 PM</p>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                  <p className="font-medium text-sm text-slate-900 dark:text-white">Initial Inspection</p>
                  <p className="text-xs text-slate-500 mt-1">78 Osu Avenue • Upcoming</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
