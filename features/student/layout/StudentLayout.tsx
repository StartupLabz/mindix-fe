import StudentHeader from "./StudentHeader";
import StudentSidebar from "./StudentSidebar";

interface StudentLayoutProps {
  children: React.ReactNode;
}

export default function StudentLayout({
  children,
}: StudentLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 selection:bg-emerald-500/30">
      <StudentSidebar />

      <div className="flex flex-1 flex-col overflow-hidden relative">
        {/* Các mảng màu nền mờ ảo (Background Blobs) giúp layout bớt trống */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-emerald-400/5 blur-[120px]" />
          <div className="absolute right-[5%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-400/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[30%] h-[600px] w-[600px] rounded-full bg-indigo-400/5 blur-[120px]" />
          
          {/* Tuỳ chọn thêm texture chấm bi siêu mờ nếu muốn nền có độ nhám */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
        </div>

        <StudentHeader />

        <main className="relative z-10 flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-[1600px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}