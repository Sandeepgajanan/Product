"use client";
import { dashboardStats } from "@/app/constants";
import Sideheading from "../user/Sideheading";

export default function Dashboard() {
  return (
    <div className="bg-zinc-800 ml-64 max-sm:ml-0 w-[calc(100%-16rem)] max-sm:w-full min-h-screen p-5">
      <Sideheading title="Dashboard" highlight="Overview" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 max-sm:grid-cols-1 gap-8">
        <div className="bg-zinc-900 p-8 max-sm:p-4 rounded-2xl border border-zinc-700">
          <h3 className="text-zinc-100 text-xl font-bold mb-6">Statistics Overview</h3>
          <div className="space-y-6">
            {dashboardStats.slice(0,2).map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-16 h-16 max-sm:w-12 max-sm:h-12 bg-[#27E0B3]/10 rounded-full flex items-center justify-center">
                  <i className={`${stat.icon} text-2xl max-sm:text-xl text-[#27E0B3]`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline">
                    <p className="text-zinc-400 text-sm">{stat.title}</p>
                    <p className="text-2xl max-sm:text-lg font-bold text-[#27E0B3]">{stat.value}</p>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full mt-2">
                    <div className="h-full bg-[#27E0B3] rounded-full" style={{width: `${(parseInt(stat.value.replace(',',''))/2000)*100}%`}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 p-8 max-sm:p-4 rounded-2xl border border-zinc-700">
          <h3 className="text-zinc-100 text-xl font-bold mb-6">Activity Metrics</h3>
          <div className="space-y-6">
            {dashboardStats.slice(2,4).map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-16 h-16 max-sm:w-12 max-sm:h-12 bg-[#27E0B3]/10 rounded-full flex items-center justify-center">
                  <i className={`${stat.icon} text-2xl max-sm:text-xl text-[#27E0B3]`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline">
                    <p className="text-zinc-400 text-sm">{stat.title}</p>
                    <p className="text-2xl max-sm:text-lg font-bold text-[#27E0B3]">{stat.value}</p>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full mt-2">
                    <div className="h-full bg-[#27E0B3] rounded-full" style={{width: `${(parseInt(stat.value.replace(',',''))/1000)*100}%`}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
