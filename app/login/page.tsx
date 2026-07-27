"use client";

import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F8FAFC] font-sans">
      {/* BEGIN: MainContent */}
      <main className="flex-grow flex items-center justify-center p-4 lg:p-6">
        <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row h-full min-h-[650px]">
          
          {/* BEGIN: LeftHeroSection */}
          <section
            className="hidden lg:flex w-1/2 relative bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlwtnB1q1lvpJbTNx-ACXovpOReMtgK9MctjXfAMEwclfHeEgS6Hq7oF9hAxEu_etCYI6iB1bH6aiZXYTC90kDgHsDFXf9cVMW6zKqVsQUEqPA8MCCzr6LGzvWPeXw7EqeBMB-wKUZuvnID76PVBiFN7JJrOOzk9qpnz5mKS3FlpJGiug1PKDz_6rfiTBN7UypgKOphll65HsjyZO2EQ5szN2BJGyiRViEZLruSOBeQTC7xf-q0AswZOZ9m8WymN6yUFWDsiA50iu-')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm p-10 flex flex-col justify-between text-white">
              {/* Logo & Brand */}
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg">
                  <i className="fa-solid fa-book-open text-primary text-lg"></i>
                </div>
                <h1 className="text-xl font-bold tracking-tight text-white drop-shadow-md">
                  EduQuest <span className="text-primary">AI</span>
                </h1>
              </div>

              {/* Hero Text */}
              <div className="mt-12">
                <h2 className="text-4xl font-extrabold mb-3 leading-tight drop-shadow-lg">
                  Học thông minh<br />
                  Thi hiệu quả
                </h2>
                <p className="text-base text-gray-100 max-w-sm drop-shadow-md">
                  Nền tảng học tập tích hợp AI, giúp bạn hiểu sâu - luyện giỏi - đạt điểm cao
                </p>
              </div>

              {/* Features List */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20">
                  <div className="bg-purple-100 p-2.5 rounded-lg text-purple-600">
                    <i className="fa-solid fa-book"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Thư viện kiến thức</h3>
                    <p className="text-xs text-gray-200 mt-0.5">
                      Hệ thống kiến thức từ lớp 6 đến 12, đầy đủ và dễ hiểu
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20">
                  <div className="bg-green-100 p-2.5 rounded-lg text-green-600">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Luyện tập thông minh</h3>
                    <p className="text-xs text-gray-200 mt-0.5">
                      Ngân hàng bài tập phong phú, cá nhân hóa theo năng lực
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20">
                  <div className="bg-orange-100 p-2.5 rounded-lg text-orange-600">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Đề thi &amp; phân tích AI</h3>
                    <p className="text-xs text-gray-200 mt-0.5">
                      Thi thử online, chấm điểm và phân tích điểm mạnh - yếu
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20">
                  <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">AI Tutor đồng hành</h3>
                    <p className="text-xs text-gray-200 mt-0.5">
                      Giải đáp mọi thắc mắc 24/7, giúp bạn học hiệu quả hơn
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* END: LeftHeroSection */}

          {/* BEGIN: RightLoginSection */}
          <section className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center bg-white">
            <div className="max-w-[360px] mx-auto w-full">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-1.5">Chào mừng trở lại! 👋</h2>
                <p className="text-sm text-gray-500">Đăng nhập để tiếp tục học tập</p>
              </div>

              {/* Login Form */}
              <form className="space-y-4">
                {/* Email Input */}
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1" htmlFor="email">
                    Email hoặc tên đăng nhập
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-regular fa-envelope text-gray-400 text-sm"></i>
                    </div>
                    <input
                      className="pl-9 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary text-sm py-2.5"
                      id="email"
                      placeholder="nhapemail@example.com"
                      type="email"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1" htmlFor="password">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-lock text-gray-400 text-sm"></i>
                    </div>
                    <input
                      className="pl-9 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary text-sm py-2.5"
                      id="password"
                      placeholder="Nhập mật khẩu"
                      type="password"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                      <i className="fa-regular fa-eye text-gray-400 hover:text-gray-600 text-sm"></i>
                    </div>
                  </div>
                  <div className="flex justify-end mt-1.5">
                    <Link className="text-[13px] text-secondary hover:text-indigo-500 font-medium" href="#">
                      Quên mật khẩu?
                    </Link>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                    type="submit"
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="mt-6 relative">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-white text-xs text-gray-400">hoặc đăng nhập với</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="mt-6 grid grid-cols-3 gap-2.5">
                <button type="button" className="flex justify-center items-center py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  <Image
                    unoptimized
                    alt="Google"
                    width={16}
                    height={16}
                    className="h-4 w-4 mr-1.5"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKoZwFG4av_P401AFXwxFRUN-EINrNsnEo1oABK9clybIAxcSYvYJXGBtadz_R6inBSmv7juJZGL6lAuf6sHfhqmrU-C54yghfGQ-kHZ-1HrkPQeoCj4xKyfs06aHQ2iput15zGdm7siyWKOwqSQckrbFJIaLW69gHsagxGZKlzrbkkdgPCJ6yrMFQiGPZvR2Kbgij2C0a8tfrxU8c73X884w6H6J-m_CiHAbNZoC-4-dqzBws2_D9s09lx6FzWQ-1ntnPoOX6v3ib"
                  />
                  Google
                </button>
                <button type="button" className="flex justify-center items-center py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  <i className="fa-brands fa-facebook text-[#1877F2] text-lg mr-1.5"></i>
                  Facebook
                </button>
                <button type="button" className="flex justify-center items-center py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  <i className="fa-brands fa-github text-gray-900 text-lg mr-1.5"></i>
                  GitHub
                </button>
              </div>

              {/* Register Link */}
              <p className="mt-6 text-center text-[13px] text-gray-600">
                Chưa có tài khoản?{" "}
                <Link className="font-medium text-secondary hover:text-indigo-500" href="#">
                  Đăng ký ngay
                </Link>
              </p>

              {/* Security Notice */}
              <div className="mt-8 bg-green-50 rounded-lg p-3.5 flex items-start gap-2.5 border border-green-100">
                <i className="fa-solid fa-shield-halved text-green-600 mt-0.5 text-sm"></i>
                <div>
                  <h4 className="text-[13px] font-medium text-green-800">An toàn &amp; bảo mật</h4>
                  <p className="text-[11px] text-green-600 mt-0.5">
                    Thông tin của bạn được bảo vệ tuyệt đối với công nghệ mã hóa hiện đại.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* END: RightLoginSection */}
        </div>
      </main>
      {/* END: MainContent */}

      {/* BEGIN: Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-users text-blue-500 text-base"></i>
              <div>
                <div className="font-bold text-gray-900 text-[13px]">50.000+</div>
                <div className="text-[11px]">Học sinh đang học</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-file-lines text-teal-500 text-base"></i>
              <div>
                <div className="font-bold text-gray-900 text-[13px]">10.000+</div>
                <div className="text-[11px]">Bài tập &amp; đề thi</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-arrow-trend-up text-green-500 text-base"></i>
              <div>
                <div className="font-bold text-gray-900 text-[13px]">98%</div>
                <div className="text-[11px]">Học sinh tiến bộ</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-headset text-purple-500 text-base"></i>
              <div>
                <div className="font-bold text-gray-900 text-[13px]">24/7</div>
                <div className="text-[11px]">AI Tutor hỗ trợ</div>
              </div>
            </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-col md:flex-row items-center gap-3 text-xs">
            <span className="font-medium text-gray-900">Về EduQuest AI</span>
            <div className="flex gap-3">
              <Link className="hover:text-gray-900 transition-colors" href="#">
                Giới thiệu
              </Link>
              <span className="text-gray-300">|</span>
              <Link className="hover:text-gray-900 transition-colors" href="#">
                Điều khoản
              </Link>
              <span className="text-gray-300">|</span>
              <Link className="hover:text-gray-900 transition-colors" href="#">
                Chính sách bảo mật
              </Link>
              <span className="text-gray-300">|</span>
              <Link className="hover:text-gray-900 transition-colors" href="#">
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </footer>
      {/* END: Footer */}
    </div>
  );
}