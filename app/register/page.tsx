"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50 h-screen w-full font-sans text-gray-800 antialiased flex items-center justify-center p-4 lg:p-6 overflow-hidden relative">
      {/* Vệt sáng trang trí */}
      <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[45%] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[45%] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* BEGIN: MainContainer */}
      <main className="w-full max-w-6xl bg-white rounded-3xl border border-emerald-200 shadow-[0_20px_50px_rgba(16,185,129,0.2)] ring-8 ring-white/50 overflow-hidden flex flex-col lg:flex-row h-full max-h-[640px] relative z-10">
        {/* BEGIN: LeftColumn (Branding & Features) */}
        <div className="hidden lg:flex w-1/2 relative flex-col p-8 h-full overflow-hidden">
          {/* ẢNH NỀN LÀM MỜ: Tách riêng ảnh nền, dùng inset âm để tránh viền mờ màu trắng, thêm blur-[3px] */}
          <div
            className="absolute inset-[-2%] bg-cover bg-center blur-[1px] z-0 pointer-events-none"
            style={{
              backgroundImage: "url('/images/features/register.png')",
            }}
          ></div>

          {/* LỚP PHỦ MỚI: Phủ một lớp màu trắng mỏng (40%) để làm dịu ảnh, giúp chữ tối màu nổi bật hoàn toàn */}
          <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col h-full justify-start w-full">
            {/* Header/Logo */}
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                <i className="fas fa-book-open"></i>
              </div>
              <span className="text-xl font-bold text-gray-900">
                EduQuest <span className="text-emerald-600">AI</span>
              </span>
            </div>

            {/* Content */}
            <div className="mb-2 mt-auto">
              <h1 className="text-2xl font-bold leading-tight mb-3 text-gray-900">
                Bắt đầu hành trình học tập
                <br />
                thông minh cùng EduQuest{" "}
                <span className="text-emerald-700">AI</span>
              </h1>
              <p className="text-gray-900 mb-6 text-[13px] leading-relaxed font-medium">
                Tạo tài khoản miễn phí để khám phá kho kiến thức,
                <br />
                luyện tập và chinh phục mọi mục tiêu học tập!
              </p>

              {/* Features List */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-3 bg-white/60 p-3.5 rounded-xl border border-white/50 shadow-sm transition-all hover:bg-white/80">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-[13px]">
                      Kho kiến thức phong phú
                    </h3>
                    <p className="text-gray-700 text-[11px] mt-0.5 leading-tight">
                      Hệ thống kiến thức từ lớp 6 đến 12, được xây dựng bám sát
                      chương trình.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/60 p-3.5 rounded-xl border border-white/50 shadow-sm transition-all hover:bg-white/80">
                  <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-[13px]">
                      Luyện tập hiệu quả
                    </h3>
                    <p className="text-gray-700 text-[11px] mt-0.5 leading-tight">
                      Ngân hàng bài tập đa dạng với lời giải chi tiết, phân tích
                      điểm mạnh, yếu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/60 p-3.5 rounded-xl border border-white/50 shadow-sm transition-all hover:bg-white/80">
                  <div className="w-9 h-9 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-[13px]">
                      Thi thử &amp; đánh giá năng lực
                    </h3>
                    <p className="text-gray-700 text-[11px] mt-0.5 leading-tight">
                      Thi thử THPTQG, kiểm tra định kỳ và đánh giá năng lực theo
                      chuẩn.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/60 p-3.5 rounded-xl border border-white/50 shadow-sm transition-all hover:bg-white/80">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-[13px]">
                      AI Tutor đồng hành
                    </h3>
                    <p className="text-gray-700 text-[11px] mt-0.5 leading-tight">
                      Trợ lý AI 24/7 giải đáp thắc mắc, gợi ý lộ trình học tập
                      cá nhân hóa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END: LeftColumn */}

        {/* BEGIN: RightColumn (Registration Form) */}
        {/* Đổi lg:w-[55%] thành w-full lg:w-1/2 giống trang Login */}
        <div className="w-full lg:w-1/2 h-full p-6 lg:p-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="max-w-md mx-auto">
            {/* Form Header */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Tạo tài khoản mới ✨
              </h2>
            </div>

            {/* Bước tiến độ */}
            <div className="max-w-[85%] mx-auto mb-8 mt-2">
              <div className="flex items-start justify-between relative">
                <div className="absolute left-0 right-0 top-3 h-[2px] bg-gray-100 z-0"></div>

                <div className="relative z-10 flex flex-col items-center bg-white px-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white text-[11px] flex items-center justify-center font-bold mb-1.5 shadow-md shadow-emerald-500/20 ring-4 ring-white">
                    1
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600">
                    Thông tin
                  </span>
                </div>

                <div className="relative z-10 flex flex-col items-center bg-white px-2">
                  <div className="w-6 h-6 rounded-full bg-gray-50 text-gray-400 border border-gray-200 text-[11px] flex items-center justify-center font-semibold mb-1.5 ring-4 ring-white transition-colors">
                    2
                  </div>
                  <span className="text-[11px] font-medium text-gray-400">
                    Vai trò
                  </span>
                </div>

                <div className="relative z-10 flex flex-col items-center bg-white px-2">
                  <div className="w-6 h-6 rounded-full bg-gray-50 text-gray-400 border border-gray-200 text-[11px] flex items-center justify-center font-semibold mb-1.5 ring-4 ring-white transition-colors">
                    3
                  </div>
                  <span className="text-[11px] font-medium text-gray-400">
                    Hoàn tất
                  </span>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <form className="space-y-4">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1">
                    Họ và tên
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <input
                      className="pl-9 w-full border border-gray-300 hover:border-gray-400 rounded-lg text-[13px] focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 py-2 outline-none transition-colors"
                      placeholder="Nhập họ và tên"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="4"
                          width="20"
                          height="16"
                          rx="2"
                          ry="2"
                        />
                        <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                      </svg>
                    </div>
                    <input
                      className="pl-9 w-full border border-gray-300 hover:border-gray-400 rounded-lg text-[13px] focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 py-2 outline-none transition-colors"
                      placeholder="Nhập email của bạn"
                      type="email"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Username & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1">
                    Tên đăng nhập
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <input
                      className="pl-9 w-full border border-gray-300 hover:border-gray-400 rounded-lg text-[13px] focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 py-2 outline-none transition-colors"
                      placeholder="Nhập tên đăng nhập"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1">
                    Số điện thoại{" "}
                    <span className="text-gray-400 font-normal">
                      (tùy chọn)
                    </span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <input
                      className="pl-9 w-full border border-gray-300 hover:border-gray-400 rounded-lg text-[13px] focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 py-2 outline-none transition-colors"
                      placeholder="Nhập số điện thoại"
                      type="tel"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Password & Confirm Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <input
                      className="pl-9 pr-9 w-full border border-gray-300 hover:border-gray-400 rounded-lg text-[13px] focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 py-2 outline-none transition-colors"
                      placeholder="Ít nhất 8 ký tự"
                      type="password"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                      <svg
                        className="h-4 w-4 text-gray-400 hover:text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1">
                    Xác nhận mật khẩu
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <input
                      className="pl-9 pr-9 w-full border border-gray-300 hover:border-gray-400 rounded-lg text-[13px] focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 py-2 outline-none transition-colors"
                      placeholder="Nhập lại mật khẩu"
                      type="password"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                      <svg
                        className="h-4 w-4 text-gray-400 hover:text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Password Requirements Box */}
              <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-100">
                <h4 className="text-[11px] font-semibold text-emerald-700 mb-1.5">
                  Yêu cầu mật khẩu
                </h4>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-emerald-700">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Ít nhất 8 ký tự
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Bao gồm 1 chữ số
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Chữ hoa & chữ thường
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Ít nhất 1 ký tự đặc biệt
                  </div>
                </div>
              </div>

              {/* Role Selection */}
              <div className="mt-5">
                <div className="mb-2.5">
                  <h3 className="text-[13px] font-semibold text-gray-900">
                    Chọn vai trò của bạn
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {/* Role 1 (Selected) */}
                  <div className="relative border-2 border-emerald-500 rounded-xl p-2 text-center cursor-pointer bg-emerald-50/50">
                    <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-2 h-2 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                        />
                      </svg>
                    </div>
                    <div className="w-10 h-10 mx-auto mb-1.5 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                      👦
                    </div>
                    <div className="font-semibold text-xs text-gray-900">
                      Học sinh
                    </div>
                  </div>

                  {/* Role 2 */}
                  <div className="relative border border-gray-200 rounded-xl p-2 text-center cursor-pointer hover:border-emerald-500 transition-colors">
                    <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 border-2 border-gray-300 rounded-full"></div>
                    <div className="w-10 h-10 mx-auto mb-1.5 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                      👩‍🏫
                    </div>
                    <div className="font-semibold text-xs text-gray-900">
                      Giáo viên
                    </div>
                  </div>

                  {/* Role 3 */}
                  <div className="relative border border-gray-200 rounded-xl p-2 text-center cursor-pointer hover:border-emerald-500 transition-colors">
                    <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 border-2 border-gray-300 rounded-full"></div>
                    <div className="w-10 h-10 mx-auto mb-1.5 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                      🏫
                    </div>
                    <div className="font-semibold text-xs text-gray-900">
                      Trường học
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[13px] text-gray-600 text-center mt-3">
                Đã có tài khoản?{" "}
                <Link
                  className="text-blue-500 font-medium hover:underline transition-colors"
                  href="/login"
                >
                  Đăng nhập
                </Link>
              </p>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl py-2.5 font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30 outline-none"
                  type="button"
                >
                  Tiếp tục
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>

              {/* Terms */}
              <div className="text-center text-[11px] text-gray-500 mt-3 pb-4">
                Bằng việc đăng ký, bạn đồng ý với{" "}
                <Link className="text-blue-500 hover:underline" href="#">
                  Điều khoản
                </Link>{" "}
                và{" "}
                <Link className="text-blue-500 hover:underline" href="#">
                  Bảo mật
                </Link>
              </div>
            </form>
          </div>
        </div>
        {/* END: RightColumn */}
      </main>
      {/* END: MainContainer */}
    </div>
  );
}
