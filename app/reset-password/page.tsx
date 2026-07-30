"use client";

import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50 h-screen w-full font-sans text-gray-800 antialiased flex items-center justify-center p-4 lg:p-6 overflow-hidden relative">
      {/* Vệt sáng trang trí */}
      <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[45%] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[45%] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* BEGIN: MainContainer */}
      {/* Đổi thành max-w-6xl để rộng bằng form Login */}
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

        {/* BEGIN: RightFormSection - Tỷ lệ w-1/2 (50%), đệm đồng bộ với Login */}
        <div className="w-full lg:w-1/2 h-full p-6 lg:p-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-white relative">
          
          {/* Back Link - Bỏ absolute để thuận tiện khi cuộn */}
          <Link
            className="inline-flex items-center gap-1.5 text-emerald-600 font-medium hover:underline transition-colors text-[13px]"
            href="/login"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Quay lại
          </Link>

          {/* Form Wrapper - Đẩy dịch xuống dưới bằng mt-10 lg:mt-16 và tạo khoảng trống phía dưới pb-8 để dễ cuộn */}
          <div className="max-w-[360px] w-full mx-auto mt-10 lg:mt-16 pb-8">
            {/* Form Heading */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2 mb-2">
                Đổi mật khẩu mới
                <div className="bg-emerald-50 text-emerald-500 p-1.5 rounded-lg border border-emerald-100">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
              </h2>
              <p className="text-gray-500 text-[13px] leading-relaxed">Vui lòng tạo mật khẩu mới cho tài khoản của bạn.</p>
            </div>

            {/* Change Password Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              
              {/* Field 1: New Password */}
              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Mật khẩu mới</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <input
                    className="pl-10 pr-10 block w-full rounded-xl border border-gray-300 hover:border-gray-400 shadow-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-[13px] py-2.5 transition-all outline-none"
                    placeholder="Nhập mật khẩu mới"
                    type="password"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center cursor-pointer">
                    <svg className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                </div>

                {/* Password Strength */}
                <div className="flex items-center gap-3 mt-2.5">
                  <span className="text-[11px] text-gray-500 whitespace-nowrap">
                    Độ mạnh: <span className="text-red-500 font-semibold ml-0.5">Yếu</span>
                  </span>
                  <div className="flex gap-1 flex-1">
                    <div className="h-1 flex-1 rounded-full bg-red-500"></div>
                    <div className="h-1 flex-1 rounded-full bg-gray-200"></div>
                    <div className="h-1 flex-1 rounded-full bg-gray-200"></div>
                    <div className="h-1 flex-1 rounded-full bg-gray-200"></div>
                    <div className="h-1 flex-1 rounded-full bg-gray-200"></div>
                  </div>
                </div>
              </div>

              {/* Field 2: Confirm Password */}
              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Xác nhận mật khẩu mới</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <input
                    className="pl-10 pr-10 block w-full rounded-xl border border-gray-300 hover:border-gray-400 shadow-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-[13px] py-2.5 transition-all outline-none"
                    placeholder="Nhập lại mật khẩu mới"
                    type="password"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center cursor-pointer">
                    <svg className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="space-y-1.5 mt-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <p className="text-[11px] font-medium text-gray-600 mb-1.5">Mật khẩu cần đáp ứng:</p>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-600">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Ít nhất 8 ký tự
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                    <div className="w-3 h-3 rounded-full border border-gray-300 flex items-center justify-center"></div>
                    Chữ hoa (A-Z)
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-600">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Có số (0-9)
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                    <div className="w-3 h-3 rounded-full border border-gray-300 flex items-center justify-center"></div>
                    Ký tự đặc biệt
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  className="w-full bg-emerald-500 text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors shadow-md shadow-emerald-500/20 active:scale-[0.98]"
                  type="submit"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  Xác nhận đổi mật khẩu
                </button>
              </div>
            </form>

            {/* Security Notice Footer */}
            <div className="mt-8 p-3.5 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-2.5">
              <div className="bg-emerald-100 p-1.5 rounded-md text-emerald-600 shrink-0">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h5 className="text-[12px] font-bold text-gray-900 mb-0.5">Bảo mật</h5>
                <p className="text-[11px] text-emerald-700 leading-relaxed">
                  Mật khẩu mới của bạn sẽ được mã hóa an toàn. Vui lòng không chia sẻ mật khẩu với bất kỳ ai.
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