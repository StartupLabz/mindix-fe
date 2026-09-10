"use client";

import React, { useState, useEffect } from "react";

interface QuizHeaderProps {
  answeredCount?: number;
  totalCount?: number;
}

export default function QuizHeader({ answeredCount = 12, totalCount = 30 }: QuizHeaderProps) {
  // Mock timer start at 6 minutes 10 seconds for demo (so it turns red soon if you want, but user said 18:23)
  // Let's use 18:23 as requested: 18 * 60 + 23 = 1103 seconds.
  const [timeLeft, setTimeLeft] = useState(18 * 60 + 23);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  const isDanger = timeLeft <= 300; // <= 5 phút

  return (
    <header className="flex shrink-0 flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/85 px-6 py-3.5 shadow-md backdrop-blur-md transition-all">
      {/* Bên trái: Thông tin bài thi */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        {/* Tiêu đề */}
        <div className="flex items-center">
          <span className="text-lg font-bold text-slate-800">
            Luyện tập: Đạo hàm và ứng dụng
          </span>
        </div>

        {/* Tags meta */}
        <div className="hidden items-center gap-2 md:flex">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
            <i className="fa-solid fa-check-double text-[10px]" />
            Trắc nghiệm
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
            <i className="fa-solid fa-layer-group text-[10px] text-slate-400" />
            30 câu
            <span className="mx-0.5 text-slate-300">•</span>
            30 phút
          </span>
        </div>
      </div>

      {/* Bên phải: Trạng thái & Hành động */}
      <div className="flex items-center gap-6 sm:gap-8">
        {/* Thời gian */}
        <div className={`flex items-center gap-3 rounded-lg border py-1.5 pl-3 pr-4 shadow-inner transition-colors ${
          isDanger ? "border-red-200 bg-red-50" : "border-slate-100 bg-slate-50"
        }`}>
          <i className={`fa-regular fa-clock text-lg ${isDanger ? "text-red-500 animate-pulse" : "text-amber-500"}`} />
          <div className="flex flex-col justify-center">
            <span className={`text-sm font-black tabular-nums tracking-wider ${isDanger ? "text-red-600 animate-pulse" : "text-slate-800"}`}>
              {timeString}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Còn lại
            </span>
          </div>
        </div>

        {/* Tiến độ */}
        <div className="hidden items-center gap-3 sm:flex">
          <div className="flex flex-col items-end justify-center">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Tiến độ
            </span>
            <span className="text-xs font-extrabold text-emerald-600">
              {answeredCount}/{totalCount} câu
            </span>
          </div>

          {/* Thanh progress (tăng chiều dài lên w-32) */}
          <div className="h-2.5 w-32 overflow-hidden rounded-full bg-slate-100 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-500 ease-out"
              style={{ width: `${Math.round((answeredCount / totalCount) * 100)}%` }}
            />
          </div>
        </div>

        {/* Nút Nộp bài */}
        <button
          type="button"
          onClick={() => setShowSubmitModal(true)}
          className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg active:translate-y-0 active:scale-95"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100" />
          <span className="relative z-10">Nộp bài</span>
          <i className="fa-solid fa-paper-plane relative z-10 text-[11px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Modal Xác nhận nộp bài */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-500">
              <i className="fa-solid fa-triangle-exclamation text-xl" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-800">Xác nhận nộp bài</h3>
            <p className="mb-6 text-sm text-slate-600">
              Bạn có chắc chắn muốn nộp bài không?<br />
              {totalCount - answeredCount > 0 && (
                <span className="mt-1 block font-semibold text-rose-500">
                  (Bạn còn {totalCount - answeredCount} câu chưa làm)
                </span>
              )}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-bold text-slate-600 transition-all hover:bg-slate-50 active:scale-95"
              >
                Tiếp tục làm
              </button>
              <button
                onClick={() => {
                  setShowSubmitModal(false);
                  alert("Đã nộp bài thành công!");
                }}
                className="flex-1 rounded-xl bg-emerald-600 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-95"
              >
                Nộp bài ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}