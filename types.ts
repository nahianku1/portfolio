
export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  specialization: string;
  description: string;
  highlight?: boolean;
}
