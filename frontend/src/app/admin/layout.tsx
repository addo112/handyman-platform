import Link from "next/link";
import { LayoutDashboard, Users, ShieldCheck, Calendar, Settings, LogOut } from "lucide-react";
import { CurrencyDropdown } from "@/components/CurrencyDropdown";
import { NotificationDropdown } from "@/components/NotificationDropdown";
import { ProfileDropdown } from "@/components/ProfileDropdown";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col hidden md:flex fixed h-full z-10 text-slate-300">
        <div className="p-6 border-b border-slate-800">
          <Link href="/" className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-bold">
              HP
            </div>
            <span className="font-bold text-lg tracking-tight">ProConnect Admin</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 text-white font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5 text-red-500" /> Overview
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 font-medium transition-colors">
            <Users className="w-5 h-5 text-slate-400" /> Users
          </Link>
          <Link href="/admin/professionals" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 font-medium transition-colors">
            <ShieldCheck className="w-5 h-5 text-slate-400" /> KYC Verification
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 font-medium transition-colors">
            <Calendar className="w-5 h-5 text-slate-400" /> Bookings
          </Link>
        </nav>
        
        <div className="p-4 border-t border-slate-800 space-y-1">
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 font-medium transition-colors">
            <Settings className="w-5 h-5 text-slate-400" /> Platform Settings
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-900/30 text-red-400 font-medium transition-colors">
            <LogOut className="w-5 h-5" /> Exit Admin
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="md:hidden flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold">HP</div>
            <span className="font-bold text-lg dark:text-white">Admin</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Admin Console</h1>
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
