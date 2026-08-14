import {
  AiSuggestion,
  PracticeStatistic,
  QuickPracticeAction,
  RecentExercise,
  RecommendedExercise,
} from "../types/exerciseBank.type";

export const recommendedExercises: RecommendedExercise[] = [
  {
    id: 1,
    title: "Đạo hàm và ứng dụng",
    chapter: "Chương I - Ứng dụng đạo hàm",
    questionCount: 30,
    duration: 30,
    difficulty: "Trung bình",
    practiceCount: "2.4k",
    icon: "fa-solid fa-function",
    topBorderClassName: "bg-green-400",
    iconContainerClassName: "bg-green-50 text-green-500",
    difficultyDotClassName: "bg-yellow-400",
  },
  {
    id: 2,
    title: "Cực trị của hàm số",
    chapter: "Chương I - Ứng dụng đạo hàm",
    questionCount: 25,
    duration: 25,
    difficulty: "Trung bình",
    practiceCount: "1.8k",
    icon: "fa-solid fa-chart-line",
    topBorderClassName: "bg-blue-400",
    iconContainerClassName: "bg-blue-50 text-blue-500",
    difficultyDotClassName: "bg-yellow-400",
  },
  {
    id: 3,
    title: "Khảo sát hàm số",
    chapter: "Chương I - Ứng dụng đạo hàm",
    questionCount: 30,
    duration: 30,
    difficulty: "Khó",
    practiceCount: "1.2k",
    icon: "fa-solid fa-magnifying-glass-chart",
    topBorderClassName: "bg-purple-400",
    iconContainerClassName: "bg-purple-50 text-purple-500",
    difficultyDotClassName: "bg-red-400",
  },
  {
    id: 4,
    title: "Đề minh họa THPTQG 2024",
    chapter: "Tổng hợp - Toán 12",
    questionCount: 50,
    duration: 60,
    difficulty: "Trung bình",
    practiceCount: "3.6k",
    icon: "fa-solid fa-award",
    topBorderClassName: "bg-orange-400",
    iconContainerClassName: "bg-orange-50 text-orange-500",
    difficultyDotClassName: "bg-yellow-400",
  },
];

export const quickPracticeActions: QuickPracticeAction[] = [
  {
    id: 1,
    title: "Làm từng câu",
    description: "Trả lời và xem đáp án ngay",
    icon: "fa-solid fa-list-check",
    containerClassName: "hover:border-green-300 hover:bg-green-50",
    iconClassName: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    title: "Làm theo thời gian",
    description: "Thi đấu với thời gian",
    icon: "fa-regular fa-clock",
    containerClassName: "hover:border-blue-300 hover:bg-blue-50",
    iconClassName: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    title: "Làm ngẫu nhiên",
    description: "Hệ thống chọn ngẫu nhiên",
    icon: "fa-solid fa-shuffle",
    containerClassName: "hover:border-purple-300 hover:bg-purple-50",
    iconClassName: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Theo bài học",
    description: "Luyện tập theo từng bài",
    icon: "fa-solid fa-book-open",
    containerClassName: "border-orange-200 bg-orange-50",
    iconClassName: "bg-orange-100 text-orange-600",
  },
];

export const practiceStatistics: PracticeStatistic[] = [
  {
    id: 1,
    label: "Số câu đã luyện",
    value: "128",
    icon: "fa-solid fa-check",
    iconClassName: "bg-green-50 text-green-500",
    valueClassName: "text-green-500",
  },
  {
    id: 2,
    label: "Tỉ lệ đúng",
    value: "72%",
    icon: "fa-solid fa-bullseye",
    iconClassName: "bg-blue-50 text-blue-500",
  },
  {
    id: 3,
    label: "Thời gian luyện",
    value: "3h 24m",
    icon: "fa-regular fa-clock",
    iconClassName: "bg-orange-50 text-orange-500",
  },
  {
    id: 4,
    label: "Chuỗi ngày học",
    value: "12 ngày",
    icon: "fa-solid fa-fire",
    iconClassName: "bg-red-50 text-red-500",
  },
];

export const recentExercises: RecentExercise[] = [
  {
    id: 1,
    title: "Đạo hàm và ứng dụng",
    questionCount: 30,
    difficulty: "Trung bình",
    correctRate: "76%",
    duration: "28 phút",
  },
];

export const aiSuggestions: AiSuggestion[] = [
  {
    id: 1,
    content: "Bạn thường sai dạng bài",
    highlight: "Điểm kiện đồ",
    action: "Luyện thêm 15 câu",
  },
  {
    id: 2,
    content: "Ôn lại bài",
    highlight: "Tính đơn điệu của hàm số",
    action: "Ôn tập ngay",
  },
];