import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* BEGIN: Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm overflow-visible">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                <i className="fas fa-book-open"></i>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-none">
                  EduQuest <span className="text-emerald-500">AI</span>
                </h1>
                <p className="text-[10px] text-gray-500 font-medium">
                  Học thông minh, thi hiệu quả
                </p>
              </div>
            </div>

            {/* Navigation & Actions - */}
            <div className="hidden lg:flex items-center ml-8 lg:ml-12 lg:gap-4 xl:gap-6 whitespace-nowrap">
              {/* Menu Links */}
              <nav className="flex items-center lg:gap-4 xl:gap-6">
                <Link
                  className="text-gray-600 hover:text-emerald-500 font-medium text-sm transition-colors"
                  href="#"
                >
                  Trang chủ
                </Link>
                <Link
                  className="text-gray-600 hover:text-emerald-500 font-medium text-sm transition-colors"
                  href="#"
                >
                  Thư viện kiến thức
                </Link>
                <Link
                  className="text-gray-600 hover:text-emerald-500 font-medium text-sm transition-colors"
                  href="#"
                >
                  Luyện tập
                </Link>
                <Link
                  className="text-gray-600 hover:text-emerald-500 font-medium text-sm transition-colors"
                  href="#"
                >
                  Đề thi trực tuyến
                </Link>
                <Link
                  className="text-gray-600 hover:text-emerald-500 font-medium text-sm transition-colors"
                  href="#"
                >
                  AI Tutor
                </Link>
                <Link
                  className="text-gray-600 hover:text-emerald-500 font-medium text-sm transition-colors"
                  href="#"
                >
                  Bảng xếp hạng
                </Link>
                <Link
                  className="text-gray-600 hover:text-emerald-500 font-medium text-sm transition-colors"
                  href="#"
                >
                  Blog
                </Link>
              </nav>

              {/* Vạch kẻ phân cách */}
              <div className="h-5 w-px bg-gray-400 mx-1"></div>

              {/* Auth Buttons */}
              <div className="flex items-center gap-3 flex-wrap xl:flex-nowrap">
                <div className="min-w-[220px] flex-1">
                  <input
                    className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    placeholder="Tìm kiếm bài học..."
                    type="text"
                  />
                </div>
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-emerald-500 font-medium text-sm whitespace-nowrap"
                >
                  Đăng nhập
                </Link>
                <Link
                  href="/register"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors shadow-md whitespace-nowrap"
                >
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* END: Header */}

      {/* BEGIN: Hero Section */}
      <section className="bg-[linear-gradient(135deg,#e0f2fe_0%,#dcfce7_100%)] relative overflow-hidden py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-amber-400/30 text-sm font-medium text-amber-400 mb-6">
                <i className="fas fa-star text-xs"></i>
                Nền tảng học tập ứng dụng AI hàng đầu cho học sinh, sinh viên
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Học thông minh cùng AI
                <br />
                <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                  Chinh phục mọi kỳ thi
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                EduQuest AI là hệ sinh thái học tập toàn diện với Thư viện kiến
                thức, Ngân hàng bài tập và Đề thi trực tuyến, giúp bạn học hiệu
                quả, luyện tập thông minh và đạt kết quả vượt trội.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold text-lg flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/30">
                  Bắt đầu miễn phí{" "}
                  <i className="fas fa-arrow-right text-sm"></i>
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-3 rounded-full font-semibold text-lg flex items-center gap-2 transition-all shadow-sm">
                  Khám phá thư viện{" "}
                  <i className="fas fa-play-circle text-emerald-500"></i>
                </button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-600">
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
              {/* Thẻ 1: Video bài giảng (Góc trên, trái) */}
              <div
                className="absolute top-[15%] -left-12 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce z-10"
                style={{ animationDuration: "3s" }}
              >
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-violet-500">
                  <i className="fas fa-video"></i>
                </div>
                <span className="font-semibold text-sm text-gray-800">
                  Video bài giảng
                </span>
              </div>

              {/* Thẻ 2: Công thức LaTex (Góc dưới, trái) */}
              <div
                className="absolute bottom-[20%] -left-6 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce z-10 hidden sm:flex"
                style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500">
                  <i className="fas fa-square-root-alt"></i>
                </div>
                <span className="font-semibold text-sm text-gray-800">
                  Công thức LaTex
                </span>
              </div>

              {/* Thẻ 3: Ngân hàng câu hỏi (Góc trên, phải) */}
              <div
                className="absolute top-[25%] -right-10 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce z-10 hidden sm:flex"
                style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
              >
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  <i className="fas fa-layer-group"></i>
                </div>
                <span className="font-semibold text-sm text-gray-800">
                  Ngân hàng câu hỏi
                </span>
              </div>

              {/* Thẻ 4: Đề thi mô phỏng (Góc dưới, phải) */}
              <div
                className="absolute bottom-[15%] -right-4 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce z-10"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <span className="font-semibold text-sm text-gray-800">
                  Đề thi mô phỏng
                </span>
              </div>

              {/* Hình ảnh chính */}
              <Image
                unoptimized
                width={800}
                height={500}
                alt="Học sinh học tập cùng AI"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover relative z-0"
                src="../../images/landingpage.png"
              />
            </div>
          </div>
        </div>
      </section>
      {/* END: Hero Section */}

      {/* BEGIN: Feature Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-green-50 rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-green-100 hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-emerald-500 text-2xl shadow-sm shrink-0">
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
                    className="text-emerald-500 font-semibold text-sm flex items-center gap-1 hover:underline"
                    href="#"
                  >
                    Khám phá ngay <i className="fas fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-blue-100 hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-blue-500 text-2xl shadow-sm shrink-0">
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
                    className="text-blue-500 font-semibold text-sm flex items-center gap-1 hover:underline"
                    href="#"
                  >
                    Luyện tập ngay{" "}
                    <i className="fas fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-purple-50 rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-purple-100 hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-violet-500 text-2xl shadow-sm shrink-0">
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
                    className="text-violet-500 font-semibold text-sm flex items-center gap-1 hover:underline"
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

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-24">
        {/* BEGIN: Grid Section (Process, Subjects, Stats) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Process */}
          <section className="lg:col-span-1">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Quy trình học tập khép kín
            </h2>
            <div className="flex items-center justify-between text-center relative">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -z-10 -translate-y-1/2"></div>

              <div className="flex flex-col items-center gap-2 bg-gray-50 px-2">
                <div className="w-12 h-12 bg-green-100 text-primary rounded-full flex items-center justify-center shadow-sm">
                  <i className="fa-solid fa-book-open text-xl"></i>
                </div>
                <p className="text-xs font-semibold text-primary">
                  1. Học lý thuyết
                </p>
              </div>
              <i className="fa-solid fa-chevron-right text-gray-300 bg-gray-50 text-sm"></i>

              <div className="flex flex-col items-center gap-2 bg-gray-50 px-2">
                <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center shadow-sm">
                  <i className="fa-solid fa-pencil text-xl"></i>
                </div>
                <p className="text-xs font-semibold text-blue-500">
                  2. Luyện tập
                </p>
              </div>
              <i className="fa-solid fa-chevron-right text-gray-300 bg-gray-50 text-sm"></i>

              <div className="flex flex-col items-center gap-2 bg-gray-50 px-2">
                <div className="w-12 h-12 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center shadow-sm">
                  <i className="fa-solid fa-file-lines text-xl"></i>
                </div>
                <p className="text-xs font-semibold text-purple-500">
                  3. Làm đề thi
                </p>
              </div>
              <i className="fa-solid fa-chevron-right text-gray-300 bg-gray-50 text-sm"></i>

              <div className="flex flex-col items-center gap-2 bg-gray-50 px-2">
                <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center shadow-sm">
                  <i className="fa-solid fa-chart-bar text-xl"></i>
                </div>
                <p className="text-xs font-semibold text-orange-500">
                  4. Xem kết quả
                </p>
              </div>
              <i className="fa-solid fa-chevron-right text-gray-300 bg-gray-50 text-sm"></i>

              <div className="flex flex-col items-center gap-2 bg-gray-50 px-2">
                <div className="w-12 h-12 bg-teal-100 text-teal-500 rounded-full flex items-center justify-center shadow-sm">
                  <i className="fa-solid fa-rotate-right text-xl"></i>
                </div>
                <p className="text-xs font-semibold text-teal-500">
                  5. Ôn tập lại
                </p>
              </div>
            </div>
          </section>

          {/* Subjects */}
          <section className="lg:col-span-1">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Học mọi môn, không giới hạn
            </h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                  <i className="fa-solid fa-calculator text-xl"></i>
                </div>
                <span className="text-xs text-gray-600">Toán học</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
                  <i className="fa-solid fa-book-bookmark text-xl"></i>
                </div>
                <span className="text-xs text-gray-600">Ngữ văn</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500">
                  <i className="fa-solid fa-language text-xl"></i>
                </div>
                <span className="text-xs text-gray-600">Tiếng Anh</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-500">
                  <i className="fa-solid fa-atom text-xl"></i>
                </div>
                <span className="text-xs text-gray-600">Vật lý</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-500">
                  <i className="fa-solid fa-flask text-xl"></i>
                </div>
                <span className="text-xs text-gray-600">Hóa học</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500">
                  <i className="fa-solid fa-seedling text-xl"></i>
                </div>
                <span className="text-xs text-gray-600">Sinh học</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600">
                  <i className="fa-solid fa-landmark text-xl"></i>
                </div>
                <span className="text-xs text-gray-600">Lịch sử</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-500">
                  <i className="fa-solid fa-earth-americas text-xl"></i>
                </div>
                <span className="text-xs text-gray-600">Địa lý</span>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="lg:col-span-1">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              EduQuest AI trong con số
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                <i className="fa-solid fa-graduation-cap text-3xl text-primary mb-2 mx-auto"></i>
                <h4 className="text-xl font-bold text-gray-900">20.000+</h4>
                <p className="text-xs text-gray-500">Học sinh đang học</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                <i className="fa-solid fa-file-lines text-3xl text-blue-500 mb-2 mx-auto"></i>
                <h4 className="text-xl font-bold text-gray-900">5.000+</h4>
                <p className="text-xs text-gray-500">Bài học chất lượng</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                <i className="fa-solid fa-circle-question text-3xl text-orange-500 mb-2 mx-auto"></i>
                <h4 className="text-xl font-bold text-gray-900">100.000+</h4>
                <p className="text-xs text-gray-500">Câu hỏi đa dạng</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                <i className="fa-solid fa-trophy text-3xl text-purple-500 mb-2 mx-auto"></i>
                <h4 className="text-xl font-bold text-gray-900">1.000+</h4>
                <p className="text-xs text-gray-500">Đề thi chuẩn</p>
              </div>
            </div>
          </section>
        </div>
        {/* END: Grid Section */}

        {/* BEGIN: Testimonials & AI Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Testimonials */}
          <section>
            <h3 className="text-lg font-bold mb-6">
              Học sinh nói gì về EduQuest AI ✨
            </h3>
            <div className="space-y-4">
              {/* Review 1 */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0">
                  <Image
                    src="/images/students/nguyenminhanh.png"
                    alt="Nguyễn Minh Anh"
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm">Nguyễn Minh Anh</h4>
                    <span className="text-yellow-400 text-xs">★★★★★</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">
                    Học sinh lớp 12 - Hà Nội
                  </p>
                  <p className="text-sm text-gray-600">
                    "EduQuest AI giúp mình học tập có hệ thống hơn rất nhiều.
                    Kho bài giảng chi tiết, bài tập đa dạng và dễ hiểu."
                  </p>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0">
                  <Image
                    src="/images/students/tranlehoang.png"
                    alt="Trần Lê Hoàng"
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm">Trần Lê Hoàng</h4>
                    <span className="text-yellow-400 text-xs">★★★★★</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">
                    Học sinh lớp 10 - TP.HCM
                  </p>
                  <p className="text-sm text-gray-600">
                    "Tính năng AI Tutor thật sự rất tuyệt vời! Mỗi khi gặp bài
                    toán khó, mình đều được hướng dẫn giải đáp cặn kẽ từng bước
                    một."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AI Banner */}
          <section>
            <div className="flex-1">
              <h2 className="text-lg font-bold mb-6">
                Sức mạnh AI đồng hành cùng bạn
              </h2>
              <p className="text-slate-600 mb-10">
                Trải nghiệm phương pháp học tập tương lai với trợ lý ảo thông
                minh.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-emerald-500">
                    <svg
                      className="w-6 h-6"
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
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Smart Recommendation
                    </h4>
                    <p className="text-sm text-slate-500">
                      Gợi ý lộ trình học tập phù hợp với năng lực của bạn.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-purple-600">
                    <svg
                      className="w-6 h-6"
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
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Learning Analytics
                    </h4>
                    <p className="text-sm text-slate-500">
                      Phân tích quá trình học tập đưa ra lộ trình tối ưu.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-orange-600">
                    <svg
                      className="w-6 h-6"
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
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Instant Feedback
                    </h4>
                    <p className="text-sm text-slate-500">
                      Giải đáp thắc mắc tức thì và giải chi tiết cho từng câu
                      hỏi.
                    </p>
                  </div>
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
      <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
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
                  <p className="text-[10px] text-gray-500 font-medium">
                    Học thông minh, thi hiệu quả
                  </p>
                </div>
              </div>
            </div>
            {/* Social icons placeholder */}
            <div className="flex gap-4 mt-4 text-gray-400">
              <Link className="hover:text-blue-500 transition" href="#">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link className="hover:text-blue-500 transition" href="#">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Sản phẩm</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link className="hover:text-green-500 transition" href="#">
                  Thư viện kiến thức
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-500 transition" href="#">
                  Ngân hàng bài tập
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-500 transition" href="#">
                  Đề thi trực tuyến
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-500 transition" href="#">
                  AI Tutor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link className="hover:text-green-500 transition" href="#">
                  Hướng dẫn sử dụng
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-500 transition" href="#">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-500 transition" href="#">
                  Liên hệ hỗ trợ
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-500 transition" href="#">
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Về chúng tôi</h4>
            <ul className="space-y-2 text-sm text-gray-600 mb-4">
              <li>
                <Link className="hover:text-green-500 transition" href="#">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-500 transition" href="#">
                  Blog
                </Link>
              </li>
            </ul>
            <h4 className="font-bold text-gray-900 mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>hello@eduquest.ai</li>
              <li>0123 456 789</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500">
          © 2024 EduQuest AI. Tất cả quyền được bảo lưu.
        </div>
      </footer>
      {/* END: Footer */}
    </div>
  );
}
