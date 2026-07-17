import Link from "next/link";
import { ArrowRight, Zap, Target, Users, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg premium-gradient flex items-center justify-center text-white font-bold">
                HP
              </div>
              <span className="font-bold text-xl tracking-tight">Handyman <span className="premium-gradient-text">ProConnect</span></span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/ai-chat" className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 font-medium transition-colors">Services</Link>
              <Link href="/register" className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 font-medium transition-colors">For Professionals</Link>
              <Link href="/about" className="text-primary-600 dark:text-primary-400 font-medium transition-colors">About Us</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium">Log in</Link>
              <Link href="/register" className="px-4 py-2 rounded-full premium-gradient text-white font-medium hover:opacity-90 transition-opacity shadow-md shadow-primary-500/20">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100 via-background to-background dark:from-primary-900/20 dark:via-background dark:to-background"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium text-sm mb-6 border border-primary-100 dark:border-primary-800">
            <Target className="w-4 h-4" />
            <span>Our Mission</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-balance">
            Revolutionizing the way you find <span className="premium-gradient-text">Skilled Professionals</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 text-balance leading-relaxed">
            Handyman ProConnect was built on a simple premise: finding reliable, vetted tradespeople shouldn't be a gamble. We combine cutting-edge AI with a rigorous verification process to connect homeowners with the very best local professionals.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We are building an ecosystem based on trust, efficiency, and empowering small businesses.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Uncompromising Quality</h3>
              <p className="text-slate-600 dark:text-slate-400">Every professional on our platform undergoes a strict vetting process. We guarantee the quality of work because trust is our most valuable asset.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Precision</h3>
              <p className="text-slate-600 dark:text-slate-400">Our advanced AI Matchmaker doesn't just look at categories; it understands the nuance of your specific job to pair you with the exact right skills.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Empowering Pros</h3>
              <p className="text-slate-600 dark:text-slate-400">We give independent contractors and small businesses enterprise-grade tools to manage their schedule, find leads, and grow their income.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden flex-1">
        <div className="absolute inset-0 premium-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to experience the future?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/ai-chat" className="bg-white text-primary-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-black/10 hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Find a Professional <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/register" className="bg-primary-900/50 text-white border border-primary-400/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-900/70 transition-colors">
              Join as a Pro
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md premium-gradient flex items-center justify-center text-white font-bold text-xs">HP</div>
              <span className="font-bold text-white">Handyman ProConnect</span>
            </div>
            <p className="text-sm">The AI-powered super platform for skilled tradespeople and services.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">How it works</Link></li>
              <li><Link href="/ai-chat" className="hover:text-white transition-colors">AI Job Matching</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Trust & Safety</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} Handyman ProConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
