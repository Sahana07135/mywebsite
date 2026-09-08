export interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  subtitle?: string;
  description: string;
  tags: string[];
  features?: string[];
  components?: string[];
  academicOutcome?: string;
  analyticalApproach?: string;
}

export interface AcademicMetric {
  id: string;
  badge: string;
  value: string;
  unit?: string;
  level: string;
  institution: string;
  badgeColor: 'primary' | 'secondary' | 'tertiary' | 'cyan';
  icon: string;
}

export interface SkillItem {
  name: string;
  subtitle: string;
  percentage: number;
  icon: string;
  colorClass: string;
  barColorClass: string;
}

export interface EducationItem {
  yearRange: string;
  status: string;
  isCurrent?: boolean;
  institution: string;
  degree: string;
  metricLabel: string;
  metricValue: string;
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface ToastMessage {
  id: number;
  text: string;
  type?: 'success' | 'info';
}
