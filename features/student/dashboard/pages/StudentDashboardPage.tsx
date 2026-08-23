import AchievementSection from "@/features/student/dashboard/components/AchievementSection";
import AiTutorBanner from "../components/AiTutorBanner";
import DailyTasks from "../components/DailyTasks";
import FavoriteSubjects from "../components/FavoriteSubjects";
import LearningProgress from "../components/LearningProgress";
import RecommendationSection from "../components/RecommendationSection";
import StatsSection from "../components/StatsSection";
import UpcomingSchedule from "../components/UpcomingSchedule";
import WelcomeSection from "../components/WelcomeSection";

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
