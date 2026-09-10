"use client";

import React, { useState, useEffect } from "react";
import AnswerOption from "./AnswerOption";

interface QuestionContentProps {
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  markedQuestions: number[];
  setMarkedQuestions: React.Dispatch<React.SetStateAction<number[]>>;
  answeredQuestions: number[];
  setAnsweredQuestions: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function QuestionContent({
  currentQuestion,
  setCurrentQuestion,
  markedQuestions,
  setMarkedQuestions,
  answeredQuestions,
  setAnsweredQuestions,
}: QuestionContentProps) {
  const [answer, setAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  // Reset trạng thái trả lời (local) khi đổi câu hỏi (demo)
  useEffect(() => {
    setAnswer("");
    setSelectedOption(null);
  }, [currentQuestion]);

  const isMultipleChoice = currentQuestion % 2 === 0;
  const isMarked = markedQuestions.includes(currentQuestion);

  const toggleMark = () => {
    setMarkedQuestions((prev) =>
      prev.includes(currentQuestion)
        ? prev.filter((q) => q !== currentQuestion)
        : [...prev, currentQuestion]
    );
  };

  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Auto-save cho text input
  useEffect(() => {
    if (answer) {
      setIsSaving(true);
      setIsSaved(false);
      const timer = setTimeout(() => {
        setIsSaving(false);
        setIsSaved(true);
        if (!answeredQuestions.includes(currentQuestion)) {
          setAnsweredQuestions((prev) => [...prev, currentQuestion]);
        }
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsSaving(false);
      setIsSaved(false);
      setAnsweredQuestions((prev) => prev.filter((q) => q !== currentQuestion));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer]);

  const handleOptionClick = (val: string) => {
    setSelectedOption(val);
    if (!answeredQuestions.includes(currentQuestion)) {
      setAnsweredQuestions((prev) => [...prev, currentQuestion]);
    }
  };

  const handleInsertSymbol = (symbol: string) => {
    setAnswer((prev) => prev + symbol);
  };

  const mathSymbols = [
    { label: "Phân số", symbol: "/", display: "a/b" },
    { label: "Căn", symbol: "√", display: "√" },
    { label: "Số mũ", symbol: "^", display: "x²" },
    { label: "Vô cực", symbol: "∞", display: "∞" },
    { label: "Thuộc", symbol: "∈", display: "∈" },
    { label: "Hợp", symbol: "∪", display: "∪" },
    { label: "Giao", symbol: "∩", display: "∩" },
    { label: "Pi", symbol: "π", display: "π" },
  ];

  return (
    <section className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
      {/* Header câu hỏi */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 bg-slate-50/50 p-5 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100/50 text-emerald-600">
              <i className="fa-solid fa-layer-group text-sm" />
            </div>
            <h2 className="text-xl font-extrabold text-slate-800">
              Câu {currentQuestion}{" "}
              <span className="text-base font-medium text-slate-400">/ 30</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-md border border-emerald-200/60 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
              Trung bình
            </span>

            <span className="inline-flex items-center rounded-md border border-indigo-100 bg-indigo-50/50 px-2.5 py-1 text-xs font-semibold text-indigo-600">
              #DaoHam
            </span>

            <span className="inline-flex items-center rounded-md border border-indigo-100 bg-indigo-50/50 px-2.5 py-1 text-xs font-semibold text-indigo-600">
              #THPTQG
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={toggleMark}
            className={`group flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-semibold transition-all active:scale-95 ${
              isMarked
                ? "border-amber-200 bg-amber-50 text-amber-700 hover:border-amber-300 hover:bg-amber-100"
                : "border-transparent text-slate-500 hover:bg-amber-50 hover:text-amber-600"
            }`}
          >
            <i className={`${isMarked ? "fa-solid" : "fa-regular"} fa-flag transition-transform group-hover:scale-110`} />
            {isMarked ? "Bỏ đánh dấu" : "Đánh dấu"}
          </button>
        </div>
      </div>

      {/* Nội dung câu hỏi */}
      <div className="scrollbar-hide flex-1 overflow-y-auto p-5 sm:p-8">
        {/* Đề bài */}
        <div className="mb-8 rounded-xl bg-slate-50 p-6 text-base leading-relaxed text-slate-800 border border-slate-100">
          <p>
            Cho hàm số{" "}
            <span className="mx-1 inline-block rounded bg-white px-2 py-0.5 font-bold text-emerald-700 shadow-sm ring-1 ring-slate-200">
              y = f(x) = x³ - 3x² + 2
            </span>
            . Hàm số đã cho đồng biến trên khoảng nào dưới đây?
          </p>
        </div>

        {isMultipleChoice ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <AnswerOption 
              value="A" 
              label="A" 
              content="(-∞; 0)" 
              selected={selectedOption === "A"}
              onClick={() => handleOptionClick("A")}
            />
            <AnswerOption 
              value="B" 
              label="B" 
              content="(0; 2)" 
              selected={selectedOption === "B"}
              onClick={() => handleOptionClick("B")}
            />
            <AnswerOption 
              value="C" 
              label="C" 
              content="(1; +∞)" 
              selected={selectedOption === "C"}
              onClick={() => handleOptionClick("C")}
            />
            <AnswerOption 
              value="D" 
              label="D" 
              content="(-1; 1)" 
              selected={selectedOption === "D"}
              onClick={() => handleOptionClick("D")}
            />
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 shadow-sm">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Nhập câu trả lời của bạn vào đây..."
                className="min-h-[80px] w-full resize-y border-none bg-transparent p-4 pr-12 text-base font-medium text-slate-800 outline-none placeholder:font-normal placeholder:text-slate-400 focus:ring-0"
              />
              
              {/* Nút xoá (X) hiển thị khi có text */}
              {answer ? (
                <button
                  type="button"
                  onClick={() => setAnswer("")}
                  title="Xóa kết quả"
                  className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600 active:scale-95"
                >
                  <i className="fa-solid fa-xmark text-sm" />
                </button>
              ) : null}

              {/* Math Toolbar & Save Indicator */}
              <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 p-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="pl-2 pr-1 text-xs font-semibold text-slate-400">
                    Công cụ:
                  </span>
                  {mathSymbols.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleInsertSymbol(item.symbol)}
                      title={item.label}
                      className="flex h-7 min-w-[28px] items-center justify-center rounded border border-slate-200 bg-white px-2 text-xs font-bold text-slate-600 shadow-sm transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600 active:scale-95"
                    >
                      {item.display}
                    </button>
                  ))}
                </div>

                {/* Auto-save Indicator */}
                <div className="flex shrink-0 items-center justify-end px-2">
                  {isSaving && (
                    <span className="text-xs font-medium text-slate-400 animate-pulse">
                      Đang lưu...
                    </span>
                  )}
                  {isSaved && !isSaving && (
                    <span className="flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 transition-opacity duration-300">
                      <i className="fa-solid fa-check" />
                      Đã lưu đáp án
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Thông báo */}
        <div className="mt-8 flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/50 px-4 py-3 text-sm font-medium text-slate-500">
          <i className="fa-regular fa-eye text-emerald-500" />
          Bạn có thể xem đáp án chi tiết sau khi nộp bài.
        </div>

        {/* Ghi chú */}
        <div className="group mt-6 rounded-xl border border-amber-200/60 bg-amber-50/30 p-5 transition-colors focus-within:border-amber-300 focus-within:bg-amber-50/60 hover:border-amber-200">
          <div className="mb-3 flex items-center gap-2 font-bold text-amber-700">
            <i className="fa-solid fa-thumbtack -rotate-45" />
            <h4 className="text-sm tracking-wide">Ghi chú cá nhân</h4>
          </div>

          <textarea
            className="min-h-[48px] w-full resize-y border-none bg-transparent p-0 text-sm font-medium text-slate-700 outline-none placeholder:font-normal placeholder:text-amber-700/40 focus:ring-0"
            placeholder="Viết nháp, ghi chú hoặc công thức giải nhanh tại đây..."
          ></textarea>

          <div className="mt-3 flex justify-end">
            <span className="flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 transition-opacity duration-300">
              <i className="fa-solid fa-check" />
              Đã tự động lưu
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 bg-white p-5 sm:p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
        {/* Nút lùi */}
        <button
          type="button"
          onClick={() => setCurrentQuestion(p => Math.max(1, p - 1))}
          className="group flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-600 transition-all hover:bg-slate-50 hover:text-slate-900 hover:shadow-sm active:scale-95"
        >
          <i className="fa-solid fa-arrow-left text-slate-400 transition-transform group-hover:-translate-x-1 group-hover:text-slate-600" />
          Câu trước
        </button>

        {/* Cụm công cụ giữa */}
        <div className="hidden gap-3 md:flex">
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-500 transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-sm active:scale-95"
          >
            <i className="fa-regular fa-bookmark" />
            Lưu câu hỏi
          </button>
        </div>

        {/* Nút tiến */}
        <button
          type="button"
          onClick={() => setCurrentQuestion(p => Math.min(30, p + 1))}
          className="group relative flex items-center gap-2.5 overflow-hidden rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-600/30 active:translate-y-0 active:scale-95"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100" />
          <span className="relative z-10">Câu tiếp theo</span>
          <i className="fa-solid fa-arrow-right relative z-10 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
