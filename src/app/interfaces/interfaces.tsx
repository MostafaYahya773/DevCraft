export interface Box {
  img: string;
  title?: string;
  posation?: string;
  id: number;
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}
