import Link from "next/link";

import { recommendedExercises } from "@/features/student/question-bank/data/exerciseBank.data";
import RecommendationExerciseCard from "./RecommendationExerciseCard";

export default function RecommendationExerciseSection() {
  return (
    <section>
      <div className="mb-6 flex items-end justify-between">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800">
          {/* <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-600">
            2
          </span> */}
          2. Bộ đề gợi ý dành cho bạn
        </h2>

        <Link
          href="/student/question-bank/recommended"
          className="group flex items-center gap-1.5 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
        >
          Xem tất cả
          <i className="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {recommendedExercises.slice(0, 6).map((exercise) => (
          <RecommendationExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </section>
  );
}
