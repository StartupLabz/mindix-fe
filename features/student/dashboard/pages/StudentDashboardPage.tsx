import AchievementSection from "@/features/student/dashboard/components/AchievementSection";
import AiTutorBanner from "@/features/student/dashboard/components/AiTutorBanner";
import DailyTasks from "@/features/student/dashboard/components/DailyTasks";
import FavoriteSubjects from "@/features/student/dashboard/components/FavoriteSubjects";
import LearningProgress from "@/features/student/dashboard/components/LearningProgress";
import RecommendationSection from "@/features/student/dashboard/components/RecommendationSection";
import StatsSection from "@/features/student/dashboard/components/StatsSection";
import UpcomingSchedule from "@/features/student/dashboard/components/UpcomingSchedule";
import WelcomeSection from "@/features/student/dashboard/components/WelcomeSection";

export default function StudentDashboardPage() {
  return (
    <>
      <WelcomeSection />

      <StatsSection />

      <div className="mb-8 grid grid-cols-1 items-stretch gap-6 xl:grid-cols-3">
        {/* Cột trái */}
        <div className="h-full xl:col-span-2">
          <LearningProgress />
        </div>

        {/* Cột phải */}
        <div className="space-y-6">
          <FavoriteSubjects />
          <DailyTasks />
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecommendationSection />
        </div>

        <div className="space-y-6">
          <UpcomingSchedule />
          <AchievementSection />
        </div>
      </div>

      <AiTutorBanner />
    </>
  );
}
