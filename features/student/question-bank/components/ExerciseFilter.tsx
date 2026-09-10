import Link from "next/link";
import React from "react";

export default function ExerciseFilter() {
  return (
    <div className="space-y-5">
      
      {/* Tiêu đề đã được chuyển ra ngoài */}
      <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800">
        1. Chọn bộ lọc để tạo bài luyện tập
      </h2>

      {/* Khối viền trắng chứa các bộ lọc */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        
        {/* Bộ lọc chính */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <FilterSelect label="Môn học" options={["Toán học"]} />
          <FilterSelect label="Lớp" options={["Lớp 12"]} />
          <FilterSelect label="Chương" options={["Chương I: Ứng dụng đạo hàm"]} />
          <FilterSelect label="Bài học" options={["Tất cả bài"]} />
        </div>

        {/* Filter chi tiết */}
        <div className="mb-8 grid grid-cols-1 gap-8 border-b border-slate-100 pb-8 md:grid-cols-2 xl:grid-cols-4">
          {/* Tags */}
          <div className="flex flex-col">
            <label className="mb-2 block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Chủ đề / Tag
            </label>

            {/* Custom Select Box */}
            <div className="relative mb-4">
              <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <select
                defaultValue=""
                className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-8 text-sm text-slate-600 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 hover:border-slate-300 hover:bg-slate-50 cursor-pointer"
              >
                <option value="" disabled hidden>
                  Tìm chủ đề hoặc tag...
                </option>
                <option>Hàm số</option>
                <option>Đạo hàm</option>
              </select>
              <i className="fa-solid fa-chevron-down absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-slate-400" />
            </div>

            {/* Selected Tags */}
            <div className="flex flex-wrap gap-2.5">
              {["#DaoHam", "#HamSo", "#TinhDonDieu"].map((tag) => (
                <span
                  key={tag}
                  className="group inline-flex items-center gap-1.5 rounded-lg border border-indigo-100 bg-indigo-50/50 py-1 pl-3 pr-1.5 text-xs font-medium text-indigo-700 transition-colors hover:bg-indigo-100"
                >
                  {tag}
                  <button
                    type="button"
                    className="flex h-5 w-5 items-center justify-center rounded-md text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 focus:outline-none"
                    aria-label={`Xóa tag ${tag}`}
                  >
                    <i className="fa-solid fa-xmark text-[10px]" />
                  </button>
                </span>
              ))}

              {/* Nút hiển thị tag ẩn */}
              <button
                type="button"
                className="inline-flex items-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:border-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                +2 khác
              </button>
            </div>
          </div>

          {/* Độ khó */}
          <CheckboxGroup
            title="Mức độ khó"
            items={[
              { label: "Dễ" },
              { label: "Trung bình", checked: true },
              { label: "Khó" },
            ]}
          />

          {/* Nhận thức */}
          <CheckboxGroup
            title="Mức độ nhận thức"
            items={[
              { label: "Nhận biết", checked: true },
              { label: "Thông hiểu", checked: true },
              { label: "Vận dụng" },
              { label: "Vận dụng cao" },
            ]}
          />

          {/* Loại câu */}
          <CheckboxGroup
            title="Loại câu hỏi"
            items={[
              { label: "Trắc nghiệm", checked: true },
              { label: "Đúng / Sai", checked: true },
              { label: "Trả lời ngắn", checked: true },
              { label: "Tự luận" },
            ]}
          />
        </div>

        {/* Cài đặt bài */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          {/* Số câu */}
          <div>
            <label className="mb-4 block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Số lượng câu hỏi
            </label>

            <input
              type="range"
              min="5"
              max="100"
              defaultValue="30"
              className="w-full accent-emerald-500 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
            />

            <div className="mt-3 flex justify-between text-xs font-medium text-slate-500">
              <span>5 câu</span>
              <span className="text-emerald-600 font-bold">30 câu</span>
              <span>100 câu</span>
            </div>
          </div>

          {/* Thời gian */}
          <div>
            <label className="mb-4 block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Thời gian làm bài
            </label>

            <div className="flex flex-wrap gap-3">
              {["Không giới hạn", "15 phút", "30 phút", "45 phút", "60 phút"].map(
                (time) => (
                  <label
                    key={time}
                    className="group flex cursor-pointer items-center gap-2 text-sm text-slate-600"
                  >
                    <input
                      type="radio"
                      name="time"
                      defaultChecked={time === "30 phút"}
                      className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-300 bg-white transition-all checked:border-[5px] checked:border-emerald-500 hover:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
                    />
                    <span className="font-medium transition-colors peer-checked:text-slate-900 group-hover:text-slate-900">
                      {time}
                    </span>
                  </label>
                ),
              )}
            </div>
          </div>

          {/* Trộn câu */}
          <div>
            <label className="mb-4 block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Trộn câu hỏi
            </label>

            <label className="group flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50/50 p-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:border-slate-200">
              <span className="font-medium transition-colors group-hover:text-slate-900">
                Trộn ngẫu nhiên thứ tự câu
              </span>

              {/* Vùng chứa Toggle Switch */}
              <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 transition-colors has-[:checked]:bg-emerald-500">
                <input type="checkbox" defaultChecked className="peer sr-only" />
                <span className="inline-block h-5 w-5 translate-x-0.5 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-5" />
              </div>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center">
          <button
            type="button"
            className="flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-100"
          >
            Nâng cao
            <i className="fa-solid fa-chevron-down text-[10px]" />
          </button>

          <div className="flex gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 focus:outline-none"
            >
              <i className="fa-solid fa-rotate-right" />
              Xóa bộ lọc
            </button>

            {/* <button
              type="button"
              className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-600 hover:shadow focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
            >
              <Link href="/student/question-bank/exercise" className="absolute inset-0 z-10" />
              <i className="fa-solid fa-wand-magic-sparkles" />
              Tạo bài luyện tập
            </button> */}

            <Link
              href="/student/practice"
              className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-600 hover:shadow focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
            >
              <i className="fa-solid fa-wand-magic-sparkles" />
              Tạo bài luyện tập
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

interface FilterSelectProps {
  label: string;
  options: string[];
}

function FilterSelect({ label, options }: FilterSelectProps) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-slate-700 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        <select className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-700 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 hover:border-slate-300 hover:bg-slate-50 cursor-pointer">
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-slate-400" />
      </div>
    </div>
  );
}

interface CheckboxItem {
  label: string;
  checked?: boolean;
}

interface CheckboxGroupProps {
  title: string;
  items: CheckboxItem[];
}

function CheckboxGroup({ title, items }: CheckboxGroupProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-4 block text-xs font-semibold text-slate-700 uppercase tracking-wider">
        {title}
      </label>

      <div className="space-y-3.5">
        {items.map((item) => (
          <label
            key={item.label}
            className="group flex cursor-pointer items-center gap-3"
          >
            {/* Box chứa checkbox và icon */}
            <div className="relative flex h-5 w-5 items-center justify-center">
              <input
                type="checkbox"
                defaultChecked={item.checked}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 bg-slate-50 transition-all checked:border-emerald-500 checked:bg-emerald-500 hover:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
              />
              {/* Icon FontAwesome sẽ hiện lên khi input bên trên (peer) được checked */}
              <i className="fa-solid fa-check absolute pointer-events-none text-xs text-white opacity-0 transition-all duration-200 scale-50 peer-checked:scale-100 peer-checked:opacity-100" />
            </div>

            <span className="text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-900 peer-checked:text-slate-900">
              {item.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
