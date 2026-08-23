"use client";

import Link from "next/link";

export default function AiTutorBanner() {
  return (
    <section className="group relative mt-8 overflow-hidden rounded-3xl border border-indigo-100 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8 transition-all hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/60">
      {/* --- Dynamic Background Gradients  --- */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-fuchsia-50/50 opacity-80" />

      {/* Animated Glow Orbs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 animate-pulse rounded-full bg-indigo-300/20 blur-[80px] duration-[5000ms]" />
      <div className="pointer-events-none absolute -bottom-32 -right-10 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-[80px] transition-opacity duration-700 group-hover:bg-fuchsia-300/30" />

      {/* Pattern lưới / nhám (Làm mờ đi để hợp với nền sáng) */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.015] mix-blend-multiply" />

      {/* --- Main Content --- */}
      <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          {/* Floating Icon Container (Viền trắng, bóng đổ nhẹ) */}
          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-indigo-50 bg-white shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)]">
            <span className="relative z-10 text-3xl drop-shadow-sm">🤖</span>
            {/* Vòng tròn sáng chìm phía sau con robot */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-100 to-fuchsia-100 opacity-50 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <div>
            {/* Tiêu đề đổi sang màu đen xám (slate-800) */}
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
              Bạn cần hỗ trợ học tập?
              <i className="fa-solid fa-wand-magic-sparkles text-amber-400 animate-pulse text-sm drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]" />
            </h2>

            {/* Chữ mô tả nhạt hơn (slate-600) & AI Tutor Gradient đậm hơn để nổi trên nền sáng */}
            <p className="max-w-lg text-sm font-medium leading-relaxed text-slate-600">
              Trợ lý{" "}
              <strong className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text font-extrabold text-transparent">
                AI Tutor
              </strong>{" "}
              luôn sẵn sàng giải đáp mọi thắc mắc của bạn 24/7. Hỏi ngay để
              không bỏ lỡ kiến thức!
            </p>
          </div>
        </div>

        {/* CTA Button (Nút bấm sang màu đen quyền lực/hiện đại để tạo điểm nhấn) */}
        <Link
          href="/student/ai-tutor"
          className="group/btn relative flex w-fit shrink-0 items-center gap-2 overflow-hidden rounded-xl bg-emerald-600 px-7 py-3.5 font-bold text-white ring-4 ring-emerald-600/10 transition-all duration-300 hover:scale-105 hover:bg-emerald-700 hover:ring-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 active:scale-95"
        >
          {/* Lớp nền lướt qua (Shine effect) */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 ease-out group-hover/btn:translate-x-full group-hover/btn:opacity-100" />

          <span className="relative z-10">Hỏi AI Tutor ngay</span>
          <i className="fa-solid fa-arrow-right relative z-10 text-sm transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
