"use client";

import Link from "next/link";
import Image from "next/image";


export default function Login() {
  return (
    <div className="h-screen w-full flex flex-col justify-center bg-gradient-to-br from-emerald-50 via-sky-50 to-indigo-50 font-sans overflow-hidden relative">
      {/* BEGIN: Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[45%] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[45%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      {/* END: Background Effects */}

      {/* BEGIN: MainContent */}
      <main className="w-full h-full flex items-center justify-center p-6 relative z-10">
        <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row h-full max-h-[640px] border border-emerald-200 shadow-[0_20px_50px_rgba(16,185,129,0.2)] ring-8 ring-white/50 relative z-20">
          {/* BEGIN: LeftHeroSection */}
          <section
            className="hidden lg:flex w-1/2 relative bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url('/images/features/login.jpg')" }}
          >
            {/* Nội dung đè lên trên nền */}
            <div className="relative z-10 p-8 flex flex-col justify-between h-full w-full">
              {/* Logo & Brand */}
              {/* CHUYỂN TỪ flex-col SANG HÀNG NGANG */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                  <i className="fas fa-book-open"></i>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 leading-none">
                    EduQuest <span className="text-emerald-600">AI</span>
                  </h1>
                  <p className="text-[10px] text-gray-600 font-medium mt-1">
                    Học thông minh, thi hiệu quả
                  </p>
                </div>
              </div>

              {/* Phần Text & Features ở nửa dưới */}
              <div>
                {/* Hero Text */}
                <div className="mb-5">
                  <h2 className="text-3xl font-extrabold mb-2 leading-tight text-gray-900">
                    Học thông minh
                    <br />
                    Thi hiệu quả
                  </h2>
                  <p className="text-[14px] text-gray-700 max-w-sm font-medium leading-relaxed">
                    Nền tảng học tập tích hợp AI, giúp bạn hiểu sâu - luyện giỏi
                    - đạt điểm cao
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-white/60 hover:bg-white/80 transition-colors p-3 rounded-xl border border-white/50 shadow-sm">
                    <div className="bg-purple-100 p-2 rounded-lg text-purple-600 shadow-sm">
                      <i className="fa-solid fa-book text-sm"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-[13px] text-gray-900">
                        Thư viện kiến thức
                      </h3>
                      <p className="text-[11px] text-gray-700 mt-0.5">
                        Hệ thống kiến thức từ lớp 6 đến 12, đầy đủ và dễ hiểu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/60 hover:bg-white/80 transition-colors p-3 rounded-xl border border-white/50 shadow-sm">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600 shadow-sm">
                      <i className="fa-solid fa-pen-to-square text-sm"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-[13px] text-gray-900">
                        Luyện tập thông minh
                      </h3>
                      <p className="text-[11px] text-gray-700 mt-0.5">
                        Ngân hàng bài tập phong phú, cá nhân hóa theo năng lực
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/60 hover:bg-white/80 transition-colors p-3 rounded-xl border border-white/50 shadow-sm">
                    <div className="bg-orange-100 p-2 rounded-lg text-orange-600 shadow-sm">
                      <i className="fa-solid fa-chart-line text-sm"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-[13px] text-gray-900">
                        Đề thi &amp; phân tích AI
                      </h3>
                      <p className="text-[11px] text-gray-700 mt-0.5">
                        Thi thử online, chấm điểm và phân tích điểm mạnh - yếu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/60 hover:bg-white/80 transition-colors p-3 rounded-xl border border-white/50 shadow-sm">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 shadow-sm">
                      <i className="fa-solid fa-robot text-sm"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-[13px] text-gray-900">
                        AI Tutor đồng hành
                      </h3>
                      <p className="text-[11px] text-gray-700 mt-0.5">
                        Giải đáp mọi thắc mắc 24/7, giúp bạn học hiệu quả hơn
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* END: LeftHeroSection */}

          {/* BEGIN: RightLoginSection */}
          <section className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center bg-white relative z-10">
            <div className="max-w-[360px] mx-auto w-full">
              {/* Header */}
              <div className="text-center mb-5">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Chào mừng trở lại! 👋
                </h2>
                <p className="text-[13px] text-gray-500">
                  Đăng nhập để tiếp tục học tập
                </p>
              </div>

              {/* Login Form */}
              <form className="space-y-3.5">
                {/* Email Input */}
                <div>
                  <label
                    className="block text-[13px] font-medium text-gray-700 mb-1.5"
                    htmlFor="email"
                  >
                    Email hoặc tên đăng nhập
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <i className="fa-regular fa-envelope text-gray-400 text-sm"></i>
                    </div>
                    <input
                      className="pl-10 block w-full rounded-xl border border-gray-300 hover:border-gray-400 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm py-2.5 outline-none transition-all"
                      id="email"
                      placeholder="nhapemail@example.com"
                      type="email"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label
                    className="block text-[13px] font-medium text-gray-700 mb-1.5"
                    htmlFor="password"
                  >
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <i className="fa-solid fa-lock text-gray-400 text-sm"></i>
                    </div>
                    <input
                      className="pl-10 pr-10 block w-full rounded-xl border border-gray-300 hover:border-gray-400 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm py-2.5 outline-none transition-all"
                      id="password"
                      placeholder="Nhập mật khẩu"
                      type="password"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center cursor-pointer">
                      <i className="fa-regular fa-eye text-gray-400 hover:text-gray-600 text-sm transition-colors"></i>
                    </div>
                  </div>
                  <div className="flex justify-end mt-2">
                    <Link
                      className="text-[12px] text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                      href="/forgot-password"
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>
                </div>

                {/* Submit Button*/}
                <div className="pt-2">
                  <button
                    className="w-full flex justify-center px-6 py-3 rounded-xl font-bold text-sm text-white whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    type="submit"
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="mt-5 relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-white text-[11px] text-gray-400">
                    hoặc đăng nhập với
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="mt-4 grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  className="flex justify-center items-center py-2 border border-gray-300 rounded-xl shadow-sm bg-white text-[12px] font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <i className="fa-brands fa-google text-[#DB4437] text-base mr-1.5"></i>
                  Google
                </button>
                <button
                  type="button"
                  className="flex justify-center items-center py-2 border border-gray-300 rounded-xl shadow-sm bg-white text-[12px] font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <i className="fa-brands fa-facebook text-[#1877F2] text-base mr-1.5"></i>
                  Facebook
                </button>
                <button
                  type="button"
                  className="flex justify-center items-center py-2 border border-gray-300 rounded-xl shadow-sm bg-white text-[12px] font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <i className="fa-brands fa-github text-gray-900 text-base mr-1.5"></i>
                  GitHub
                </button>
              </div>

              {/* Register Link */}
              <p className="mt-5 text-center text-[13px] text-gray-600">
                Chưa có tài khoản?{" "}
                <Link
                  className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                  href="/verify-otp"
                >
                  Đăng ký ngay
                </Link>
              </p>

              {/* Security Notice */}
              <div className="mt-5 bg-green-50 rounded-xl p-3 flex items-start gap-2.5 border border-green-100">
                <i className="fa-solid fa-shield-halved text-green-600 mt-0.5 text-xs"></i>
                <div>
                  <h4 className="text-[12px] font-semibold text-green-800">
                    An toàn &amp; bảo mật
                  </h4>
                  <p className="text-[11px] text-green-600 mt-0.5 leading-tight">
                    Thông tin của bạn được bảo vệ tuyệt đối với công nghệ mã hóa
                    hiện đại.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* END: RightLoginSection */}
        </div>
      </main>
      {/* END: MainContent */}
    </div>
  );
}
