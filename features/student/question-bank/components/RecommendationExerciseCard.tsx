import { RecommendedExercise } from "@/features/student/question-bank/types/exerciseBank.type";

interface RecommendationExerciseCardProps {
  exercise: RecommendedExercise;
}

export default function RecommendationExerciseCard({
  exercise,
}: RecommendationExerciseCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div
        className={`absolute left-0 top-0 h-1 w-full ${exercise.topBorderClassName}`}
      />

      <div className="mb-3 flex items-start gap-3">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded ${exercise.iconContainerClassName}`}
        >
          <i className={exercise.icon} />
        </div>

        <div className="min-w-0">
          <h3 className="mb-1 text-sm font-bold leading-tight text-gray-900">
            {exercise.title}
          </h3>

          <p className="truncate text-xs text-gray-500">{exercise.chapter}</p>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-600">
        <span className="flex items-center gap-1">
          <i className="fa-regular fa-file-lines text-gray-400" />
          {exercise.questionCount} câu
        </span>

        <span className="flex items-center gap-1">
          <i className="fa-regular fa-clock text-gray-400" />
          {exercise.duration} phút
        </span>

        <span className="flex items-center gap-1">
          <span
            className={`h-1.5 w-1.5 rounded-full ${exercise.difficultyDotClassName}`}
          />

          {exercise.difficulty}
        </span>
      </div>

      <div className="mt-auto flex items-center justify-between gap-2">
        <span className="text-xs text-gray-500">
          Đã luyện {exercise.practiceCount} lần
        </span>

        <button
          type="button"
          className="rounded-md bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600 transition-colors hover:bg-emerald-100"
        >
          Luyện tập
        </button>
      </div>
    </article>
  );
}
