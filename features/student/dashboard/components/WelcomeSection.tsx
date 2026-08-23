"use client";

import Link from "next/link";

export default function WelcomeSection() {
  const currentDate = "Thứ Năm, 13 tháng 8";

  return (
    <section className="relative mb-8 overflow-hidden rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-200/50 transition-shadow hover:shadow-lg">
      {/* Decorative Gradient Background (nằm dưới nội dung) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/30" />

      {/* Abstract Glowing Orbs (Làm rõ nét hơn một chút) */}
      <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-emerald-400/15 blur-[60px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-blue-400/10 blur-[60px]" />

      <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-2">
          {/* Date Badge */}
          <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-200/60 bg-white/80 px-3 py-1.5 text-xs font-bold text-emerald-600 shadow-sm backdrop-blur-md">
            <i className="fa-regular fa-calendar-check" />
            <span>{currentDate}</span>
          </div>

          {/* Greeting */}
          <h1 className="mt-2 flex flex-wrap items-center gap-3 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            <span>Xin chào,</span>
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent drop-shadow-sm">
              Minh Anh!
            </span>
            <span className="inline-block origin-bottom-right cursor-default text-4xl transition-transform duration-300 hover:rotate-12">
              👋
            </span>
          </h1>

          <p className="mt-1 max-w-xl text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
            Hôm nay là một ngày tuyệt vời để tiếp tục hành trình học tập. AI
            Tutor đã chuẩn bị sẵn lộ trình riêng dành cho bạn!
          </p>
        </div>

        {/* AI Tutor Button - Modern App Style */}
        <Link
          href="/student/ai-tutor"
          className="group relative flex w-fit shrink-0 items-center gap-3 overflow-hidden rounded-2xl bg-emerald-600 p-1.5 pr-5 shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-600/40 active:translate-y-0"
        >
          {/* Hiệu ứng chớp sáng nền khi hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Icon Container */}
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white shadow-inner backdrop-blur-sm ring-1 ring-white/30 transition-colors duration-300 group-hover:bg-white group-hover:text-emerald-600">
            <i className="fa-solid fa-robot text-lg transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
          </div>

          {/* Text */}
          <div className="relative flex flex-col justify-center text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100">
              Hỏi đáp 24/7
            </span>
            <span className="text-sm font-bold text-white transition-colors">
              Trợ giảng AI
            </span>
          </div>

          <i className="fa-solid fa-chevron-right relative ml-2 text-xs text-emerald-200 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
        </Link>
      </div>
    </section>
  );
}
