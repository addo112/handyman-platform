"use client";

import { useState } from "react";
import { Calendar, MapPin, Clock, CreditCard, ShieldCheck, ChevronRight, CheckCircle, Info } from "lucide-react";
import Link from "next/link";
import { MOCK_PROFESSIONALS } from "@/lib/data/mock";
import { useParams, useRouter } from "next/navigation";
import { PaystackButton } from "react-paystack";
import { useCurrency, USD_TO_GHS_RATE } from "@/components/CurrencyProvider";

export default function BookingPage() {
  const params = useParams();
  const id = params?.id as string;
  
  // Find pro, or use the first one as fallback if invalid ID
  const professional = MOCK_PROFESSIONALS.find(p => p.id === id) || MOCK_PROFESSIONALS[0];
  const { formatPrice, currency } = useCurrency();
  
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [issue, setIssue] = useState("");
  const [address, setAddress] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3) as 1 | 2 | 3);
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1) as 1 | 2 | 3);

  // AI Generated Price Estimate
  const estimatedPrice = professional.hourlyRate * 2.5; // Example 2.5 hours
  const serviceFee = estimatedPrice * 0.1;
  const total = estimatedPrice + serviceFee;

  const router = useRouter();
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY || "pk_test_ca0502e444c035f7c90383cae859c5bfe76c59cc";
  const amountToCharge = currency === "GHS" ? total * USD_TO_GHS_RATE : total;
  const amount = Math.round(amountToCharge * 100); // Paystack expects lowest currency unit

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Bar */}
        <div className="mb-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 rounded-full z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-primary-600 dark:bg-primary-500 -translate-y-1/2 rounded-full z-0 transition-all duration-500"
            style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
          ></div>
          
          <div className="flex justify-between relative z-10">
            {[
              { num: 1, label: "Job Details" },
              { num: 2, label: "Schedule & Location" },
              { num: 3, label: "Payment" }
            ].map(s => (
              <div key={s.num} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= s.num ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30' : 'bg-white text-slate-400 border-2 border-slate-200'}`}>
                  {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
                </div>
                <span className={`mt-2 text-xs font-medium ${step >= s.num ? 'text-primary-700 dark:text-primary-400' : 'text-slate-500'}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col md:flex-row">
          
          {/* Main Form Area */}
          <div className="flex-1 p-6 sm:p-10">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Describe the Issue</h2>
                
                <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-xl flex items-start gap-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <p className="text-sm">The ProConnect Engine uses this description to estimate time and cost, and ensures the professional brings the right tools.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">What do you need help with?</label>
                    <textarea 
                      rows={5}
                      placeholder="E.g., The kitchen sink is leaking heavily from the pipe underneath. I need someone to fix it ASAP."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow resize-none text-slate-900 dark:text-white"
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Upload Photos (Optional, but highly recommended)</label>
                    <label className="block border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-8 text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer relative overflow-hidden">
                      <input 
                        type="file" 
                        multiple 
                        accept="image/*" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                        onChange={(e) => setFiles(e.target.files)}
                      />
                      {files && files.length > 0 ? (
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 flex items-center justify-center">
                            <CheckCircle className="w-5 h-5" />
                          </div>
                          <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                            {files.length} {files.length === 1 ? 'image' : 'images'} selected
                          </p>
                        </div>
                      ) : (
                        <p className="text-sm text-slate-500">Click to upload or drag and drop images here</p>
                      )}
                    </label>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={handleNext}
                    disabled={issue.length < 10}
                    className="bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-bold transition-colors flex items-center gap-2"
                  >
                    Continue <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">When & Where</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Service Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="Enter your full address"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-slate-900 dark:text-white"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                          type="date" 
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-slate-900 dark:text-white"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <select 
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-slate-900 dark:text-white appearance-none"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                        >
                          <option value="">Select a time</option>
                          <option value="morning">Morning (8AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 4PM)</option>
                          <option value="evening">Evening (4PM - 8PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button 
                    onClick={handleBack}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-4 py-3 font-medium transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={!date || !time || !address}
                    className="bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-bold transition-colors flex items-center gap-2"
                  >
                    Continue to Payment <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Payment Method</h2>
                
                <div className="space-y-4 mb-8">
                  {/* Fake Paystack/Flutterwave Options */}
                  <label className="flex items-center justify-between p-4 border-2 border-primary-500 bg-primary-50 dark:bg-primary-900/20 rounded-xl cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" className="w-5 h-5 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">Paystack (Card / Mobile Money)</p>
                        <p className="text-xs text-slate-500">Secure payment gateway</p>
                      </div>
                    </div>
                    <CreditCard className="w-6 h-6 text-primary-600" />
                  </label>

                  <label className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" className="w-5 h-5 text-primary-600 focus:ring-primary-500" />
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">Flutterwave</p>
                        <p className="text-xs text-slate-500">Bank Transfer / Card</p>
                      </div>
                    </div>
                    <CreditCard className="w-6 h-6 text-slate-400" />
                  </label>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-8">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-green-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">Payment Protection</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        Your money is held securely in escrow. The professional only gets paid AFTER you confirm the job is completed satisfactorily.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button 
                    onClick={handleBack}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-4 py-3 font-medium transition-colors"
                  >
                    Back
                  </button>
                  <PaystackButton
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-lg shadow-green-500/30"
                    text={`Pay ${formatPrice(total)} & Book`}
                    email="user@example.com"
                    amount={amount}
                    currency={currency}
                    publicKey={publicKey}
                    onSuccess={() => {
                      alert("Payment successful! Job booked via Mobile Money/Card.");
                      router.push("/dashboard/homeowner");
                    }}
                    onClose={() => {
                      console.log("Payment modal closed");
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Booking Summary */}
          <div className="w-full md:w-80 bg-slate-50 dark:bg-slate-900/50 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700 p-6 sm:p-8">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Booking Summary</h3>
            
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
              <img src={professional.avatarUrl} alt={professional.name} className="w-16 h-16 rounded-full object-cover shadow-sm" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">{professional.name}</h4>
                <p className="text-sm text-slate-500">{professional.category}</p>
                <div className="flex items-center gap-1 mt-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                  ⭐ {professional.rating} ({professional.reviews} reviews)
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Rate</span>
                <span className="font-medium text-slate-900 dark:text-white">{formatPrice(professional.hourlyRate)}/hr</span>
              </div>
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="flex items-center gap-1">✨ ProConnect Est. Time</span>
                <span className="text-primary-600 dark:text-primary-400">~2.5 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated Subtotal</span>
                <span className="font-medium text-slate-900 dark:text-white">{formatPrice(estimatedPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Platform & Service Fee</span>
                <span className="font-medium text-slate-900 dark:text-white">{formatPrice(serviceFee)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-slate-900 dark:text-white">Total</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">{formatPrice(total)}</span>
            </div>

            <p className="text-xs text-slate-500 text-center">
              You won't be charged until you complete the booking on the next steps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
