"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  label: string;
  href: string;
  icon: string;
}

const mainMenuItems: MenuItem[] = [
  {
    label: "Tổng quan",
    href: "/student/dashboard",
    icon: "fa-solid fa-house",
  },
  {
    label: "Thư viện kiến thức",
    href: "/student/library",
    icon: "fa-solid fa-book",
  },
  {
    label: "Ngân hàng bài tập",
    href: "/student/question-bank",
    icon: "fa-solid fa-layer-group",
  },
  {
    label: "Đề thi trực tuyến",
    href: "/student/exams",
    icon: "fa-regular fa-file-lines",
  },
  {
    label: "Lịch sử học tập",
    href: "/student/history",
    icon: "fa-solid fa-clock-rotate-left",
  },
  {
    label: "Kết quả & Báo cáo",
    href: "/student/reports",
    icon: "fa-solid fa-chart-pie",
  },
  {
    label: "Yêu thích",
    href: "/student/favorites",
    icon: "fa-solid fa-heart",
  },
  {
    label: "Ghi chú của tôi",
    href: "/student/notes",
    icon: "fa-regular fa-note-sticky",
  },
];

const supportMenuItems: MenuItem[] = [
  {
    label: "AI Tutor",
    href: "/student/ai-tutor",
    icon: "fa-solid fa-robot",
  },
  {
    label: "Ôn tập thông minh",
    href: "/student/smart-review",
    icon: "fa-solid fa-brain",
  },
  {
    label: "Flashcard",
    href: "/student/flashcards",
    icon: "fa-solid fa-clone",
  },
  {
    label: "Bảng xếp hạng",
    href: "/student/ranking",
    icon: "fa-solid fa-trophy",
  },
  {
    label: "Bạn bè",
    href: "/student/friends",
    icon: "fa-solid fa-user-group",
  },
];

export default function StudentSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/student/dashboard") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  return (
    <aside className="z-20 flex h-full w-64 shrink-0 flex-col overflow-y-auto border-r border-gray-100 bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-gray-50 p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-xl font-bold text-white shadow-lg shadow-emerald-500/30">
          <i className="fas fa-book-open"></i>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
            EduQuest <span className="text-emerald-500">AI</span>
          </h1>
          <p className="text-[11px] font-medium text-gray-400">
            Học thông minh, thi hiệu quả
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1.5 p-4">
        {mainMenuItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 relative overflow-hidden ${
                active
                  ? "bg-emerald-50 text-emerald-600 font-semibold"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium"
              }`}
            >
              {active && (
                <div className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-emerald-500" />
              )}
              <div className={`flex items-center justify-center w-6 transition-transform duration-200 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
                <i className={`${item.icon} text-lg ${active ? 'text-emerald-600' : 'text-gray-400 group-hover:text-emerald-500'}`} />
              </div>
              <span className="text-[14px]">{item.label}</span>
            </Link>
          );
        })}

        <div className="pb-2 pt-6">
          <p className="px-3 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            Công cụ hỗ trợ
          </p>
        </div>

        {supportMenuItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 relative overflow-hidden ${
                active
                  ? "bg-emerald-50 text-emerald-600 font-semibold"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium"
              }`}
            >
              {active && (
                <div className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-emerald-500" />
              )}
              <div className={`flex items-center justify-center w-6 transition-transform duration-200 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
                <i className={`${item.icon} text-lg ${active ? 'text-emerald-600' : 'text-gray-400 group-hover:text-emerald-500'}`} />
              </div>
              <span className="text-[14px]">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Study progress */}
      <div className="m-5 shrink-0 relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-5 shadow-lg shadow-emerald-500/25">
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 blur-xl" />
        <div className="absolute -bottom-8 -left-4 h-24 w-24 rounded-full bg-black/10 blur-xl" />
        
        <div className="relative z-10">
          <div className="mb-2 flex items-center gap-2">
            <i className="fa-solid fa-fire text-yellow-300"></i>
            <p className="text-sm font-bold text-white">
              Giữ vững nhịp độ!
            </p>
          </div>

          <p className="mb-4 text-xs font-medium text-emerald-100">
            Hoàn thành mục tiêu hôm nay nhé!
          </p>

          {/* BỎ 'overflow-hidden' ở thẻ div này để bóng phát sáng của thẻ con không bị cắt */}
          <div className="mb-2 h-2 rounded-full bg-black/20">
            <div
              className="h-full rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={{ width: "70%" }}
            />
          </div>

          <p className="mb-4 text-right text-[11px] font-bold text-white">
            7/10 bài
          </p>

          <Link
            href="/student/learning-progress"
            className="block w-full rounded-xl bg-white/20 py-2.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-emerald-600 hover:shadow-md"
          >
            Tiếp tục học
          </Link>
        </div>
      </div>
    </aside>
  );
}