export interface RecommendedExercise {
  id: number;
  title: string;
  chapter: string;
  questionCount: number;
  duration: number;
  difficulty: string;
  practiceCount: string;

  icon: string;
  topBorderClassName: string;
  iconContainerClassName: string;
  difficultyDotClassName: string;
}

export interface QuickPracticeAction {
  id: number;
  title: string;
  description: string;
  icon: string;
  containerClassName: string;
  iconClassName: string;
}

export interface PracticeStatistic {
  id: number;
  label: string;
  value: string;
  icon: string;
  iconClassName: string;
  valueClassName?: string;
}

export interface RecentExercise {
  id: number;
  title: string;
  questionCount: number;
  difficulty: string;
  correctRate: string;
  duration: string;
}

export interface AiSuggestion {
  id: number;
  content: string;
  highlight: string;
  action: string;
}