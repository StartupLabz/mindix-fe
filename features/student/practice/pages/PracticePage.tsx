"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AiTutorPanel from "@/features/student/practice/components/AiTutorPanel";
import QuestionContent from "@/features/student/practice/components/QuestionContent";
import QuestionNavigator from "@/features/student/practice/components/QuestionNavigator";
import QuizHeader from "@/features/student/practice/components/QuizHeader";

export default function PracticePage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(12);
  const [markedQuestions, setMarkedQuestions] = useState<number[]>([3, 19]);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([1, 2, 6, 11]);
  const [showExitModal, setShowExitModal] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* 1. Nền trang (Background Color) */}
      <div className="fixed inset-0 -z-20 bg-emerald-50/40" />
      
      {/* 2. Họa tiết lưới mờ (Dot Pattern) */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]" />

      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 relative z-0">
        
        {/* Nhóm Header & Nút Back */}
        <div className="flex flex-col gap-4">
          {/* Nút Back nằm trần trên nền */}
          <button 
            onClick={() => setShowExitModal(true)}
            className="group flex w-fit items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-slate-800"
          >
            <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1" />
            Quay lại
          </button>

          <QuizHeader answeredCount={answeredQuestions.length} totalCount={30} />
        </div>

      <div className="flex flex-col items-start gap-6 xl:flex-row">
        {/* Navigator (Left Sidebar) */}
        <div className="w-full shrink-0 xl:w-72">
          <QuestionNavigator 
            currentQuestion={currentQuestion} 
            setCurrentQuestion={setCurrentQuestion} 
            markedQuestions={markedQuestions}
            answeredQuestions={answeredQuestions}
          />
        </div>

        {/* Main Content (Center) */}
        <div className="flex min-w-0 flex-1 flex-col">
          <QuestionContent 
            currentQuestion={currentQuestion} 
            setCurrentQuestion={setCurrentQuestion} 
            markedQuestions={markedQuestions}
            setMarkedQuestions={setMarkedQuestions}
            answeredQuestions={answeredQuestions}
            setAnsweredQuestions={setAnsweredQuestions}
          />
        </div>

        {/* AI Tutor (Right Sidebar) */}
        <div className="w-full shrink-0 xl:w-72">
          <AiTutorPanel />
        </div>
      </div>
      </div>
      
      {/* Modal Xác nhận Thoát */}
      {showExitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-500">
              <i className="fa-solid fa-arrow-right-from-bracket text-xl translate-x-0.5" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-800">Thoát bài luyện tập?</h3>
            <p className="mb-6 text-sm text-slate-600">
              Bạn có chắc chắn muốn quay lại trang trước? Tiến độ làm bài của bạn đã được hệ thống lưu lại tự động.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowExitModal(false)}
                className="flex-1 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-bold text-slate-600 transition-all hover:bg-slate-50 active:scale-95"
              >
                Ở lại
              </button>
              <button
                onClick={() => {
                  setShowExitModal(false);
                  router.push("/student/question-bank");
                }}
                className="flex-1 rounded-xl bg-slate-800 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg active:scale-95"
              >
                Đồng ý thoát
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
