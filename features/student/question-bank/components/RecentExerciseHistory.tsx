import { recentExercises } from "@/features/student/question-bank/data/exerciseBank.data";

export default function RecentExerciseHistory() {
  return (
    <section className="pb-10">
      <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-800">
        {/* <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-600">
          3
        </span> */}
       3. Lịch sử luyện tập gần đây
      </h2>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-6 py-4">Tên bộ đề</th>
                <th className="px-6 py-4 text-center">Số câu</th>
                <th className="px-6 py-4 text-center">Độ khó</th>
                <th className="px-6 py-4 text-center">Tỉ lệ đúng</th>
                <th className="px-6 py-4 text-center">Thời gian</th>
                <th className="px-6 py-4 text-center">Luyện lại</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {recentExercises.map((exercise) => (
                <tr
                  key={exercise.id}
                  className="group transition-colors hover:bg-slate-50"
                >
                  <td className="px-6 py-4 font-semibold text-slate-800 transition-colors group-hover:text-emerald-700">
                    {exercise.title}
                  </td>

                  <td className="px-6 py-4 text-center font-medium text-slate-600">
                    {exercise.questionCount}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center rounded-lg border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                      {exercise.difficulty}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center font-bold text-slate-900">
                    {exercise.correctRate}
                  </td>

                  <td className="px-6 py-4 text-center font-medium text-slate-500">
                    {exercise.duration}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      type="button"
                      title="Luyện tập lại bộ đề này"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-all duration-200 hover:bg-emerald-100 hover:text-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 active:scale-95"
                    >
                      <i className="fa-solid fa-rotate-right" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

