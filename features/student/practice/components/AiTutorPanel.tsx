"use client";

import React from "react";

const aiActions = [
  {
    id: 1,
    title: "Gợi ý",
    description: "Gợi ý từng bước giải",
    icon: "fa-regular fa-lightbulb",
    iconColor: "text-amber-500 bg-amber-50",
    hoverStyle: "hover:border-amber-300 hover:bg-amber-50/30 hover:shadow-amber-500/5",
    xp: "-5 XP",
  },
  {
    id: 2,
    title: "Công thức",
    description: "Xem công thức cần nhớ",
    icon: "fa-solid fa-square-root-variable",
    iconColor: "text-emerald-500 bg-emerald-50",
    hoverStyle: "hover:border-emerald-300 hover:bg-emerald-50/30 hover:shadow-emerald-500/5",
  },
  {
    id: 3,
    title: "Video bài giảng",
    description: "Xem video giải thích",
    icon: "fa-solid fa-circle-play",
    iconColor: "text-blue-500 bg-blue-50",
    hoverStyle: "hover:border-blue-300 hover:bg-blue-50/30 hover:shadow-blue-500/5",
  },
  {
    id: 4,
    title: "Ôn lại bài học",
    description: "Tới bài học liên quan",
    icon: "fa-solid fa-book-open-reader",
    iconColor: "text-indigo-500 bg-indigo-50",
    hoverStyle: "hover:border-indigo-300 hover:bg-indigo-50/30 hover:shadow-indigo-500/5",
  },
];

export default function AiTutorPanel() {
  return (
    <aside className="sticky top-6 flex w-full max-h-[calc(100vh-3rem)] shrink-0 flex-col gap-5 xl:w-72">
      {/* AI Header */}
      <div className="relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white text-center shadow-md">
        {/* Mascot Robot - Banner */}
        <div className="relative h-24 w-full bg-emerald-50/50 overflow-hidden">
          <img
            alt="AI Robot Mascot"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp0rCfCOMkhiK-5CSjn4J04Bs_bbN7VO3lAp2UpkirFxJczAxk8srB_FaaW97O75ygrhrMIcPQM0sDEIHy-kePB-pADgEo8shEtVc3apeFCQNTo1-tIDTylEHJsuSMmxiirw5AsfQUySvS-ueP9cQSEeyV2zRc_lEqVn4W8-lf9KapH2Qt6avqBypgv0jW0SLf76lwc_d99yBAsiRV6BMwDvenrhoFfPwAlneFJfXPk36noKxZZPHfQg"
          />
          {/* Gradient Overlay for blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
        </div>

        {/* Thông tin Text */}
        <div className="relative z-10 px-4 pb-4 pt-1">
          <h3 className="flex items-center justify-center gap-1.5 text-base font-extrabold text-slate-800">
            <i className="fa-solid fa-sparkles text-emerald-500 animate-pulse" />
            AI Tutor
          </h3>
          <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Trợ lý học tập thông minh
          </p>
        </div>
      </div>

      {/* Cụm công cụ AI */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
        {/* Danh sách Action */}
        <div className="scrollbar-hide flex-1 space-y-3 overflow-y-auto p-5">
          {aiActions.map((action) => (
            <button
              key={action.id}
              type="button"
              className={`group flex w-full flex-col rounded-2xl border-2 border-slate-100 bg-white p-3.5 text-left shadow-sm transition-all duration-200 active:scale-[0.98] ${action.hoverStyle}`}
            >
              <div className="mb-1.5 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {/* Icon Block */}
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${action.iconColor} transition-transform group-hover:scale-110`}>
                    <i className={`${action.icon} text-sm`} />
                  </div>
                  <span className="text-sm font-extrabold text-slate-700 transition-colors group-hover:text-slate-900">
                    {action.title}
                  </span>
                </div>

                {/* Badge Trừ XP (Nếu có) */}
                {action.xp && (
                  <span className="mt-0.5 rounded-md border border-amber-200/50 bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold text-amber-600 shadow-sm">
                    {action.xp}
                  </span>
                )}
              </div>

              <p className="pl-11 text-[11px] font-medium text-slate-400 transition-colors group-hover:text-slate-500">
                {action.description}
              </p>
            </button>
          ))}
        </div>

        {/* Khung Chat: Hỏi AI */}
        <div className="border-t border-slate-100 bg-slate-50 p-5">
          <div className="rounded-2xl border border-emerald-100/50 bg-emerald-50/50 p-4 pb-5 transition-colors focus-within:border-emerald-300 focus-within:bg-emerald-50">
            <div className="mb-0.5 flex items-center gap-2 text-sm font-bold text-emerald-700">
              <i className="fa-regular fa-comment-dots" />
              Hỏi AI Tutor
            </div>

            <p className="mb-3 text-[10px] font-medium text-emerald-600/70">
              Không hiểu bài này? Hãy đặt câu hỏi!
            </p>

            <div className="relative">
              <input
                type="text"
                placeholder="Nhập câu hỏi của bạn..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-3.5 pr-10 text-xs font-medium text-slate-700 shadow-sm outline-none transition-all placeholder:font-normal placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              />

              {/* Nút Gửi (Mũi tên bay) */}
              <button
                type="button"
                className="group absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm transition-all hover:bg-emerald-500 active:scale-95"
              >
                <i className="fa-solid fa-paper-plane text-[10px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}