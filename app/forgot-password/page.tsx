"use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50 h-screen w-full font-sans text-gray-800 antialiased flex items-center justify-center p-4 lg:p-6 overflow-hidden relative">
      {/* Vệt sáng trang trí */}
      <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[45%] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[45%] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* BEGIN: MainContainer */}
      {/* Đổi thành max-w-6xl để khung rộng bằng trang Login */}
      <main className="w-full max-w-6xl bg-white rounded-3xl border border-emerald-200 shadow-[0_20px_50px_rgba(16,185,129,0.2)] ring-8 ring-white/50 overflow-hidden flex flex-col lg:flex-row h-full max-h-[640px] relative z-10">
        
        {/* BEGIN: LeftColumn (Branding & Features) - Tỷ lệ w-1/2 (50%) */}
        <div className="hidden lg:flex lg:w-1/2 relative flex-col p-8 h-full overflow-hidden">
          {/* ẢNH NỀN LÀM MỜ: Tách riêng ảnh nền, dùng inset âm để tránh viền mờ màu trắng */}
          <div
            className="absolute inset-[-2%] bg-cover bg-center blur-[1px] z-0 pointer-events-none"
            style={{
              backgroundImage: "url('/images/features/login.jpg')",
            }}
          ></div>

          {/* LỚP PHỦ MỚI: Phủ một lớp màu trắng mỏng (20%) để làm dịu ảnh */}
          <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col h-full justify-start w-full">
            {/* Header/Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 shrink-0 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                <i className="fa-solid fa-book-open"></i>
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

            {/* Content */}
            <div className="mb-2 mt-auto">
              <h2 className="text-2xl font-bold leading-tight mb-3 text-gray-900 drop-shadow-md">
                Khôi phục tài khoản
                <br />
                Tiếp tục hành trình học tập
              </h2>
              <p className="text-gray-900 mb-6 text-[13px] leading-relaxed font-medium drop-shadow-md">
                Chỉ cần nhập email, chúng tôi sẽ gửi liên kết đặt lại mật khẩu cho bạn.
              </p>

              {/* Feature Cards */}
              <div className="space-y-3.5">
                {/* Feature 1 */}
                <div className="flex items-start gap-3 bg-white/60 hover:bg-white/80 transition-colors p-3 rounded-xl border border-white/50 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-shield-halved text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-[13px]">
                      Bảo mật tài khoản
                    </h3>
                    <p className="text-gray-700 text-[11px] mt-0.5 leading-tight">
                      Chúng tôi bảo vệ tài khoản của bạn với công nghệ mã hóa tiên tiến
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-3 bg-white/60 hover:bg-white/80 transition-colors p-3 rounded-xl border border-white/50 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-bolt text-green-500"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-[13px]">
                      Khôi phục nhanh
                    </h3>
                    <p className="text-gray-700 text-[11px] mt-0.5 leading-tight">
                      Quá trình khôi phục đơn giản, nhanh chóng và thuận tiện
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-3 bg-white/60 hover:bg-white/80 transition-colors p-3 rounded-xl border border-white/50 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-link text-orange-500"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-[13px]">
                      Liên kết an toàn
                    </h3>
                    <p className="text-gray-700 text-[11px] mt-0.5 leading-tight">
                      Liên kết đặt lại mật khẩu chỉ có hiệu lực trong thời gian ngắn
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-3 bg-white/60 hover:bg-white/80 transition-colors p-3 rounded-xl border border-white/50 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-headset text-blue-500"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-[13px]">
                      Hỗ trợ 24/7
                    </h3>
                    <p className="text-gray-700 text-[11px] mt-0.5 leading-tight">
                      Đội ngũ hỗ trợ luôn sẵn sàng giúp bạn mọi lúc mọi nơi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END: LeftColumn */}

        {/* BEGIN: RightFormSection */}
        <div className="w-full lg:w-1/2 h-full p-6 lg:p-8 flex flex-col justify-center overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative">
          
          {/* Nút Quay lại đăng nhập được đẩy lên góc trên cùng bên trái */}
          <Link
            className="absolute top-6 left-6 lg:top-8 lg:left-8 text-emerald-600 font-medium flex items-center gap-1.5 hover:underline transition-colors text-[13px]"
            href="/login"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Quay lại
          </Link>

          <div className="w-full max-w-[360px] mx-auto mt-8 lg:mt-0">
            
            {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-1.5 flex justify-center items-center gap-2">
                Quên mật khẩu? 🔑
              </h2>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                Nhập email đã đăng ký để nhận liên kết đặt lại mật khẩu.
              </p>
            </div>

            {/* Form Fields */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-regular fa-envelope text-gray-400 text-sm"></i>
                  </div>
                  <input
                    className="pl-9 block w-full border border-gray-300 hover:border-gray-400 rounded-lg text-[13px] focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 py-2.5 outline-none transition-colors"
                    id="email"
                    name="email"
                    placeholder="nhapemail@example.com"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div className="pt-2">
                <Link
                  className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-[13px] font-bold text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                  href="/verify-otp"
                >
                  <i className="fa-regular fa-envelope"></i>
                  Gửi liên kết đặt lại
                </Link>
              </div>
            </form>

            {/* Security Info Box */}
            <div className="mt-8 bg-emerald-50 rounded-xl p-3.5 flex items-start gap-2.5 border border-emerald-100">
              <div className="text-emerald-500 flex-shrink-0 mt-0.5">
                <i className="fa-solid fa-shield-halved text-sm"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[12px] mb-0.5">Bảo mật</h4>
                <p className="text-[11px] text-emerald-600 leading-tight">
                  Liên kết đặt lại mật khẩu sẽ hết hạn sau 15 phút để đảm bảo an toàn tài khoản.
                </p>
              </div>
            </div>

          </div>
        </div>
        {/* END: RightFormSection */}
      </main>
      {/* END: MainContainer */}
    </div>
  );
}