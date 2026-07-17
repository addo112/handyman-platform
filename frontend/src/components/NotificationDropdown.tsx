"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, Check, Clock } from "lucide-react";

export function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const notifications = [
    {
      id: 1,
      title: "New Booking Request",
      description: "You have a new request for Plumbing Repair.",
      time: "5m ago",
      unread: true,
    },
    {
      id: 2,
      title: "Message from Sarah",
      description: "Can you come earlier tomorrow?",
      time: "1h ago",
      unread: true,
    },
    {
      id: 3,
      title: "Payment Received",
      description: "Payment for Job #1024 has cleared.",
      time: "1d ago",
      unread: false,
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative p-2 transition-colors rounded-full ${isOpen ? "bg-slate-100 dark:bg-slate-800 text-primary-600" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"}`}
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-800 animate-pulse"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
          <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50">
            <h3 className="font-bold text-slate-900 dark:text-white">Notifications</h3>
            {unreadCount > 0 && (
              <span className="text-xs bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 px-2 py-1 rounded-full font-medium">
                {unreadCount} new
              </span>
            )}
          </div>
          
          <div className="max-h-[300px] overflow-y-auto">
            {notifications.map((notif) => (
              <div 
                key={notif.id} 
                className={`p-4 border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors ${notif.unread ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}
              >
                <div className="flex gap-3">
                  <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${notif.unread ? 'bg-primary-500' : 'bg-transparent'}`}></div>
                  <div>
                    <p className={`text-sm ${notif.unread ? 'font-bold text-slate-900 dark:text-white' : 'font-medium text-slate-700 dark:text-slate-300'}`}>
                      {notif.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {notif.description}
                    </p>
                    <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {notif.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-center">
            <button className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium flex items-center justify-center gap-1 w-full">
              <Check className="w-4 h-4" /> Mark all as read
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
