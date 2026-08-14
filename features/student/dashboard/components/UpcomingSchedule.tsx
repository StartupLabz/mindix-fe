"use client";

import Link from "next/link";

interface ScheduleItem {
  id: number;
  title: string;
  time: string;
  date: string;
  icon: string;
  iconClassName: string;
}

const schedules: ScheduleItem[] = [
  {
    id: 1,
    title: "Ôn tập chương II - Toán học",
    time: "19:30 - 20:30",
    date: "Hôm nay",
    icon: "fa-regular fa-calendar-days",
    iconClassName: "bg-emerald-100 text-emerald-600 ring-emerald-50",
  },
  {
    id: 2,
    title: "Đề thi thử THPTQG - Toán",
    time: "20:00 - 22:00",
    date: "Ngày mai",
    icon: "fa-regular fa-clock",
    iconClassName: "bg-purple-100 text-purple-600 ring-purple-50",
  },
  {
    id: 3,
    title: "Học nhóm - Vật lý",
    time: "19:00 - 20:30",
    date: "14/05/2026",
    icon: "fa-solid fa-chalkboard-user",
    iconClassName: "bg-amber-100 text-amber-600 ring-amber-50",
  },
];

export default function UpcomingSchedule() {
  return (
    <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-6 flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold tracking-tight text-slate-800">
          Lịch học sắp tới
        </h3>

        <Link
          href="/student/schedule"
          className="group flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-100 hover:text-blue-700"
        >
          Xem tất cả
        </Link>
      </div>

      <div className="relative space-y-6">
        {/* Đường line timeline dọc */}
        <div className="absolute bottom-4 left-[1.125rem] top-4 w-px bg-slate-100" />

        {schedules.map((schedule) => (
          <article key={schedule.id} className="group relative flex gap-4">
            <div
              className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[15px] ring-4 transition-transform duration-300 group-hover:scale-110 ${schedule.iconClassName}`}
            >
              <i className={schedule.icon} />
            </div>

            <div className="flex-1 rounded-xl border border-transparent p-2.5 transition-colors duration-300 group-hover:border-slate-100 group-hover:bg-slate-50 -my-2.5">
              <p className="text-sm font-semibold leading-snug text-slate-700 transition-colors group-hover:text-slate-900">
                {schedule.title}
              </p>

              <div className="mt-1 flex items-center gap-2 text-[11px] font-medium text-slate-500">
                <span className="flex items-center gap-1 rounded bg-white px-1.5 py-0.5 shadow-sm border border-slate-100">
                  <i className="fa-regular fa-clock text-[9px]" />
                  {schedule.time}
                </span>

                <span className="text-slate-300">•</span>

                {schedule.date === "Hôm nay" ? (
                  <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-bold text-emerald-600">
                    {schedule.date}
                  </span>
                ) : (
                  <span className="px-1.5 py-0.5 text-slate-400">
                    {schedule.date}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
