export interface ExperienceItem {
  company: string;
  logo: string; // Placeholder for logo path
  period: string;
  title: string;
  responsibilities: string[];
  achievements: string[];
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 0-100 for progress bar
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  // FIX: Allow the `size` prop for lucide-react icons, which are used in `Education.tsx`.
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

export interface CourseItem {
  name: string;
  category: 'Bases de datos' | 'Web' | 'Gestión' | 'Infraestructura';
}

export interface CareerDataPoint {
  year: number;
  roleType: number; // 1: Systems/Support, 2: Development, 3: Management
  roleName: string;
}