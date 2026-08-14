"use client";

interface RecommendationCardProps {
  title: string;
  chapter: string;
  subject: string;
  image: string;
  progress: number;
  rating: number;
  subjectColorClass?: string;
}

export default function RecommendationCard({
  title,
  chapter,
  subject,
  image,
  progress,
  rating,
  subjectColorClass = "text-blue-600 bg-blue-50/90",
}: RecommendationCardProps) {
  // Trích xuất màu text để tạo hiệu ứng hover đồng bộ
  const textColorMatch = subjectColorClass.match(/text-[a-z]+-\d+/);
  const textColorClass = textColorMatch ? textColorMatch[0] : "text-emerald-600";

  return (
    <article className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50">
      {/* Container ảnh với tỷ lệ tốt hơn và gradient overlay */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Lớp phủ mờ (overlay) phía trên ảnh */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

        {/* Nhãn môn học với kính mờ */}
        <span
          className={`absolute left-3 top-3 inline-flex items-center rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${subjectColorClass}`}
        >
          {subject}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className={`mb-1.5 line-clamp-2 text-sm font-bold leading-tight text-slate-800 transition-colors duration-300 group-hover:${textColorClass}`}>
            {title}
          </h3>
          <p className="mb-4 text-xs font-medium text-slate-500">{chapter}</p>
        </div>

        <div className="flex items-end justify-between gap-3 text-xs">
          <div className="flex w-3/5 flex-col gap-1.5">
            <div className="flex items-center justify-between text-[10px] font-bold">
              <span className="text-slate-400">Tiến độ</span>
              <span className={textColorClass}>{progress}%</span>
            </div>
            {/* Thanh tiến độ */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-1000 ease-out"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-[11px] font-bold text-amber-500">
            <i className="fa-solid fa-star text-[10px]" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
