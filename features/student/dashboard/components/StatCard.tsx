"use client";

interface StatCardProps {
  title: string;
  value: string;
  suffix?: string;
  description: string;
  icon: string;
  valueClassName: string;
  iconClassName: string;
  descriptionClassName?: string;
  highlighted?: boolean;
}

export default function StatCard({
  title,
  value,
  suffix,
  description,
  icon,
  valueClassName,
  iconClassName,
  descriptionClassName = "text-emerald-600 bg-emerald-50",
  highlighted = false,
}: StatCardProps) {
  // Trích xuất background color class từ iconClassName để dùng cho bóng đổ (glow)
  const bgClassMatch = iconClassName.match(/bg-[a-z]+-\d+/);
  const glowBgClass = bgClassMatch ? bgClassMatch[0] : "";

  return (
    <article
      className={`group relative flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 ${
        highlighted ? "border-2 border-red-200 ring-4 ring-red-50/50 shadow-md shadow-red-100" : "border border-slate-100 shadow-sm"
      }`}
    >
      {/* Hiệu ứng phát sáng mờ khi hover */}
      <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60 ${glowBgClass}`} />

      <p className="relative z-10 mb-3 text-sm font-semibold tracking-wide text-slate-500">{title}</p>

      <div className="relative z-10 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p className={`mb-2 text-3xl font-extrabold tracking-tight ${valueClassName}`}>
            {value}
            {suffix && (
              <span className="ml-1 text-sm font-semibold text-slate-400">
                {suffix}
              </span>
            )}
          </p>

          <p
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold ${descriptionClassName}`}
          >
            <i
              className={`mr-1.5 text-[10px] ${
                highlighted ? "fa-solid fa-fire animate-pulse" : "fa-solid fa-arrow-up"
              }`}
            />
            {description}
          </p>
        </div>

        <div
          className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${iconClassName}`}
        >
          <i className={icon} />

          {highlighted && (
            <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 ring-4 ring-white">
              <i className="fa-solid fa-fire text-[10px] text-red-500 drop-shadow-sm" />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}