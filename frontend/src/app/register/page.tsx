"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, User, Briefcase, Zap, Loader2 } from "lucide-react";
import { useCurrency } from "@/components/CurrencyProvider";
import { createClient } from "@/lib/supabase/client";

export default function Register() {
  const router = useRouter();
  const [role, setRole] = useState<"homeowner" | "professional">("homeowner");
  const { currency } = useCurrency();
  
  // Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");

    const supabase = createClient();
    
    // We pass the full name and role into the user_metadata so our SQL trigger can pick it up
    const { data, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: `${firstName} ${lastName}`,
          role: role,
        }
      }
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    // Since we don't have email confirmation required right now, just redirect to dashboard
    if (role === "homeowner") {
      router.push("/dashboard/homeowner");
    } else {
      router.push("/dashboard/professional");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-100 via-transparent to-transparent dark:from-primary-900/20 dark:via-transparent dark:to-transparent"></div>
      
      <div className="max-w-2xl w-full relative z-10 glass-card p-8 shadow-2xl shadow-primary-500/10">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to home
        </Link>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Create your account</h2>
          <p className="text-slate-500 mt-2">Join Handyman ProConnect and experience AI-powered service matching.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div 
            onClick={() => setRole("homeowner")}
            className={`relative rounded-2xl border-2 p-6 cursor-pointer hover:shadow-lg transition-all ${
              role === "homeowner" 
                ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20" 
                : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary-300"
            }`}
          >
            <div className={`absolute top-4 right-4 w-4 h-4 rounded-full ${role === "homeowner" ? "bg-primary-500 ring-4 ring-primary-100" : "border-2 border-slate-300"}`}></div>
            <User className={`w-8 h-8 mb-4 ${role === "homeowner" ? "text-primary-600" : "text-slate-400 group-hover:text-primary-500 transition-colors"}`} />
            <h3 className="font-bold text-lg mb-1">Homeowner</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">I want to hire skilled professionals for my projects.</p>
          </div>
          
          <div 
            onClick={() => setRole("professional")}
            className={`relative rounded-2xl border-2 p-6 cursor-pointer hover:shadow-lg transition-all group ${
              role === "professional" 
                ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20" 
                : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary-300"
            }`}
          >
            <div className={`absolute top-4 right-4 w-4 h-4 rounded-full ${role === "professional" ? "bg-primary-500 ring-4 ring-primary-100" : "border-2 border-slate-300"}`}></div>
            <Briefcase className={`w-8 h-8 mb-4 ${role === "professional" ? "text-primary-600" : "text-slate-400 group-hover:text-primary-500 transition-colors"}`} />
            <h3 className="font-bold text-lg mb-1">Professional</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">I want to find jobs, manage my schedule, and earn money.</p>
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleRegister}>
          {error && (
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium border border-red-200 dark:border-red-800">
              {error}
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
              <input 
                type="text" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
              <input 
                type="text" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                placeholder="Doe"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              placeholder="••••••••"
            />
          </div>

          {role === "professional" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Professional Details</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Primary Service</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all appearance-none text-slate-900 dark:text-white">
                    <option value="">Select category...</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical</option>
                    <option value="carpentry">Carpentry</option>
                    <option value="hvac">HVAC / AC Repair</option>
                    <option value="cleaning">Cleaning</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Hourly Rate ({currency})</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder={currency === "GHS" ? "e.g. 500" : "e.g. 50"}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Years of Experience</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="e.g. 5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">City / Location</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="Accra"
                  />
                </div>
              </div>
            </div>
          )}
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full premium-gradient text-white font-medium py-3 rounded-xl hover:opacity-90 shadow-md shadow-primary-500/20 transition-all flex justify-center items-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Create Account <Zap className="w-4 h-4" /></>}
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-slate-500">
          Already have an account? <Link href="/login" className="font-semibold text-primary-600 hover:text-primary-500">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
