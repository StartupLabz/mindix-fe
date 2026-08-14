"use client";

import StatCard from "./StatCard";

const dashboardStats = [
  {
    id: 1,
    title: "Bài học đã học",
    value: "128",
    description: "12 bài so với tuần trước",
    icon: "fa-solid fa-book-open",
    valueClassName: "text-emerald-500",
    iconClassName: "bg-orange-100 text-orange-500",
    descriptionClassName: "text-emerald-600 bg-emerald-50",
  },
  {
    id: 2,
    title: "Câu hỏi đã làm",
    value: "2.345",
    description: "320 câu so với tuần trước",
    icon: "fa-solid fa-clipboard-question",
    valueClassName: "text-blue-600",
    iconClassName: "bg-blue-100 text-blue-500",
    descriptionClassName: "text-blue-600 bg-blue-50",
  },
  {
    id: 3,
    title: "Đề thi đã làm",
    value: "24",
    description: "5 đề so với tuần trước",
    icon: "fa-solid fa-file-signature",
    valueClassName: "text-purple-600",
    iconClassName: "bg-purple-100 text-purple-500",
    descriptionClassName: "text-purple-600 bg-purple-50",
  },
  {
    id: 4,
    title: "Điểm trung bình",
    value: "8.6",
    suffix: "/10",
    description: "0.6 điểm so với tuần trước",
    icon: "fa-solid fa-trophy",
    valueClassName: "text-amber-500",
    iconClassName: "bg-amber-100 text-amber-500",
    descriptionClassName: "text-emerald-600 bg-emerald-50",
  },
  {
    id: 5,
    title: "Chuỗi ngày học",
    value: "12",
    suffix: "ngày",
    description: "Cố gắng duy trì nhé!",
    icon: "fa-regular fa-calendar",
    valueClassName: "text-red-500",
    iconClassName: "bg-red-100 text-red-500",
    descriptionClassName: "text-red-500 bg-red-50",
    highlighted: true,
  },
];

export default function StatsSection() {
  return (
    <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
      {dashboardStats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          suffix={stat.suffix}
          description={stat.description}
          icon={stat.icon}
          valueClassName={stat.valueClassName}
          iconClassName={stat.iconClassName}
          descriptionClassName={stat.descriptionClassName}
          highlighted={stat.highlighted}
        />
      ))}
    </section>
  );
}