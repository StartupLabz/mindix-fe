import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 min-h-screen relative overflow-x-hidden">
      {/* BEGIN: Global Fixed Background */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-emerald-50 via-sky-50 to-indigo-50 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] bg-emerald-500/15 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[50%] bg-blue-500/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[35%] h-[40%] bg-purple-400/15 rounded-full blur-[120px]"></div>
      </div>
      {/* END: Global Fixed Background */}

      {/* BEGIN: Header */}
      <header className="bg-white/80 backdrop-blur-md fixed top-0 left-0 w-full z-50 border-b border-gray-100/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* --- CỤM BÊN TRÁI: LOGO + MENU --- */}
            <div className="flex items-center gap-8 xl:gap-12">
              <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  <i className="fas fa-book-open"></i>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 leading-none">
                    EduQuest <span className="text-emerald-500">AI</span>
                  </h1>
                  <p className="text-[10px] text-gray-600 font-medium mt-0.5">
                    Học thông minh, thi hiệu quả
                  </p>
                </div>
              </div>

              <nav className="hidden lg:flex items-center gap-4 xl:gap-6 whitespace-nowrap">
                <Link
                  className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors"
                  href="#"
                >
                  Trang chủ
                </Link>
                <Link
                  className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors"
                  href="#"
                >
                  Thư viện kiến thức
                </Link>
                <Link
                  className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors"
                  href="#"
                >
                  Luyện tập
                </Link>
                <Link
                  className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors"
                  href="#"
                >
                  Đề thi trực tuyến
                </Link>
                <Link
                  className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors"
                  href="#"
                >
                  AI Tutor
                </Link>
                <Link
                  className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors"
                  href="#"
                >
                  Bảng xếp hạng
                </Link>
                <Link
                  className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors"
                  href="#"
                >
                  Blog
                </Link>
              </nav>
            </div>

            {/* --- CỤM BÊN PHẢI: ĐĂNG NHẬP/ĐĂNG KÝ --- */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/login"
                className="text-gray-700 hover:text-emerald-600 font-medium text-sm whitespace-nowrap"
              >
                Đăng nhập
              </Link>
              <Link
                href="/register"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors shadow-md shadow-emerald-500/20 whitespace-nowrap"
              >
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* END: Header */}

      {/* BEGIN: Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-emerald-200/50 text-sm font-medium text-emerald-600 mb-6 shadow-sm">
                <i className="fas fa-star text-xs text-amber-400"></i>
                Nền tảng học tập ứng dụng AI hàng đầu
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Học thông minh cùng AI
                <br />
                <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                  Chinh phục mọi kỳ thi
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
                EduQuest AI là hệ sinh thái học tập toàn diện với Thư viện kiến
                thức, Ngân hàng bài tập và Đề thi trực tuyến, giúp bạn học hiệu
                quả, luyện tập thông minh và đạt kết quả vượt trội.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  href="/login"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold text-lg flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/30"
                >
                  Bắt đầu miễn phí{" "}
                  <i className="fas fa-arrow-right text-sm"></i>
                </Link>
                <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 border border-gray-200 px-8 py-3 rounded-full font-semibold text-lg flex items-center gap-2 transition-all shadow-sm">
                  Khám phá thư viện{" "}
                  <i className="fas fa-play-circle text-emerald-500"></i>
                </button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm font-semibold text-gray-700">
                <span className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-emerald-500"></i> Học
                  mọi lúc, mọi nơi
                </span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-emerald-500"></i> Nội
                  dung chuẩn theo BGD
                </span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-emerald-500"></i> AI
                  đồng hành cùng bạn
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div
                className="absolute top-[15%] -left-12 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce z-10 border border-white"
                style={{ animationDuration: "3s" }}
              >
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-violet-500">
                  <i className="fas fa-video"></i>
                </div>
                <span className="font-semibold text-sm text-gray-800">
                  Video bài giảng
                </span>
              </div>
              <div
                className="absolute bottom-[20%] -left-6 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce z-10 hidden sm:flex border border-white"
                style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500">
                  <i className="fas fa-square-root-alt"></i>
                </div>
                <span className="font-semibold text-sm text-gray-800">
                  Công thức
                </span>
              </div>

              <div
                className="absolute top-[25%] -right-10 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce z-10 hidden sm:flex border border-white"
                style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
              >
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  <i className="fas fa-layer-group"></i>
                </div>
                <span className="font-semibold text-sm text-gray-800">
                  Ngân hàng câu hỏi
                </span>
              </div>

              <div
                className="absolute bottom-[15%] -right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce z-10 border border-white"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <span className="font-semibold text-sm text-gray-800">
                  Đề thi mô phỏng
                </span>
              </div>

              <Image
                unoptimized
                width={800}
                height={500}
                alt="Học sinh học tập cùng AI"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover relative z-0 border-4 border-white/50"
                src="/images/features/landingpage.png"
              />
            </div>
          </div>
        </div>
      </section>
      {/* END: Hero Section */}

      {/* BEGIN: Feature Cards Section */}
      {/* BEGIN: Feature Cards Section */}
      <section className="py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-green-50/90 backdrop-blur-md rounded-3xl p-6 shadow-xl shadow-green-900/5 border border-green-200 hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-500 text-2xl shadow-sm shrink-0 border border-green-100">
                  <i className="fas fa-book-reader"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    1. Thư viện kiến thức
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    Kho tri thức đa dạng với bài giảng, công thức, ví dụ minh
                    họa, video và tài liệu tham khảo.
                  </p>
                  <Link
                    className="text-emerald-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    href="#"
                  >
                    Khám phá ngay <i className="fas fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50/90 backdrop-blur-md rounded-3xl p-6 shadow-xl shadow-blue-900/5 border border-blue-200 hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-500 text-2xl shadow-sm shrink-0 border border-blue-100">
                  <i className="fas fa-clipboard-list"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    2. Ngân hàng bài tập
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    Luyện tập theo chủ đề, mức độ khó và dạng bài. Hệ thống phân
                    tích chi tiết, giúp bạn tiến bộ mỗi ngày.
                  </p>
                  <Link
                    className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    href="#"
                  >
                    Luyện tập ngay{" "}
                    <i className="fas fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-purple-50/90 backdrop-blur-md rounded-3xl p-6 shadow-xl shadow-purple-900/5 border border-purple-200 hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-violet-500 text-2xl shadow-sm shrink-0 border border-purple-100">
                  <i className="fas fa-laptop-medical"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    3. Đề thi trực tuyến
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    Thi thử mô phỏng chuẩn như thật với đồng hồ đếm ngược, chấm
                    điểm tự động và phân tích kết quả chi tiết.
                  </p>
                  <Link
                    className="text-violet-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    href="#"
                  >
                    Thi thử ngay <i className="fas fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Feature Cards Section */}
      {/* END: Feature Cards Section */}

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-24 relative z-10">
        {/* BEGIN: Grid Section (Process, Subjects, Stats) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* SỬA ĐỔI 1: Cập nhật Process thêm bước thứ 5 */}
          <section className="lg:col-span-1 bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white shadow-sm flex flex-col justify-center">
            <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
              Quy trình học tập khép kín
            </h2>

            <div className="relative w-full z-0">
              <div className="flex items-start justify-between text-center gap-1">
                {/* Bước 1 */}
                <div className="flex flex-col items-center gap-2 group cursor-default flex-1">
                  <div className="w-10 h-10 bg-green-100 text-emerald-600 rounded-full flex items-center justify-center shadow-sm border-[3px] border-[#f4fbfa] group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-book-open text-xs"></i>
                  </div>
                  <p className="text-[11px] font-bold text-emerald-700 leading-tight">
                    1. Học lý
                    <br />
                    thuyết
                  </p>
                </div>

                {/* Chuyển tiếp: Bước 1 → Bước 2 */}
                <span
                  aria-hidden="true"
                  className="mt-2.5 shrink-0 text-lg font-bold text-gray-300"
                >
                  →
                </span>

                {/* Bước 2 */}
                <div className="flex flex-col items-center gap-2 group cursor-default flex-1">
                  <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center shadow-sm border-[3px] border-[#f4fbfa] group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-pencil text-xs"></i>
                  </div>
                  <p className="text-[11px] font-bold text-blue-600 leading-tight">
                    2. Luyện
                    <br />
                    tập
                  </p>
                </div>

                {/* Chuyển tiếp: Bước 2 → Bước 3 */}
                <span
                  aria-hidden="true"
                  className="mt-2.5 shrink-0 text-lg font-bold text-gray-300"
                >
                  →
                </span>

                {/* Bước 3 */}
                <div className="flex flex-col items-center gap-2 group cursor-default flex-1">
                  <div className="w-10 h-10 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center shadow-sm border-[3px] border-[#f4fbfa] group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-file-lines text-xs"></i>
                  </div>
                  <p className="text-[11px] font-bold text-purple-600 leading-tight">
                    3. Làm
                    <br />
                    đề thi
                  </p>
                </div>

                {/* Chuyển tiếp: Bước 3 → Bước 4 */}
                <span
                  aria-hidden="true"
                  className="mt-2.5 shrink-0 text-lg font-bold text-gray-300"
                >
                  →
                </span>

                {/* Bước 4 */}
                <div className="flex flex-col items-center gap-2 group cursor-default flex-1">
                  <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center shadow-sm border-[3px] border-[#f4fbfa] group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-chart-bar text-xs"></i>
                  </div>
                  <p className="text-[11px] font-bold text-orange-600 leading-tight">
                    4. Xem
                    <br />
                    kết quả
                  </p>
                </div>

                {/* Chuyển tiếp: Bước 4 → Bước 5 */}
                <span
                  aria-hidden="true"
                  className="mt-2.5 shrink-0 text-lg font-bold text-gray-300"
                >
                  →
                </span>

                {/* Bước 5 */}
                <div className="flex flex-col items-center gap-2 group cursor-default flex-1">
                  <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center shadow-sm border-[3px] border-[#f4fbfa] group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-rotate-right text-xs"></i>
                  </div>
                  <p className="text-[11px] font-bold text-teal-700 leading-tight">
                    5. Ôn
                    <br />
                    tập lại
                  </p>
                </div>
              </div>

              
            </div>
          </section>

          {/* SỬA ĐỔI 2: Dàn trải Subject ra grid-cols-2, đổi kiểu dáng ngang để lấp đầy không gian */}
          <section className="lg:col-span-1 bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white shadow-sm flex flex-col justify-center">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Học mọi môn, không giới hạn
            </h2>
            <div className="grid grid-cols-2 gap-3 h-full content-between">
              
              <div className="group flex items-center gap-3 p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center text-blue-500 shrink-0 transition-colors">
                  <i className="fa-solid fa-calculator"></i>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                  Toán
                </span>
              </div>

              <div className="group flex items-center gap-3 p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-orange-300 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-orange-50 group-hover:bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 shrink-0 transition-colors">
                  <i className="fa-solid fa-book-bookmark"></i>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">
                  Ngữ Văn
                </span>
              </div>

              <div className="group flex items-center gap-3 p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-red-300 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-red-50 group-hover:bg-red-100 rounded-xl flex items-center justify-center text-red-500 shrink-0 transition-colors">
                  <i className="fa-solid fa-language"></i>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-red-600 transition-colors">
                  Tiếng Anh
                </span>
              </div>

              <div className="group flex items-center gap-3 p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-purple-300 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-purple-50 group-hover:bg-purple-100 rounded-xl flex items-center justify-center text-purple-500 shrink-0 transition-colors">
                  <i className="fa-solid fa-atom"></i>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-600 transition-colors">
                  Vật Lý
                </span>
              </div>

              <div className="group flex items-center gap-3 p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-green-300 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-green-50 group-hover:bg-green-100 rounded-xl flex items-center justify-center text-green-500 shrink-0 transition-colors">
                  <i className="fa-solid fa-flask"></i>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors">
                  Hóa Học
                </span>
              </div>

              <div className="group flex items-center gap-3 p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-emerald-50 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-500 shrink-0 transition-colors">
                  <i className="fa-solid fa-seedling"></i>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-emerald-600 transition-colors">
                  Sinh Học
                </span>
              </div>

              <div className="group flex items-center gap-3 p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-yellow-400 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-yellow-50 group-hover:bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 shrink-0 transition-colors">
                  <i className="fa-solid fa-landmark"></i>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors">
                  Lịch Sử
                </span>
              </div>

              <div className="group flex items-center gap-3 p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-cyan-300 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-cyan-50 group-hover:bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-500 shrink-0 transition-colors">
                  <i className="fa-solid fa-earth-americas"></i>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-cyan-600 transition-colors">
                  Địa Lý
                </span>
              </div>
              
            </div>
          </section>

          {/* Stats */}
          <section className="lg:col-span-1 bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white shadow-sm flex flex-col justify-center">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              EduQuest AI trong con số
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 border border-emerald-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <i className="fa-solid fa-graduation-cap text-3xl text-emerald-500 mb-2 mx-auto"></i>
                <h4 className="text-xl font-bold text-gray-900">20K+</h4>
                <p className="text-[11px] text-gray-600 font-medium">
                  Học sinh
                </p>
              </div>
              <div className="bg-white/80 border border-blue-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <i className="fa-solid fa-file-lines text-3xl text-blue-500 mb-2 mx-auto"></i>
                <h4 className="text-xl font-bold text-gray-900">5K+</h4>
                <p className="text-[11px] text-gray-600 font-medium">Bài học</p>
              </div>
              <div className="bg-white/80 border border-orange-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <i className="fa-solid fa-circle-question text-3xl text-orange-500 mb-2 mx-auto"></i>
                <h4 className="text-xl font-bold text-gray-900">100K+</h4>
                <p className="text-[11px] text-gray-600 font-medium">Câu hỏi</p>
              </div>
              <div className="bg-white/80 border border-purple-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <i className="fa-solid fa-trophy text-3xl text-purple-500 mb-2 mx-auto"></i>
                <h4 className="text-xl font-bold text-gray-900">1K+</h4>
                <p className="text-[11px] text-gray-600 font-medium">Đề thi</p>
              </div>
            </div>
          </section>
        </div>
        {/* END: Grid Section */}

        {/* BEGIN: Testimonials & AI Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Testimonials */}
          <section className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white shadow-sm">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Học sinh nói gì về EduQuest AI ✨
            </h3>
            <div className="space-y-6">
              {/* Review 1 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0">
                  <Image
                    src="/images/students/nguyenminhanh.png"
                    alt="Nguyễn Minh Anh"
                    width={80}
                    height={80}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-sm text-gray-900">
                      Nguyễn Minh Anh
                    </h4>
                    <span className="text-yellow-400 text-xs">★★★★★</span>
                  </div>
                  <p className="text-xs text-emerald-600 font-medium mb-2">
                    Học sinh lớp 12 - Hà Nội
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    "EduQuest AI giúp mình học tập có hệ thống hơn rất nhiều.
                    Kho bài giảng chi tiết, bài tập đa dạng và dễ hiểu."
                  </p>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0">
                  <Image
                    src="/images/students/tranlehoang.png"
                    alt="Trần Lê Hoàng"
                    width={80}
                    height={80}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-sm text-gray-900">
                      Trần Lê Hoàng
                    </h4>
                    <span className="text-yellow-400 text-xs">★★★★★</span>
                  </div>
                  <p className="text-xs text-blue-600 font-medium mb-2">
                    Học sinh lớp 10 - TP.HCM
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    "Tính năng AI Tutor thật sự rất tuyệt vời! Mỗi khi gặp bài
                    toán khó, mình đều được hướng dẫn giải đáp cặn kẽ từng bước
                    một."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AI Banner */}
          <section className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white shadow-sm flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Sức mạnh AI đồng hành cùng bạn
            </h2>
            <p className="text-gray-600 mb-10 font-medium">
              Trải nghiệm phương pháp học tập tương lai với trợ lý ảo thông minh
              được tích hợp sẵn.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-3 hover:bg-white/50 rounded-2xl transition-colors">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-emerald-600 border border-emerald-200">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-gray-900 mb-1">
                    Smart Recommendation
                  </h4>
                  <p className="text-sm text-gray-600">
                    Gợi ý lộ trình học tập phù hợp với năng lực của bạn.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-3 hover:bg-white/50 rounded-2xl transition-colors">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-purple-600 border border-purple-200">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-gray-900 mb-1">
                    Learning Analytics
                  </h4>
                  <p className="text-sm text-gray-600">
                    Phân tích quá trình học tập đưa ra lộ trình tối ưu.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-3 hover:bg-white/50 rounded-2xl transition-colors">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-orange-600 border border-orange-200">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-gray-900 mb-1">
                    Instant Feedback
                  </h4>
                  <p className="text-sm text-gray-600">
                    Giải đáp thắc mắc tức thì và giải chi tiết cho từng câu hỏi.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* END: Testimonials & AI Banner */}

        {/* BEGIN: CTA Banner */}
        <section className="bg-green-500 rounded-2xl p-5 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage:
                "url('https://placehold.co/1200x300/00B17F/009B6F')",
            }}
          ></div>

          <div className="z-10 text-white text-center md:text-left">
            <h2 className="text-xl font-bold mb-1.5">
              Hãy bắt đầu hành trình học tập cùng EduQuest AI ngay hôm nay!
            </h2>
            <p className="text-green-100 text-sm">
              Học thông minh hơn - Tiết kiệm thời gian - Đạt điểm cao hơn
            </p>
          </div>

          <Link
            className="z-10 bg-yellow-400 text-gray-900 px-6 py-2.5 text-sm rounded-full font-bold hover:bg-yellow-300 transition-colors whitespace-nowrap shadow flex items-center gap-2"
            href="#"
          >
            Đăng ký miễn phí <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </section>
        {/* END: CTA Banner */}
      </main>

      {/* BEGIN: Footer */}
      <footer className="bg-white/60 backdrop-blur-lg pt-16 pb-8 border-t border-white shadow-[0_-4px_20px_rgba(0,0,0,0.02)] relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  <i className="fas fa-book-open"></i>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 leading-none">
                    EduQuest <span className="text-emerald-500">AI</span>
                  </h1>
                  <p className="text-[10px] text-gray-600 font-medium mt-0.5">
                    Học thông minh, thi hiệu quả
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Nền tảng học tập cá nhân hoá ứng dụng sức mạnh của trí tuệ nhân
              tạo.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 text-gray-400">
              <Link className="hover:text-blue-500 transition-colors" href="#">
                <i className="fa-brands fa-twitter text-xl"></i>
              </Link>
              <Link className="hover:text-blue-600 transition-colors" href="#">
                <i className="fa-brands fa-facebook text-xl"></i>
              </Link>
              <Link className="hover:text-pink-600 transition-colors" href="#">
                <i className="fa-brands fa-instagram text-xl"></i>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Sản phẩm</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  className="hover:text-emerald-600 transition-colors font-medium"
                  href="#"
                >
                  Thư viện kiến thức
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-emerald-600 transition-colors font-medium"
                  href="#"
                >
                  Ngân hàng bài tập
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-emerald-600 transition-colors font-medium"
                  href="#"
                >
                  Đề thi trực tuyến
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-emerald-600 transition-colors font-medium"
                  href="#"
                >
                  AI Tutor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Hỗ trợ</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  className="hover:text-emerald-600 transition-colors font-medium"
                  href="#"
                >
                  Hướng dẫn sử dụng
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-emerald-600 transition-colors font-medium"
                  href="#"
                >
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-emerald-600 transition-colors font-medium"
                  href="#"
                >
                  Liên hệ hỗ trợ
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-emerald-600 transition-colors font-medium"
                  href="#"
                >
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Về chúng tôi</h4>
            <ul className="space-y-3 text-sm text-gray-600 mb-6">
              <li>
                <Link
                  className="hover:text-emerald-600 transition-colors font-medium"
                  href="#"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-emerald-600 transition-colors font-medium"
                  href="#"
                >
                  Blog
                </Link>
              </li>
            </ul>
            <h4 className="font-bold text-gray-900 mb-3">Liên hệ</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-emerald-500"></i>{" "}
                hello@eduquest.ai
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-emerald-500"></i> 0123 456
                789
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm font-medium text-gray-500 border-t border-gray-200/60 pt-6 mx-6 md:mx-12">
          © 2024 EduQuest AI. Tất cả quyền được bảo lưu.
        </div>
      </footer>
      {/* END: Footer */}
    </div>
  );
}
