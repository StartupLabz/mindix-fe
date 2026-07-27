import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans flex items-center justify-center p-4 md:p-8 antialiased">
      {/* BEGIN: MainContainer */}
      <main className="w-full max-w-[1400px] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[800px]">
        
        {/* BEGIN: LeftColumn (Info Panel) */}
        <section 
          className="lg:w-1/2 bg-gradient-to-b from-[#f0f7ff] to-[#e0f2fe] p-8 lg:p-12 relative flex flex-col overflow-hidden bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGTy5q_NOjD0FTX7vGfMnchSXXhTP5VrAMeKsJrGGXIkQbMuXmqoQ7cDt0gyJMT_OIOt7bX6tpSSIeQhs1aSPZqmsx-5deJMyP0vcbDdG8PgaFC96SX-gUSuIpu45a5rd8560RCOCVL8zCbWDHkDZfvLzhu_CfW9cMmmTJeO28QsmsEB1OY4X3aI3HeLimocPXyFjxlpxslGIxlxeR8huwdF3GO9UPpoQvs2E92hRF_ux4kroLnUiBMgCDB1HB4NDLC1EkcPbCCaseBmw")' 
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-10 z-10">
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-bold text-gray-800">
              EduQuest <span className="text-green-500">AI</span>
            </span>
          </div>
          
          {/* Hero Text */}
          <div className="z-10 max-w-md">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Bắt đầu hành trình học tập thông minh cùng <span className="text-green-500">EduQuest AI</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Tạo tài khoản miễn phí để khám phá kho kiến thức, luyện tập và chinh phục mọi mục tiêu học tập!
            </p>
            
            {/* Features List */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Kho kiến thức phong phú</h3>
                  <p className="text-sm text-gray-500">Hệ thống kiến thức từ lớp 6 đến 12, được xây dựng bám sát chương trình.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Luyện tập hiệu quả</h3>
                  <p className="text-sm text-gray-500">Ngân hàng bài tập đa dạng với lời giải chi tiết, phân tích điểm mạnh, điểm yếu.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="mt-auto pt-10 z-10 w-full relative">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center shadow-sm text-sm">
              <div className="flex flex-col items-center">
                <span className="font-bold text-blue-600">50.000+</span>
                <span className="text-gray-500 text-xs">Học sinh</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-green-600">10.000+</span>
                <span className="text-gray-500 text-xs">Bài giảng</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-yellow-500">98%</span>
                <span className="text-gray-500 text-xs">Tiến bộ</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-purple-600">100%</span>
                <span className="text-gray-500 text-xs">Bảo mật</span>
              </div>
            </div>
          </div>
        </section>
        {/* END: LeftColumn */}

        {/* BEGIN: RightColumn (Form Panel) */}
        <section className="lg:w-1/2 p-8 lg:p-12 bg-white flex flex-col justify-center overflow-y-auto">
          <div className="max-w-xl w-full mx-auto space-y-8">
            
            {/* Form Header */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Tạo tài khoản mới ✨</h2>
              <p className="text-gray-500 mt-2">
                Đã có tài khoản? <Link className="text-blue-600 font-semibold hover:underline" href="#">Đăng nhập</Link>
              </p>
            </div>
            
            {/* Stepper */}
            <div className="flex items-center justify-between relative mb-8">
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
              <div className="flex items-center gap-2 bg-white pr-4">
                <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">1</div>
                <span className="text-sm font-semibold text-gray-900">Thông tin cá nhân</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4">
                <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs font-bold">2</div>
                <span className="text-sm text-gray-500">Chọn vai trò</span>
              </div>
              <div className="flex items-center gap-2 bg-white pl-4">
                <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs font-bold">3</div>
                <span className="text-sm text-gray-500">Hoàn tất</span>
              </div>
            </div>
            
            {/* Registration Form */}
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 py-2.5" placeholder="Nhập họ và tên" type="text" />
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 py-2.5" placeholder="Nhập email của bạn" type="email" />
                  </div>
                </div>
                
                {/* Username */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tên đăng nhập</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 py-2.5" placeholder="Nhập tên đăng nhập" type="text" />
                  </div>
                </div>
                
                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại (tùy chọn)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 py-2.5" placeholder="Nhập số điện thoại" type="tel" />
                  </div>
                </div>
                
                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 py-2.5" placeholder="Tạo mật khẩu (ít nhất 8 ký tự)" type="password" />
                  </div>
                </div>
                
                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Xác nhận mật khẩu</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 py-2.5" placeholder="Nhập lại mật khẩu" type="password" />
                  </div>
                </div>
              </div>
              
              {/* Password Requirements */}
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <p className="text-sm font-semibold text-green-800 mb-2">Yêu cầu mật khẩu</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-green-700">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" />
                    </svg> Ít nhất 8 ký tự
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" />
                    </svg> Bao gồm ít nhất 1 chữ số
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" />
                    </svg> Bao gồm chữ hoa và chữ thường
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" />
                    </svg> Bao gồm ít nhất 1 ký tự đặc biệt
                  </div>
                </div>
              </div>
              
              {/* Role Selection */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Chọn vai trò của bạn</h3>
                <p className="text-xs text-gray-500 mb-3">Bạn có thể thay đổi vai trò sau trong phần cài đặt</p>
                <div className="grid grid-cols-3 gap-3">
                  {/* Role: Student (Active) */}
                  <div className="border-2 border-green-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer relative bg-green-50/30">
                    <div className="absolute top-2 right-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-gray-200 rounded-full mb-2 overflow-hidden flex items-center justify-center text-2xl">👦</div>
                    <span className="font-bold text-sm text-gray-900">Học sinh</span>
                  </div>
                  {/* Role: Teacher */}
                  <div className="border border-gray-200 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer hover:border-blue-300 transition-colors">
                    <div className="w-12 h-12 bg-gray-100 rounded-full mb-2 overflow-hidden flex items-center justify-center text-2xl">👩‍🏫</div>
                    <span className="font-semibold text-sm text-gray-700">Giáo viên</span>
                  </div>
                  {/* Role: Org */}
                  <div className="border border-gray-200 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer hover:border-blue-300 transition-colors">
                    <div className="w-12 h-12 bg-gray-100 rounded-full mb-2 overflow-hidden flex items-center justify-center text-2xl">🏫</div>
                    <span className="font-semibold text-sm text-gray-700">Tổ chức</span>
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <button 
                className="w-full py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all" 
                type="button"
              >
                Tiếp tục →
              </button>
            </form>
            
            {/* Footer Links */}
            <p className="text-center text-xs text-gray-500">
              Bằng việc đăng ký, bạn đồng ý với <Link className="text-blue-600 hover:underline" href="#">Điều khoản sử dụng</Link> và <Link className="text-blue-600 hover:underline" href="#">Chính sách bảo mật</Link> của EduQuest AI
            </p>
          </div>
        </section>
        {/* END: RightColumn */}
      </main>
      {/* END: MainContainer */}
    </div>
  );
}