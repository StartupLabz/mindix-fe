import { quickPracticeActions } from "@/features/student/question-bank/data/exerciseBank.data";

export default function QuickPracticeActions() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="mb-1.5 font-bold text-slate-800 tracking-tight">
          Luyện tập nhanh
        </h3>
        <p className="text-xs font-medium text-slate-500">
          Chỉ 1 click để bắt đầu bài luyện tập phù hợp với bạn
        </p>
      </div>

      <div className="space-y-3.5">
        {quickPracticeActions.map((action) => (
          <button
            key={action.id}
            type="button"
            className={`group flex w-full items-start gap-4 rounded-xl border border-slate-100 bg-white p-3.5 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-emerald-100 ${action.containerClassName}`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-200 group-hover:scale-110 group-active:scale-95 ${action.iconClassName}`}
            >
              <i className={action.icon} />
            </div>

            <div className="flex-1">
              <div className="mb-1 text-sm font-bold text-slate-800 transition-colors group-hover:text-emerald-700">
                {action.title}
              </div>
              <div className="text-[11px] leading-relaxed text-slate-500">
                {action.description}
              </div>
            </div>
            
            <div className="flex h-10 w-6 items-center justify-center opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
              <i className="fa-solid fa-chevron-right text-xs text-slate-300" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
