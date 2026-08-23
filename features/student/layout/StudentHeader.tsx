"use client";

import { useState } from "react";
import Link from "next/link";

export default function StudentHeader() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between gap-4 border-b border-gray-100 bg-white/80 backdrop-blur-md px-4 md:px-8 shadow-sm">
      {/* Search */}
      <div className="relative flex-1 max-w-[200px] sm:max-w-xs lg:max-w-md lg:w-96 group">
        <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="w-full rounded-full border border-gray-200 bg-gray-50/50 py-2 pl-11 pr-4 text-sm text-gray-700 outline-none transition-all duration-200 hover:bg-gray-100 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 placeholder:text-gray-400"
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-1">
        <Link
          href="#"
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600"
        >
          <i className="fa-solid fa-bolt text-emerald-500/70"></i> Luyện tập nhanh
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600"
        >
          <i className="fa-regular fa-file-lines text-emerald-500/70"></i> Đề thi thử
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600"
        >
          <i className="fa-solid fa-robot text-emerald-500/70"></i> AI Tutor
        </Link>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notifications */}
        <button
          type="button"
          aria-label="Xem thông báo"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-700 active:scale-95"
        >
          <i className="fa-regular fa-bell text-[20px]" />
          <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-red-500 text-[9px] font-bold text-white shadow-sm">
            3
          </span>
        </button>

        {/* Divider */}
        <div className="hidden h-8 w-px bg-gray-200 sm:block"></div>

        {/* Profile */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsProfileMenuOpen((current) => !current)}
            className="group flex items-center gap-2 sm:gap-3 rounded-full border border-transparent p-1 pr-3 transition-all duration-200 hover:bg-gray-50 hover:border-gray-200 active:bg-gray-100"
          >
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full border border-gray-200 shadow-sm transition-transform duration-200 group-hover:scale-105 group-hover:border-emerald-300">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-9OqiGnbKg50CxhSGvQzKiuFSuLJsFO8vygU0EHsVrYpt9XaV418GSM5a9K3IctnbobbfZdSkkZT-pNPPg749HdoJcPHLeeOSMSUyWForVJf-w3-BhIuDhYi2aLvy2IfFe2kjI92x5Fxag9PVRaqRkbSb6n93YVp2Le6Ldsj247HPpDiq9QoFGnKJUBehy3OLFk7u9daCbZkOxpB2zAEtR_v14hYtX23yLaWOX8XgajhmDIZD3QMVug"
                alt="Ảnh đại diện học viên"
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="hidden sm:block text-left">
              <p className="text-[13px] font-semibold text-gray-700 leading-tight group-hover:text-gray-900 transition-colors">Minh Anh</p>
              <p className="text-[11px] font-medium text-gray-500 leading-tight">Học sinh</p>
            </div>

            <i
              className={`fa-solid fa-chevron-down ml-1 text-[10px] text-gray-400 transition-transform duration-300 ${
                isProfileMenuOpen ? "rotate-180 text-emerald-500" : "group-hover:text-gray-600"
              }`}
            />
          </button>

          {/* Dropdown profile */}
          {isProfileMenuOpen && (
            <div className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-56 origin-top-right overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50 ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-3 border-b border-gray-50 sm:hidden">
                <p className="text-sm font-semibold text-gray-800">Minh Anh</p>
                <p className="text-xs text-gray-500">Học sinh</p>
              </div>
              <div className="p-2">
                <Link
                  href="/student/profile"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <i className="fa-regular fa-user w-5 text-center text-gray-400" />
                  Hồ sơ cá nhân
                </Link>

                <Link
                  href="/student/settings"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <i className="fa-solid fa-gear w-5 text-center text-gray-400" />
                  Cài đặt
                </Link>
              </div>

              <div className="h-px w-full bg-gray-50" />

              <div className="p-2">
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket w-5 text-center text-red-400" />
                  Đăng xuất
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
