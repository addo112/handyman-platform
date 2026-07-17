import Link from "next/link";
import { Home, Search, Calendar, MessageSquare, User, Settings, LogOut } from "lucide-react";
import { CurrencyDropdown } from "@/components/CurrencyDropdown";
import { NotificationDropdown } from "@/components/NotificationDropdown";
import { ProfileDropdown } from "@/components/ProfileDropdown";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col hidden md:flex fixed h-full z-10">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg premium-gradient flex items-center justify-center text-white font-bold">
              HP
            </div>
            <span className="font-bold text-lg tracking-tight">ProConnect</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/dashboard/homeowner" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium">
            <Home className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/ai-chat" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors">
            <Search className="w-5 h-5" /> Find Pros
          </Link>
          <Link href="/dashboard/bookings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors">
            <Calendar className="w-5 h-5" /> My Bookings
          </Link>
          <Link href="/dashboard/messages" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors">
            <MessageSquare className="w-5 h-5" /> Messages
          </Link>
          <Link href="/dashboard/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors">
            <User className="w-5 h-5" /> Profile
          </Link>
        </nav>
        
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 space-y-1">
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium transition-colors">
            <LogOut className="w-5 h-5" /> Sign out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="md:hidden flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg premium-gradient flex items-center justify-center text-white font-bold">HP</div>
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold">Welcome back, John!</h1>
          </div>
          <div className="flex items-center gap-4">
            <CurrencyDropdown />
            <NotificationDropdown />
            <ProfileDropdown />
          </div>
        </header>
        
        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
