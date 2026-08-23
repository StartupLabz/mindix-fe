const tabs = [
  "Luyện tập",
  "Theo bài học",
  "Theo chủ đề",
  "Đề xuất cho bạn",
  "Bộ đề của tôi",
];

export default function ExerciseBankTabs() {
  return (
    <div className="flex overflow-x-auto border-b border-gray-200">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          type="button"
          className={`shrink-0 px-4 py-3 text-sm font-medium ${
            index === 0
              ? "border-b-2 border-emerald-500 text-emerald-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
