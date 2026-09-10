"use client";

const totalQuestions = 30;

interface QuestionNavigatorProps {
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  markedQuestions: number[];
  answeredQuestions: number[];
}

export default function QuestionNavigator({ currentQuestion, setCurrentQuestion, markedQuestions, answeredQuestions }: QuestionNavigatorProps) {
  const getButtonClass = (num: number) => {
    // 1. Đang chọn (Current)
    if (num === currentQuestion) {
      return `
        bg-emerald-600 text-white 
        shadow-md shadow-emerald-600/30 
        ring-4 ring-emerald-600/20 
        font-bold border-transparent
        scale-105 z-10
      `;
    }

    // 2. Đã trả lời (Answered) - Màu xanh lá
    if (answeredQuestions.includes(num)) {
      return `
        bg-emerald-500 text-white 
        border-emerald-500 font-bold 
        shadow-sm shadow-emerald-500/20
        hover:bg-emerald-600 hover:border-emerald-600
      `;
    }

    // 3. Đánh dấu để xem lại (Marked) - Màu vàng
    if (markedQuestions.includes(num)) {
      return `
        bg-amber-400 text-white 
        border-amber-400 font-bold 
        shadow-sm shadow-amber-400/20
        hover:bg-amber-500 hover:border-amber-500
      `;
    }

    // 4. Chưa làm (Default) - Trống màu trắng
    return `
      bg-white border-slate-200 text-slate-500 
      hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50/50 hover:shadow-sm
      font-semibold
    `;
  };

  return (
    <aside className="sticky top-6 flex w-full max-h-[calc(100vh-3rem)] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md xl:w-72">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-5 py-4">
        <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800">
          <i className="fa-solid fa-list-ul text-emerald-500" />
          Danh sách câu hỏi
        </h3>

        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700"
        >
          <i className="fa-solid fa-chevron-up text-[11px]" />
        </button>
      </div>

      {/* Chú thích (Legend) */}
      <div className="flex justify-between gap-2 border-b border-slate-50 bg-white px-5 py-3.5 text-[11px] font-bold text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-[4px] bg-emerald-500 shadow-sm shadow-emerald-500/20" />
          Đã làm
        </div>

        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-[4px] border-2 border-slate-200 bg-white" />
          Chưa làm
        </div>

        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-[4px] bg-amber-400 shadow-sm shadow-amber-400/20" />
          Đánh dấu
        </div>
      </div>

      {/* Danh sách câu hỏi */}
      <div className="scrollbar-hide flex-1 overflow-y-auto p-5">
        <div className="grid grid-cols-5 gap-2.5">
          {Array.from(
            { length: totalQuestions },
            (_, index) => index + 1
          ).map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setCurrentQuestion(num)}
              className={`relative flex aspect-square items-center justify-center rounded-xl border transition-all duration-200 active:scale-95 ${getButtonClass(num)}`}
            >
              {num}

              {/* Dấu chấm (Dot) báo hiệu câu bị đánh dấu */}
              {markedQuestions.includes(num) && (
                <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Nút Thu gọn */}
        <button
          type="button"
          className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-sm font-bold text-slate-500 transition-all hover:border-slate-300 hover:bg-slate-100 hover:text-slate-700 active:scale-[0.98]"
        >
          <i className="fa-solid fa-compress-alt text-[11px] text-slate-400 transition-transform group-hover:scale-110" />
          Thu gọn danh sách
        </button>
      </div>
    </aside>
  );
}