import { Search, MessageSquare } from "lucide-react";
import Link from "next/link";
import { MOCK_PROFESSIONALS } from "@/lib/data/mock";

export default function MessagesPage() {
  const pro = MOCK_PROFESSIONALS[0];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-[calc(100vh-8rem)] flex flex-col">
      <div className="mb-6 flex-shrink-0">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Messages</h2>
        <p className="text-slate-500 mt-1">Communicate with your hired professionals.</p>
      </div>

      <div className="flex-1 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm flex min-h-0">
        
        {/* Sidebar / Inbox list */}
        <div className="w-80 border-r border-slate-200 dark:border-slate-700 flex flex-col hidden md:flex">
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2">
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-left transition-colors">
              <div className="relative">
                <img src={pro.avatarUrl} alt={pro.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate">{pro.name}</h4>
                  <span className="text-xs text-primary-600 font-medium">Just now</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 truncate">I'll be there tomorrow at 10 AM.</p>
              </div>
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="h-16 border-b border-slate-200 dark:border-slate-700 px-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <img src={pro.avatarUrl} alt={pro.name} className="w-10 h-10 rounded-full object-cover md:hidden" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">{pro.name}</h3>
                <p className="text-xs text-green-600 font-medium">Online</p>
              </div>
            </div>
            <Link href={`/book/${pro.id}`}>
              <button className="text-sm font-medium text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-4 py-2 rounded-lg transition-colors">
                View Profile
              </button>
            </Link>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50 dark:bg-slate-900/50 space-y-6">
            <div className="text-center">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Today</span>
            </div>
            
            <div className="flex gap-4">
              <img src={pro.avatarUrl} alt={pro.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[80%]">
                <p className="text-sm">Hi John, thanks for booking me! I've reviewed your request for the sink repair.</p>
                <span className="text-[10px] text-slate-400 mt-1 block">9:41 AM</span>
              </div>
            </div>

            <div className="flex gap-4 flex-row-reverse">
              <div className="bg-primary-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[80%]">
                <p className="text-sm">Hi Mike, great! Do I need to buy any replacement parts beforehand?</p>
                <span className="text-[10px] text-primary-200 mt-1 block text-right">9:45 AM</span>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={pro.avatarUrl} alt={pro.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[80%]">
                <p className="text-sm">No need. I carry all the standard PVC pipes and seals in my truck. I'll be there tomorrow at 10 AM.</p>
                <span className="text-[10px] text-slate-400 mt-1 block">Just now</span>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shrink-0">
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-primary-500 transition-all">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-transparent border-none outline-none px-3 text-sm"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white p-2.5 rounded-lg transition-colors">
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
