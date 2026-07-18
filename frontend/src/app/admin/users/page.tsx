"use client";

import { useState } from "react";
import { Search, Filter, MoreVertical, Edit2, Ban, Trash2 } from "lucide-react";

export default function UserManagementPage() {
  const [activeTab, setActiveTab] = useState("all");

  // Mock database of users
  const mockUsers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Homeowner", status: "Active", joined: "Oct 12, 2023", img: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
    { id: 2, name: "Marcus Smith", email: "marcus.s@example.com", role: "Professional", status: "Active", joined: "Oct 15, 2023", img: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    { id: 3, name: "Emily Davis", email: "emily.d@example.com", role: "Homeowner", status: "Suspended", joined: "Nov 02, 2023", img: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
    { id: 4, name: "John Doe", email: "john.d@example.com", role: "Professional", status: "Pending", joined: "Nov 10, 2023", img: "https://i.pravatar.cc/150?u=john" },
    { id: 5, name: "Sarah Connor", email: "s.connor@example.com", role: "Homeowner", status: "Active", joined: "Nov 28, 2023", img: "https://i.pravatar.cc/150?u=sarah" },
  ];

  const filteredUsers = mockUsers.filter(user => {
    if (activeTab === "all") return true;
    if (activeTab === "homeowners") return user.role === "Homeowner";
    if (activeTab === "professionals") return user.role === "Professional";
    if (activeTab === "suspended") return user.status === "Suspended";
    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">User Management</h1>
          <p className="text-slate-500">Manage all registered homeowners and professionals.</p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          + Add User Manually
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg w-full sm:w-auto overflow-x-auto">
          {["all", "homeowners", "professionals", "suspended"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium capitalize whitespace-nowrap transition-colors ${
                activeTab === tab 
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm" 
                  : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-900 dark:text-white outline-none focus:border-primary-500 transition-colors"
            />
          </div>
          <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shrink-0">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-slate-500 font-medium">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Joined Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700" />
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">{user.name}</p>
                        <p className="text-slate-500 text-xs">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      user.role === 'Professional' 
                        ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400' 
                        : 'bg-slate-100 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        user.status === 'Active' ? 'bg-green-500' : 
                        user.status === 'Suspended' ? 'bg-red-500' : 'bg-orange-500'
                      }`}></div>
                      <span className="text-slate-700 dark:text-slate-300">{user.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {user.joined}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-primary-600 transition-colors" title="Edit">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-orange-600 transition-colors" title="Suspend">
                        <Ban className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-600 transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredUsers.length === 0 && (
            <div className="p-12 text-center text-slate-500">
              No users found matching your filters.
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm text-slate-500">
          <span>Showing {filteredUsers.length} of {mockUsers.length} users</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
