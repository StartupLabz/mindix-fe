"use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50 h-screen w-full font-sans text-gray-800 antialiased flex items-center justify-center p-4 lg:p-6 overflow-hidden relative">
      {/* Vệt sáng trang trí */}
      <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[45%] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[45%] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* BEGIN: MainContainer */}
      {/* Đã đổi max-w-5xl thành max-w-6xl tại đây để đồng bộ kích thước khung */}
      <main className="w-full max-w-6xl bg-white rounded-3xl border border-emerald-200 shadow-[0_20px_50px_rgba(16,185,129,0.2)] ring-8 ring-white/50 overflow-hidden flex flex-col lg:flex-row h-full max-h-[640px] relative z-10">
        {/* BEGIN: LeftColumn (Branding & Features) - Cố định */}
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
                Chỉ cần nhập email, chúng tôi sẽ gửi liên kết đặt lại mật khẩu
                cho bạn.
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
                      Chúng tôi bảo vệ tài khoản của bạn với công nghệ mã hóa
                      tiên tiến
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
                      Liên kết đặt lại mật khẩu chỉ có hiệu lực trong thời gian
                      ngắn
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
        <section className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center relative bg-white">
          {/* Back Link */}
          <Link
            className="absolute top-6 left-6 lg:top-8 lg:left-8 text-emerald-600 font-medium flex items-center gap-1.5 hover:underline transition-colors text-[13px]"
            href="/forgot-password"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Quay lại
          </Link>

          <div className="max-w-[380px] w-full mx-auto mt-8 lg:mt-0">
            {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2 mb-2">
                Nhập mã OTP
                <svg
                  className="w-5 h-5 text-emerald-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    clipRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </h2>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                Vui lòng nhập mã 6 chữ số đã được gửi đến
                <br />
                <span className="font-semibold text-gray-800">
                  nhapemail@example.com
                </span>
                <Link
                  className="text-emerald-600 hover:underline ml-1.5 font-medium transition-colors"
                  href="/forgot-password"
                >
                  Đổi email
                </Link>
              </p>
            </div>

            {/* Form Elements */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* OTP Inputs */}
              <div className="flex justify-between gap-2 mb-2">
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    autoFocus={index === 0}
                    className={`w-[45px] h-[52px] sm:w-[50px] sm:h-[56px] text-center text-xl font-bold border rounded-xl outline-none transition-all ${
                      index === 0
                        ? "border-emerald-500 ring-2 ring-emerald-500/20"
                        : "border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    }`}
                    defaultValue={index === 0 ? "" : ""}
                    onInput={(e) => {
                      // Xóa tất cả các ký tự không phải là số (0-9)
                      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
                    }}
                  />
                ))}
              </div>

              <p className="text-center text-[12px] text-gray-500">
                Mã sẽ hết hạn sau{" "}
                <span className="font-bold text-emerald-600">15 phút</span>
              </p>

              {/* Submit Button */}
              <button
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                type="submit"
              >
                Xác nhận
              </button>

              {/* Divider */}
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-[11px] font-medium uppercase tracking-wider">
                  Chưa nhận được mã?
                </span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* Resend Button */}
              <button
                className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold text-[13px] py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                type="button"
              >
                <svg
                  className="w-4 h-4 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
                Gửi lại mã{" "}
                <span className="text-emerald-600 ml-0.5">(00:45)</span>
              </button>
            </form>

            {/* Security Note */}
            <div className="mt-8 bg-emerald-50 rounded-xl p-4 flex gap-3 items-start border border-emerald-100">
              <svg
                className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  clipRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <div>
                <h4 className="text-[12px] font-bold text-gray-900 mb-0.5">
                  Bảo mật
                </h4>
                <p className="text-[11px] text-emerald-700 leading-relaxed">
                  Mã OTP của bạn là duy nhất và chỉ có hiệu lực trong thời gian
                  ngắn. Không chia sẻ mã này với bất kỳ ai.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* END: RightFormSection */}
      </main>
      {/* END: MainContainer */}
    </div>
  );
}
