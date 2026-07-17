import { User, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">My Profile</h2>
        <p className="text-slate-500 mt-1">Manage your personal information and preferences.</p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
        {/* Header Cover */}
        <div className="h-32 premium-gradient w-full relative"></div>
        
        {/* Avatar & Basic Info */}
        <div className="px-8 pb-8 relative">
          <div className="flex flex-col sm:flex-row gap-6 sm:items-end -mt-16 mb-8">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-800 bg-slate-200 overflow-hidden shrink-0 shadow-md">
              <img src="https://i.pravatar.cc/150?u=john" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 pb-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">John Doe</h3>
              <p className="text-slate-500 font-medium">Homeowner</p>
            </div>
            <div className="pb-2">
              <button className="px-6 py-2 border border-slate-200 dark:border-slate-700 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="font-bold text-lg border-b border-slate-100 dark:border-slate-700 pb-2">Personal Details</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Full Name</p>
                    <p className="text-slate-900 dark:text-white font-medium">John Doe</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Email Address</p>
                    <p className="text-slate-900 dark:text-white font-medium">john.doe@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Phone Number</p>
                    <p className="text-slate-900 dark:text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Default Address</p>
                    <p className="text-slate-900 dark:text-white font-medium">123 Main St, Apartment 4B<br/>New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-lg border-b border-slate-100 dark:border-slate-700 pb-2">Account Status</h4>
              
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-4 flex gap-3">
                <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-500 shrink-0" />
                <div>
                  <h5 className="font-bold text-green-800 dark:text-green-400">Verified Homeowner</h5>
                  <p className="text-sm text-green-700 dark:text-green-500/80 mt-1">Your email and phone number have been successfully verified.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
