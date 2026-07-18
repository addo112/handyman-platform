"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Settings, LogOut, LayoutDashboard, ShieldCheck } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface ProfileDropdownProps {
  user?: {
    fullName: string;
    email: string;
    role: string;
  };
}

export function ProfileDropdown({ user }: ProfileDropdownProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-10 h-10 rounded-full border-2 overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${isOpen ? 'border-primary-500 shadow-md shadow-primary-500/20' : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'}`}
      >
        <img src="https://i.pravatar.cc/150?u=john" alt="Profile" className="w-full h-full object-cover" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
          <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
            <p className="font-bold text-slate-900 dark:text-white">{user?.fullName || "Guest User"}</p>
            <p className="text-xs text-slate-500 truncate">{user?.email || ""}</p>
          </div>
          
          <div className="p-2 space-y-1">
            <Link 
              href={`/dashboard/${user?.role || "homeowner"}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-slate-400" /> Dashboard
            </Link>
            <Link 
              href="/dashboard/profile" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <User className="w-4 h-4 text-slate-400" /> My Profile
            </Link>
            <Link 
              href="/dashboard/settings" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Settings className="w-4 h-4 text-slate-400" /> Settings
            </Link>
          </div>
          
          <div className="p-2 border-t border-slate-200 dark:border-slate-700 space-y-1">
            {(user?.role === "admin" || true) && ( // Keeping it true for now so you can still access admin dashboard to test it
              <Link 
                href="/admin" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 w-full"
              >
                <ShieldCheck className="w-4 h-4 text-primary-500" /> Admin Dashboard
              </Link>
            )}
            <button 
              onClick={handleSignOut}
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors w-full"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
