import Link from "next/link";

export default function ExerciseBankHero() {
  return (
    <div className="flex flex-col gap-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm font-medium text-slate-500">
        <Link
          href="/student/dashboard"
          className="transition-colors hover:text-emerald-600 focus:text-emerald-600 focus:outline-none"
        >
          Trang chủ
        </Link>
        <i className="fa-solid fa-chevron-right text-[10px] text-slate-400" />
        <span className="text-slate-800">Ngân hàng bài tập</span>
      </nav>

      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 p-8 text-white shadow-lg sm:p-10">
        {/* Decorative background elements */}
        <div className="absolute -right-10 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 right-20 h-56 w-56 rounded-full bg-emerald-400/20 blur-2xl" />
        
        {/* Abstract Pattern / Graphic */}
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/3 opacity-30 md:block">
          <svg className="absolute right-0 h-full text-white" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
            <polygon points="100,0 50,0 100,100" opacity="0.3" />
            <polygon points="100,0 80,0 100,100" opacity="0.5" />
            <polygon points="100,0 20,100 100,100" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:w-2/3">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl shadow-sm backdrop-blur-sm border border-white/20">
            <i className="fa-solid fa-layer-group text-white" />
          </div>

          <h1 className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ngân hàng bài tập
          </h1>

          <p className="max-w-xl text-emerald-50 text-base sm:text-lg leading-relaxed">
            Hệ thống hóa kiến thức thông qua hàng ngàn bài tập chất lượng. 
            Luyện tập thông minh, bứt phá điểm số cùng AI.
          </p>
        </div>
      </div>
    </div>
  );
}