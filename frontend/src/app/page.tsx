import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Wrench, Search, Star, MapPin } from "lucide-react";
import { MOCK_CATEGORIES, MOCK_PROFESSIONALS } from "@/lib/data/mock";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg premium-gradient flex items-center justify-center text-white font-bold">
                HP
              </div>
              <span className="font-bold text-xl tracking-tight">Handyman <span className="premium-gradient-text">ProConnect</span></span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/ai-chat" className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 font-medium transition-colors">Services</Link>
              <Link href="/register" className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 font-medium transition-colors">For Professionals</Link>
              <Link href="#" className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 font-medium transition-colors">About Us</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium">Log in</Link>
              <Link href="/register" className="px-4 py-2 rounded-full premium-gradient font-medium hover:opacity-90 transition-opacity shadow-md shadow-primary-500/20">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100 via-background to-background dark:from-primary-900/20 dark:via-background dark:to-background"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium text-sm mb-6 border border-primary-100 dark:border-primary-800">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Matching Engine</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-balance">
            Find the perfect <span className="premium-gradient-text">Professional</span><br/>for any job, instantly.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto text-balance">
            Connect with verified plumbers, electricians, carpenters, and more. Powered by AI to match you with the right skills at the right price.
          </p>
          
          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1 flex items-center px-4 py-2 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
              <Search className="w-5 h-5 text-slate-400" />
              <input type="text" placeholder="What service do you need?" className="w-full bg-transparent border-none outline-none px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400" />
            </div>
            <div className="relative flex-1 flex items-center px-4 py-2 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
              <MapPin className="w-5 h-5 text-slate-400" />
              <input type="text" placeholder="Accra, Ghana" className="w-full bg-transparent border-none outline-none px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400" />
            </div>
            <Link href="/ai-chat" className="premium-gradient px-8 py-3 rounded-xl font-medium shadow-md shadow-primary-500/20 hover:opacity-90 transition-all flex justify-center items-center gap-2 text-white">
              Search <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-500" /> ID Verified Pros</div>
            <div className="flex items-center gap-2"><Wrench className="w-5 h-5 text-amber-500" /> Guaranteed Quality</div>
            <div className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> 4.9/5 Average Rating</div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Popular Services</h2>
              <p className="text-slate-600 dark:text-slate-400">Discover top-rated services in your area.</p>
            </div>
            <Link href="#" className="hidden sm:flex text-primary-600 dark:text-primary-400 font-medium items-center gap-1 hover:gap-2 transition-all">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {MOCK_CATEGORIES.map((cat) => (
              <Link href="#" key={cat.id} className="group glass-card p-6 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all duration-300 hover:shadow-primary-500/10">
                <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</span>
                <h3 className="font-semibold text-slate-900 dark:text-white">{cat.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cat.count}+ pros</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Professionals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2">Top Rated Professionals Near You</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10">AI-matched recommendations based on your location.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_PROFESSIONALS.map((pro) => (
              <div key={pro.id} className="border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all bg-white dark:bg-slate-800/50">
                <div className="flex items-start gap-4 mb-4">
                  <img src={pro.avatarUrl} alt={pro.name} className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm" />
                  <div>
                    <h3 className="font-bold text-lg flex items-center gap-1">
                      {pro.name}
                      {pro.isVerified && <ShieldCheck className="w-4 h-4 text-primary-500" />}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{pro.category}</p>
                    <div className="flex items-center gap-1 mt-1 text-sm text-slate-600 dark:text-slate-400">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold text-slate-900 dark:text-white">{pro.rating}</span>
                      <span>({pro.reviews})</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {pro.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div>
                    <p className="text-xs text-slate-500">Starting from</p>
                    <p className="font-bold">${pro.hourlyRate}<span className="text-sm font-normal text-slate-500">/hr</span></p>
                  </div>
                  <Link href={`/book/${pro.id}`} className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 premium-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Are you a skilled professional?</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 text-balance">
            Join thousands of professionals earning more with Handyman ProConnect. Get matched with jobs, manage your schedule, and grow your business using AI.
          </p>
          <Link href="/register" className="inline-block bg-white text-primary-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-black/10 hover:scale-105 transition-transform">
            Apply as a Professional
          </Link>
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
              <li><Link href="#" className="hover:text-white transition-colors">How it works</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AI Job Matching</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Trust & Safety</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
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
