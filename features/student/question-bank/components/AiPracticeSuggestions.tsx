
import { aiSuggestions } from "@/features/student/question-bank/data/exerciseBank.data";

export default function AiPracticeSuggestions() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-indigo-100/50 bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      {/* Decorative gradient blur in background */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-400/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="relative z-10">
        <h3 className="mb-6 flex items-center gap-2.5 text-base font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          <i className="fa-solid fa-sparkles text-indigo-500 animate-pulse" />
          AI gợi ý cho bạn
        </h3>

        <ul className="relative space-y-5 pl-4 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-[2px] before:bg-gradient-to-b before:from-indigo-200 before:via-purple-200 before:to-transparent">
          {aiSuggestions.map((suggestion, idx) => (
            <li key={suggestion.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[19px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-sm ring-4 ring-indigo-50 transition-transform duration-300 group-hover:scale-110">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
              </div>

              {/* Content Card */}
              <div className="rounded-xl border border-white/60 bg-white/60 p-3.5 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-indigo-100 group-hover:bg-white group-hover:shadow-md">
                <p className="mb-2.5 text-sm leading-relaxed text-slate-700">
                  {suggestion.content}{" "}
                  <span className="font-semibold text-indigo-700">
                    "{suggestion.highlight}"
                  </span>
                  .
                </p>

                <button
                  type="button"
                  className="group/btn inline-flex items-center text-xs font-semibold text-indigo-600 transition-colors hover:text-purple-700"
                >
                  {suggestion.action}
                  <i className="fa-solid fa-arrow-right ml-1.5 transform text-[10px] transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
