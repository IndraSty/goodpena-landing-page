import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, route: string) => {
  event.preventDefault();
  const elementId = route.replace('#', '');
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};