"use client";

import Link from "next/link";

interface DailyTask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const dailyTasks: DailyTask[] = [
  {
    id: 1,
    title: "Học bài: Hàm số bậc hai",
    description: "Toán học - Chương II",
    completed: true,
  },
  {
    id: 2,
    title: "Làm 20 câu trắc nghiệm",
    description: "Đạo hàm - Trung bình",
    completed: true,
  },
  {
    id: 3,
    title: "Làm đề thi 15 phút",
    description: "Ôn tập chương I",
    completed: false,
  },
  {
    id: 4,
    title: "Ôn tập 20 từ mới",
    description: "Unit 5 - Tiếng Anh",
    completed: false,
  },
];

export default function DailyTasks() {
  const completedCount = dailyTasks.filter((t) => t.completed).length;
  const totalCount = dailyTasks.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
            <i className="fa-solid fa-list-check text-lg" />
          </div>
          <div>
            <h3 className="text-lg font-bold tracking-tight text-slate-800">
              Nhiệm vụ hôm nay
            </h3>
            <p className="mt-0.5 text-xs font-medium text-slate-500">
              Đã hoàn thành{" "}
              <strong className="text-emerald-600">{completedCount}</strong>/
              {totalCount}
            </p>
          </div>
        </div>

        {/* Thanh tiến độ nhỏ mini */}
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full">
          <svg
            className="absolute inset-0 h-12 w-12 -rotate-90 drop-shadow-sm"
            viewBox="0 0 36 36"
          >
            {/* Background Circle */}
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#F1F5F9"
              strokeWidth="3.5"
            />
            {/* Progress Circle */}
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#10B981"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray={`${progressPercent}, 100`}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <span className="text-[10px] font-bold text-emerald-600">
            {progressPercent}%
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {dailyTasks.map((task) => (
          <article
            key={task.id}
            className={`group flex items-center gap-4 rounded-xl border p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
              task.completed
                ? "border-emerald-100/50 bg-emerald-50/30 hover:border-emerald-200 hover:bg-emerald-50/50"
                : "border-slate-100 hover:border-emerald-100 hover:bg-white"
            }`}
          >
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
              <i
                className={`text-xl transition-transform duration-300 group-hover:scale-110 ${
                  task.completed
                    ? "fa-solid fa-circle-check text-emerald-500 drop-shadow-sm"
                    : "fa-regular fa-circle text-slate-300 group-hover:text-emerald-400"
                }`}
              />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className={`truncate text-sm font-bold transition-colors duration-300 ${
                  task.completed
                    ? "text-slate-400 line-through"
                    : "text-slate-700 group-hover:text-emerald-700"
                }`}
              >
                {task.title}
              </p>
              <p
                className={`mt-0.5 truncate text-[11px] font-medium transition-colors duration-300 ${
                  task.completed ? "text-slate-400/60" : "text-slate-500"
                }`}
              >
                {task.description}
              </p>
            </div>

            <button
              type="button"
              className={`shrink-0 rounded-lg px-4 py-2 text-xs font-bold transition-all active:scale-95 ${
                task.completed
                  ? "border border-slate-200 bg-white text-slate-500 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
                  : "bg-emerald-500 text-white shadow-sm shadow-emerald-500/20 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-500/30"
              }`}
            >
              {task.completed ? "Xem lại" : "Bắt đầu"}
            </button>
          </article>
        ))}
      </div>

      <Link
        href="/student/tasks"
        className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 py-3 text-xs font-bold text-emerald-700 transition-all hover:border-emerald-200 hover:bg-emerald-100 hover:shadow-sm active:scale-[0.98]"
      >
        Xem tất cả nhiệm vụ
        <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1" />
      </Link>
    </section>
  );
}
