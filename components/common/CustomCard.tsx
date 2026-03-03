import { cardBorder } from "@/constants/ui";

interface CustomCardProps {
  className?: string;
  children: React.ReactNode;
}

export default function CustomCard({ className, children }: CustomCardProps) {
  return (
    <div className={`${cardBorder} rounded-md ${className}`}>{children}</div>
  );
}
