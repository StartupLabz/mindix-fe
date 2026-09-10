"use client";

import React from "react";

interface AnswerOptionProps {
  value: string;
  label: string;
  content: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function AnswerOption({
  value,
  label,
  content,
  selected = false,
  onClick,
}: AnswerOptionProps) {
  return (
    <label
      onClick={onClick}
      className={`group relative flex cursor-pointer items-center rounded-xl p-4 transition-all duration-200 active:scale-[0.99] ${
        selected
          ? "border-2 border-emerald-500 bg-emerald-50/60 shadow-md shadow-emerald-500/10"
          : "border-2 border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50 hover:shadow-sm"
      }`}
    >
      {/* sr-only tốt cho accessibility (trình đọc màn hình) hơn là hidden */}
      <input
        type="radio"
        name="answer"
        value={value}
        defaultChecked={selected}
        className="sr-only"
      />

      {/* Custom Radio Button */}
      <div
        className={`mr-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
          selected
            ? "border-emerald-500 bg-white shadow-sm"
            : "border-slate-300 bg-slate-50 group-hover:border-emerald-400 group-hover:bg-white"
        }`}
      >
        {/* Chấm tròn bên trong - Dùng scale để tạo hiệu ứng thu/phóng mượt mà thay vì unmount */}
        <div
          className={`h-2.5 w-2.5 rounded-full bg-emerald-500 transition-transform duration-300 ${
            selected ? "scale-100" : "scale-0"
          }`}
        />
      </div>

      {/* Nhãn (A, B, C, D) */}
      <span
        className={`mr-3 text-base font-extrabold transition-colors duration-200 ${
          selected ? "text-emerald-600" : "text-slate-400 group-hover:text-slate-600"
        }`}
      >
        {label}.
      </span>

      {/* Nội dung đáp án */}
      <span
        className={`text-base transition-colors duration-200 ${
          selected
            ? "font-bold text-emerald-800"
            : "font-medium text-slate-700 group-hover:text-slate-900"
        }`}
      >
        {content}
      </span>
    </label>
  );
}