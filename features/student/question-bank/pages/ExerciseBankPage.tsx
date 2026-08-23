import AiPracticeSuggestions from "@/features/student/question-bank/components/AiPracticeSuggestions";
import ExerciseBankHero from "@/features/student/question-bank/components/ExerciseBankHero";
import ExerciseBankTabs from "@/features/student/question-bank/components/ExerciseBankTabs";
import ExerciseFilter from "@/features/student/question-bank/components/ExerciseFilter";
import PracticeStatistics from "@/features/student/question-bank/components/PracticeStatistics";
import QuickPracticeActions from "@/features/student/question-bank/components/QuickPracticeActions";
import RecentExerciseHistory from "@/features/student/question-bank/components/RecentExerciseHistory";
import RecommendationExerciseSection from "@/features/student/question-bank/components/RecommendationExerciseSection";

export default function ExerciseBankPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl gap-6">
      {/* Nội dung chính */}
      <div className="flex min-w-0 flex-1 flex-col gap-6">
        <ExerciseBankHero />

        <ExerciseBankTabs />

        <ExerciseFilter />

        <RecommendationExerciseSection />

        <RecentExerciseHistory />
      </div>

      {/* Sidebar phải */}
      <aside className="hidden w-72 shrink-0 flex-col gap-6 xl:flex">
        <QuickPracticeActions />

        <PracticeStatistics />

        <AiPracticeSuggestions />
      </aside>
    </div>
  );
}