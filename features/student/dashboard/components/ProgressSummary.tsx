"use client";

interface ProgressItem {
  id: number;
  title: string;
  value: string;
  icon: string;
  containerClassName: string;
  titleClassName: string;
  textClassName: string;
  iconClassName: string;
}

const progressItems: ProgressItem[] = [
  {
    id: 1,
    title: "Tổng tiến độ",
    value: "85%",
    icon: "fa-solid fa-circle-notch",
    containerClassName: "border-gray-100 bg-gray-50",
    titleClassName: "text-gray-500",
    textClassName: "text-emerald-500",
    iconClassName: "text-emerald-500",
  },
  {
    id: 2,
    title: "Lý thuyết",
    value: "70%",
    icon: "fa-solid fa-book",
    containerClassName: "border-blue-100 bg-blue-50",
    titleClassName: "text-blue-600",
    textClassName: "text-blue-600",
    iconClassName: "text-blue-400",
  },
  {
    id: 3,
    title: "Luyện tập",
    value: "90%",
    icon: "fa-solid fa-pen-nib",
    containerClassName: "border-emerald-100 bg-emerald-50",
    titleClassName: "text-emerald-600",
    textClassName: "text-emerald-600",
    iconClassName: "text-emerald-500",
  },
  {
    id: 4,
    title: "Đề thi",
    value: "80%",
    icon: "fa-regular fa-file-lines",
    containerClassName: "border-purple-100 bg-purple-50",
    titleClassName: "text-purple-600",
    textClassName: "text-purple-600",
    iconClassName: "text-purple-400",
  },
];

export default function ProgressSummary() {
  return (
    // Bổ sung mt-6 để cách phần biểu đồ phía trên ra một khoảng
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {progressItems.map((item) => (
        <article
          key={item.id}
          className={`rounded-xl border p-3 text-center ${item.containerClassName}`}
        >
          {/* Cập nhật linh hoạt màu của Title thay vì để fix 1 màu xám */}
          <p className={`mb-1 text-xs font-medium ${item.titleClassName}`}>
            {item.title}
          </p>

          <div
            className={`flex items-center justify-center gap-2 ${item.textClassName}`}
          >
            <p className="text-xl font-bold">{item.value}</p>

            <i className={`${item.icon} ${item.iconClassName}`} />
          </div>
        </article>
      ))}
    </div>
  );
}