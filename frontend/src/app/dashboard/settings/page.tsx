import { Bell, Shield, CreditCard, Moon, Globe, HelpCircle } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h2>
        <p className="text-slate-500 mt-1">Manage your account preferences and app settings.</p>
      </div>

      <div className="space-y-6">
        
        {/* Notifications Section */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
              <Bell className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">Notifications</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-1">Push Notifications</h4>
                <p className="text-sm text-slate-500">Receive alerts on your device for messages and booking updates.</p>
              </div>
              <div className="relative inline-block w-12 h-6 rounded-full bg-primary-600">
                <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform translate-x-6"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-1">Email Notifications</h4>
                <p className="text-sm text-slate-500">Receive promotional offers and newsletter updates.</p>
              </div>
              <div className="relative inline-block w-12 h-6 rounded-full bg-slate-200 dark:bg-slate-700">
                <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
            <div className="p-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">Security</h3>
          </div>
          
          <div className="space-y-4">
            <button className="w-full text-left flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Change Password</h4>
                <p className="text-sm text-slate-500">Update your account password</p>
              </div>
              <span className="text-slate-400">→</span>
            </button>
            <button className="w-full text-left flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Two-Factor Authentication</h4>
                <p className="text-sm text-slate-500">Add an extra layer of security</p>
              </div>
              <span className="text-slate-400">→</span>
            </button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
            <div className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">Payment Methods</h3>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-slate-100 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-xs text-blue-800">
                VISA
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white">•••• •••• •••• 4242</p>
                <p className="text-xs text-slate-500">Expires 12/28</p>
              </div>
            </div>
            <button className="text-sm text-slate-500 hover:text-red-500 font-medium transition-colors">
              Remove
            </button>
          </div>
          <button className="w-full py-3 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 font-medium transition-colors">
            + Add New Payment Method
          </button>
        </div>

      </div>
    </div>
  );
}
