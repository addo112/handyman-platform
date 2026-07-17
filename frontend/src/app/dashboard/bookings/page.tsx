import { Calendar, Clock, MapPin, CheckCircle, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { MOCK_PROFESSIONALS } from "@/lib/data/mock";

export default function BookingsPage() {
  // Use the first pro as a mocked upcoming booking
  const pro = MOCK_PROFESSIONALS[0];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">My Bookings</h2>
          <p className="text-slate-500 mt-1">Manage your upcoming and past service appointments.</p>
        </div>
        <Link 
          href="/ai-chat" 
          className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm shadow-primary-500/20"
        >
          Book New Service
        </Link>
      </div>

      <div className="flex gap-4 border-b border-slate-200 dark:border-slate-700 mb-6">
        <button className="pb-3 px-2 border-b-2 border-primary-600 text-primary-600 dark:text-primary-400 font-medium">
          Upcoming (1)
        </button>
        <button className="pb-3 px-2 border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 font-medium transition-colors">
          Past
        </button>
        <button className="pb-3 px-2 border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 font-medium transition-colors">
          Cancelled
        </button>
      </div>

      <div className="space-y-4">
        {/* Mock Upcoming Booking */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary-500"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex gap-4 items-start md:items-center">
              <img src={pro.avatarUrl} alt={pro.name} className="w-16 h-16 rounded-xl object-cover" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">{pro.name}</h3>
                  <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Confirmed
                  </span>
                </div>
                <p className="text-slate-500 text-sm mb-2">{pro.category}</p>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-slate-400" /> Tomorrow, Oct 24</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400" /> 10:00 AM - 12:30 PM</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 md:border-l border-slate-100 dark:border-slate-700 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0">
              <button className="flex-1 md:flex-none px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                Reschedule
              </button>
              <button className="flex-1 md:flex-none px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm font-medium text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                Message
              </button>
              <button className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors hidden md:block">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Empty State for comparison if we wanted it
        <div className="text-center py-16 px-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
            <Calendar className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No upcoming bookings</h3>
          <p className="text-slate-500 mb-6 max-w-sm mx-auto">You don't have any service appointments scheduled. Need help with a project?</p>
          <Link href="/ai-chat" className="inline-flex bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            Find a Professional
          </Link>
        </div>
        */}
      </div>
    </div>
  );
}
