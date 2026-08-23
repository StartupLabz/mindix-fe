"use client";

import Link from "next/link";

interface AchievementItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconClassName: string;
  unlocked: boolean;
}

const achievements: AchievementItem[] = [
  {
    id: 1,
    title: "Chăm chỉ",
    description: "Chuỗi 7 ngày",
    icon: "fa-solid fa-medal",
    iconClassName:
      "bg-gradient-to-br from-amber-300 to-amber-500 text-white shadow-amber-200",
    unlocked: true,
  },
  {
    id: 2,
    title: "Đều đặn",
    description: "100 bài tập",
    icon: "fa-solid fa-bullseye",
    iconClassName:
      "bg-gradient-to-br from-red-400 to-red-600 text-white shadow-red-200",
    unlocked: true,
  },
  {
    id: 3,
    title: "Thử thách",
    description: "10 đề thi",
    icon: "fa-solid fa-star",
    iconClassName:
      "bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-blue-200",
    unlocked: true,
  },
  {
    id: 4,
    title: "Ngôi sao",
    description: "Điểm TB 9.0+",
    icon: "fa-solid fa-crown",
    iconClassName: "bg-slate-200 text-slate-400 shadow-slate-100",
    unlocked: false,
  },
];

export default function AchievementSection() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-bold tracking-tight text-slate-800">
          Thành tích của bạn
        </h3>

        {/* Số lượng thành tích mở khóa */}
        <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-[10px] font-bold text-amber-600">
          <i className="fa-solid fa-trophy" />
          3/12
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {achievements.map((achievement) => (
          <article
            key={achievement.id}
            className={`group relative flex items-center gap-3 overflow-hidden rounded-xl border p-2.5 transition-all duration-300 ${
              achievement.unlocked
                ? "border-slate-100 bg-white hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-md cursor-pointer"
                : "border-dashed border-slate-200 bg-slate-50 opacity-60 grayscale cursor-not-allowed"
            }`}
          >
            {/* Lớp nền phát sáng nhẹ khi hover (nếu đã mở khóa) */}
            {achievement.unlocked && (
              <div className="absolute inset-0 bg-slate-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            )}

            <div
              className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm shadow-sm transition-transform duration-300 ${
                achievement.unlocked
                  ? "group-hover:scale-110 group-hover:shadow-lg"
                  : ""
              } ${achievement.iconClassName}`}
            >
              <i className={achievement.icon} />

              {!achievement.unlocked && (
                <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-700 text-[8px] text-white ring-2 ring-slate-50">
                  <i className="fa-solid fa-lock" />
                </div>
              )}
            </div>

            <div className="relative z-10 min-w-0 flex-1">
              <p className="truncate text-[12px] font-bold text-slate-700 transition-colors group-hover:text-slate-900">
                {achievement.title}
              </p>
              <p className="mt-0.5 truncate text-[10px] font-medium text-slate-500">
                {achievement.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/student/achievements"
        className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 py-3 text-xs font-bold text-emerald-700 transition-all hover:border-emerald-200 hover:bg-emerald-100 hover:shadow-sm active:scale-[0.98]"
      >
        Xem tất cả thành tích
        <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
