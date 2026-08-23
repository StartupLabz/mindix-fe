import StudentLayout from "@/features/student/layout/StudentLayout";

interface StudentRootLayoutProps {
  children: React.ReactNode;
}

export default function StudentRootLayout({
  children,
}: StudentRootLayoutProps) {
  return <StudentLayout>{children}</StudentLayout>;
}