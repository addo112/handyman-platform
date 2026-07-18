"use client";

import { CheckCircle2, XCircle, FileText, Search, ShieldCheck } from "lucide-react";

export default function ProfessionalKYCPage() {
  const pendingProfessionals = [
    {
      id: "PRO-1042",
      name: "David Mensah",
      email: "david.m@plumbing.com",
      profession: "Master Plumber",
      submittedAt: "2 hours ago",
      documents: [
        { name: "National ID (Ghana Card)", type: "id", verified: false },
        { name: "Plumbing License Cert.", type: "cert", verified: false },
      ]
    },
    {
      id: "PRO-1045",
      name: "Kwame Osei",
      email: "kwame.electric@gmail.com",
      profession: "Electrician",
      submittedAt: "5 hours ago",
      documents: [
        { name: "Passport", type: "id", verified: true },
        { name: "Electrical Cont. License", type: "cert", verified: false },
        { name: "Background Check Consent", type: "doc", verified: true },
      ]
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-primary-500" /> KYC Verifications
          </h1>
          <p className="text-slate-500">Review and approve professional documents before they go live.</p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by ID or Name" 
              className="w-full sm:w-64 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-900 dark:text-white outline-none focus:border-primary-500 transition-colors shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Pending List */}
      <div className="grid grid-cols-1 gap-6">
        {pendingProfessionals.map((pro) => (
          <div key={pro.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm flex flex-col xl:flex-row gap-6">
            
            {/* Pro Info */}
            <div className="xl:w-1/3 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-2xl">
                  👨🏾‍🔧
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{pro.name}</h3>
                  <p className="text-slate-500">{pro.email}</p>
                  <span className="inline-block mt-1 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400">
                    {pro.profession}
                  </span>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 space-y-2 text-sm border border-slate-100 dark:border-slate-700/50">
                <div className="flex justify-between">
                  <span className="text-slate-500">Application ID:</span>
                  <span className="font-medium text-slate-900 dark:text-white">{pro.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Submitted:</span>
                  <span className="font-medium text-slate-900 dark:text-white">{pro.submittedAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Background Check:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">Pending</span>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="xl:w-2/3 flex flex-col">
              <h4 className="font-medium text-slate-900 dark:text-white mb-4">Uploaded Documents</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {pro.documents.map((doc, idx) => (
                  <div key={idx} className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center text-center justify-between hover:border-primary-300 transition-colors cursor-pointer group">
                    <FileText className="w-8 h-8 text-slate-400 group-hover:text-primary-500 mb-2 transition-colors" />
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">{doc.name}</p>
                    {doc.verified ? (
                      <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20 px-2 py-1 rounded-full font-medium">
                        <CheckCircle2 className="w-3 h-3" /> Auto-Verified
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20 px-2 py-1 rounded-full font-medium">
                        Requires Review
                      </span>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Actions */}
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/50 justify-end">
                <button className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg font-medium transition-colors">
                  <XCircle className="w-4 h-4" /> Reject
                </button>
                <button className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors shadow-sm shadow-green-600/20">
                  <CheckCircle2 className="w-4 h-4" /> Approve Professional
                </button>
              </div>
            </div>

          </div>
        ))}

        {pendingProfessionals.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <ShieldCheck className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">All caught up!</h3>
            <p className="text-slate-500 mt-1">There are no pending KYC verifications right now.</p>
          </div>
        )}
      </div>
    </div>
  );
}
