import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100 via-transparent to-transparent dark:from-primary-900/20 dark:via-transparent dark:to-transparent"></div>
      
      <div className="max-w-md w-full relative z-10 glass-card p-8 shadow-2xl shadow-primary-500/10">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to home
        </Link>
        
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto rounded-xl premium-gradient flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-primary-500/30">
            HP
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
          <p className="text-slate-500 mt-2">Sign in to your Handyman ProConnect account</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
              <Link href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">Forgot password?</Link>
            </div>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>
          
          <button type="button" className="w-full premium-gradient text-white font-medium py-3 rounded-xl hover:opacity-90 shadow-md shadow-primary-500/20 transition-all flex justify-center items-center gap-2">
            Sign In <ShieldCheck className="w-5 h-5" />
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-slate-500">
          Don't have an account? <Link href="/register" className="font-semibold text-primary-600 hover:text-primary-500">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
