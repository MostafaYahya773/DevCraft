export interface Box {
  img: string;
  title?: string;
  posation?: string;
  id: number;
  socail?: string[];
}

export interface StarRatingProps {
  rate: number;
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export interface TeamSocailProps {
  linkedIn: string;
  github: string;
  facebook: string;
  whatsapp: string;
}

export interface Projects {
  id: number;
  name: string;
  description: string;
  images: string[];
  link: string;
}

export interface Whyus {
  title: string;
  description: string;
}
