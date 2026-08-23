"use client";

import Link from "next/link";

interface FavoriteSubject {
  id: number;
  name: string;
  progress: number;
  icon: string;
  iconClassName: string;
  progressClassName: string;
}

const favoriteSubjects: FavoriteSubject[] = [
  {
    id: 1,
    name: "Toán học",
    progress: 92,
    icon: "fa-solid fa-square-root-variable",
    iconClassName:
      "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-blue-200",
    progressClassName: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
  {
    id: 2,
    name: "Vật lý",
    progress: 78,
    icon: "fa-solid fa-atom",
    iconClassName:
      "bg-sky-100 text-sky-600 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-sky-200",
    progressClassName: "bg-gradient-to-r from-sky-400 to-sky-500",
  },
  {
    id: 3,
    name: "Hóa học",
    progress: 65,
    icon: "fa-solid fa-flask",
    iconClassName:
      "bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-amber-200",
    progressClassName: "bg-gradient-to-r from-amber-400 to-amber-500",
  },
  {
    id: 4,
    name: "Tiếng Anh",
    progress: 60,
    icon: "fa-solid fa-language",
    iconClassName:
      "bg-purple-100 text-purple-600 group-hover:bg-purple-500 group-hover:text-white group-hover:shadow-purple-200",
    progressClassName: "bg-gradient-to-r from-purple-400 to-purple-500",
  },
  {
    id: 5,
    name: "Ngữ văn",
    progress: 45,
    icon: "fa-solid fa-book-journal-whills",
    iconClassName:
      "bg-rose-100 text-rose-600 group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-rose-200",
    progressClassName: "bg-gradient-to-r from-rose-400 to-rose-500",
  },
];

export default function FavoriteSubjects() {
  return (
    <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-bold tracking-tight text-slate-800">
          Môn học yêu thích
        </h3>

        <Link
          href="/student/library"
          className="group flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-100 hover:text-blue-700"
        >
          Xem tất cả
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        {favoriteSubjects.map((subject) => (
          <article
            key={subject.id}
            className="group flex cursor-pointer items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-slate-50"
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${subject.iconClassName}`}
            >
              <i className={subject.icon} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="font-semibold tracking-wide text-slate-700 transition-colors group-hover:text-slate-900">
                  {subject.name}
                </span>

                <span className="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">
                  {subject.progress}%
                </span>
              </div>

              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${subject.progressClassName}`}
                  style={{
                    width: `${subject.progress}%`,
                  }}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
