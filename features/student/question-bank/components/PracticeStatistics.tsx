import { practiceStatistics } from "@/features/student/question-bank/data/exerciseBank.data";

export default function PracticeStatistics() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-bold text-slate-800">Thống kê của bạn</h3>
        
        {/* Custom Select */}
        <div className="relative">
          <select className="appearance-none cursor-pointer rounded-lg border border-slate-200 bg-slate-50 py-1.5 pl-3 pr-7 text-xs font-medium text-slate-600 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 hover:bg-slate-100">
            <option>7 ngày qua</option>
            <option>30 ngày qua</option>
            <option>Tháng này</option>
          </select>
          <i className="fa-solid fa-chevron-down absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-slate-400" />
        </div>
      </div>

      <div className="space-y-4">
        {practiceStatistics.map((stat, index) => (
          <div
            key={stat.id}
            className={`group flex items-center justify-between pb-4 ${
              index !== practiceStatistics.length - 1
                ? "border-b border-slate-100"
                : ""
            }`}
          >
            <div className="flex items-center gap-3 text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-800">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-xl text-sm shadow-sm transition-transform group-hover:scale-110 ${stat.iconClassName}`}
              >
                <i className={stat.icon} />
              </div>
              {stat.label}
            </div>

            <div
              className={`text-lg font-bold ${stat.valueClassName ?? "text-slate-800"}`}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-2 overflow-hidden rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
        <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-indigo-200/50 blur-2xl" />
        
        <div className="relative z-10 mb-3 flex items-end justify-between">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-indigo-500">
              Mục tiêu tuần
            </span>
            <span className="text-sm font-bold text-slate-800">70% hoàn thành</span>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm ring-4 ring-indigo-50">
            <i className="fa-solid fa-gift text-sm text-indigo-500" />
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="relative z-10 mb-3 h-2 w-full overflow-hidden rounded-full bg-indigo-100/80 shadow-inner">
          <div
            className="absolute bottom-0 left-0 top-0 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 transition-all duration-1000 ease-out"
            style={{ width: "70%" }}
          >
            <div className="absolute inset-0 bg-white/20" style={{ backgroundImage: "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)", backgroundSize: "1rem 1rem" }} />
          </div>
        </div>

        <p className="relative z-10 text-[11px] font-medium text-slate-600">
          Luyện thêm <span className="font-bold text-indigo-600">40 câu</span> để nhận phần thưởng!
        </p>
      </div>
    </section>
  );
}

