import RecommendationCard from "./RecommendationCard";

const recommendations = [
  {
    id: 1,
    title: "Đạo hàm và ứng dụng",
    chapter: "Chương III - Bài 3",
    subject: "Toán học",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAd7I3HlXf53fIEEuZdn9nVYzz_6JOqPR_BKldKAzsVzGb9qXvkYAm5bmiuzAAl5PDKrBxWZSHcg2ysiAAWMPQxOSKqM62c5iSJdSnMu39ennPR0sWChpUl86aPBpP-oNO3T1tj6LZfsXrb9kG7wtN95LbhWV4xYRPguumXwSRIt6VVMHcvXjyQKZ-2Sa0axSJf3OOiM7xmeYs7vX1py0Vh1agS_82EDUoIw6Kn7nx4i8DArXFyEBvNgg",
    progress: 75,
    rating: 4.9,
    subjectColorClass: "text-blue-600 bg-blue-50/90",
  },
  {
    id: 2,
    title: "Dao động điều hòa",
    chapter: "Chương I - Bài 2",
    subject: "Vật lý",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQZuwLEyic_X60MSFdviUQNdZRj3aFYvnwAC8fqf96I1G06RF1qigGkkmw-d57yyVLYA8o2LRQ2CW6_0XDIwRTOsIL78afcVKdx8coy4Too8wFuVb7xwo8lxjsIpLMKuMljjfREK7BckEsjQGEBEojDfeKZSt527tEk6p1-V5VvxlxPCVw0DKEVKzqXo_8n_nRM5b6kC5FffojL4sK0drjSB1cy9VIMZq_OeGtuZPU2N9ZEC6prZ8NTw",
    progress: 50,
    rating: 4.8,
    subjectColorClass: "text-sky-600 bg-sky-50/90",
  },
  {
    id: 3,
    title: "Este - Lipit",
    chapter: "Chương III - Bài 1",
    subject: "Hóa học",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlVuxkgjS7cmFxrdSvo9SJHvSG5t8EgY5bqUFmLJ20oKoLcYiktrUsy53xSQsI9Vg0pVsrBHKTdu3OwyW0Oxt0TWAgiptsdxDhCWE0RAtxQxp4OOP4PJLiBDJ-2ZTQWEPPFBL-qAiHPh5hiCTDIJWf3Z6RrgQmFFR5uULBn94oxoSIrtmmNR6x08-a97r7qu0WlijKKlc4TuWRpAJCi83qCKl-FiUHgq0zELpJIVazrCK6sl8qF4nemA",
    progress: 40,
    rating: 4.7,
    subjectColorClass: "text-amber-600 bg-amber-50/90",
  },
  {
    id: 4,
    title: "Phản ứng oxi hóa khử",
    chapter: "Chương IV - Bài 2",
    subject: "Hóa học",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlVuxkgjS7cmFxrdSvo9SJHvSG5t8EgY5bqUFmLJ20oKoLcYiktrUsy53xSQsI9Vg0pVsrBHKTdu3OwyW0Oxt0TWAgiptsdxDhCWE0RAtxQxp4OOP4PJLiBDJ-2ZTQWEPPFBL-qAiHPh5hiCTDIJWf3Z6RrgQmFFR5uULBn94oxoSIrtmmNR6x08-a97r7qu0WlijKKlc4TuWRpAJCi83qCKl-FiUHgq0zELpJIVazrCK6sl8qF4nemA",
    progress: 60,
    rating: 4.6,
    subjectColorClass: "text-amber-600 bg-amber-50/90",
  },
];

export default function RecommendationSection() {
  const visibleRecommendations = recommendations.slice(0, 6);

  return (
    <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h2 className="mb-6 text-xl font-bold tracking-tight text-slate-800">
        Đề xuất dành cho bạn
      </h2>

      {/* Tabs */}
      <div className="mb-6 flex overflow-x-auto border-b border-slate-100 pb-[1px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <button
          type="button"
          className="shrink-0 border-b-2 border-emerald-500 px-5 py-2.5 text-sm font-bold text-emerald-600 transition-colors"
        >
          Bài học phù hợp
        </button>

        <button
          type="button"
          className="shrink-0 border-b-2 border-transparent px-5 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700"
        >
          Câu hỏi rèn luyện
        </button>

        <button
          type="button"
          className="shrink-0 border-b-2 border-transparent px-5 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700"
        >
          Đề thi đề xuất
        </button>
      </div>

      {/* 3 card mỗi hàng, tối đa 6 card */}
      <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {visibleRecommendations.map((item) => (
          <div key={item.id} className="h-full">
            <RecommendationCard
              title={item.title}
              chapter={item.chapter}
              subject={item.subject}
              image={item.image}
              progress={item.progress}
              rating={item.rating}
              subjectColorClass={item.subjectColorClass}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
