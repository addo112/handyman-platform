"use client";

import { Search, MapPin, Star, Clock, ShieldCheck, ChevronRight } from "lucide-react";
import { MOCK_CATEGORIES, MOCK_PROFESSIONALS } from "@/lib/data/mock";
import Link from "next/link";
import { useCurrency } from "@/components/CurrencyProvider";

export default function HomeownerDashboard() {
  const { formatPrice } = useCurrency();
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* AI Assistant Banner */}
      <div className="relative rounded-2xl premium-gradient p-6 sm:p-8 overflow-hidden shadow-lg shadow-primary-500/20">
        <div className="absolute top-0 right-0 p-8 opacity-20">
          <Search className="w-32 h-32" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white font-medium text-xs mb-4 backdrop-blur-sm border border-white/30">
            ✨ AI Assistant Ready
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">What do you need fixed today?</h2>
          <p className="text-primary-100 mb-6">Describe your problem, upload a photo, or choose a category. Our AI will instantly match you with the perfect pro.</p>
          
          <div className="bg-white rounded-xl p-2 flex items-center shadow-lg">
            <div className="px-4 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="E.g., My kitchen sink is leaking and I need it fixed today..." 
              className="flex-1 bg-transparent border-none outline-none text-slate-900 py-3"
            />
            <Link href="/ai-chat">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Find Match
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Recommended for you */}
      <div>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Recommended Professionals</h3>
          <button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline flex items-center">
            View all <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PROFESSIONALS.map((pro) => (
            <div key={pro.id} className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <img src={pro.avatarUrl} alt={pro.name} className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm" />
                <div className="bg-slate-100 dark:bg-slate-700 rounded-full px-2 py-1 flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <MapPin className="w-3 h-3 text-primary-500" /> {pro.distance}km
                </div>
              </div>
              
              <h4 className="font-bold text-lg flex items-center gap-1 mb-1">
                {pro.name}
                {pro.isVerified && <ShieldCheck className="w-4 h-4 text-primary-500" />}
              </h4>
              <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">{pro.category}</p>
              
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-slate-900 dark:text-white">{pro.rating}</span>
                </div>
                <span>•</span>
                <span>{pro.reviews} reviews</span>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-700">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{formatPrice(pro.hourlyRate)}<span className="text-xs font-normal text-slate-500">/hr</span></p>
                </div>
                <Link href={`/book/${pro.id}`}>
                  <button className="bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    Book
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Browse by Service</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {MOCK_CATEGORIES.map((cat) => (
            <div key={cat.id} className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center hover:border-primary-500 cursor-pointer transition-colors">
              <span className="text-3xl mb-2">{cat.icon}</span>
              <span className="font-semibold text-sm">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Bookings */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Upcoming Bookings</h3>
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-slate-50 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-slate-400" />
            </div>
            <h4 className="font-semibold text-lg mb-1">No upcoming bookings</h4>
            <p className="text-slate-500 text-sm mb-4">You don't have any scheduled services at the moment.</p>
            <button className="text-primary-600 font-medium hover:underline">Find a Professional</button>
          </div>
        </div>
      </div>

    </div>
  );
}
