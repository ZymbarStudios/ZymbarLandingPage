import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const animationFadeUpType = "fade-up";
export const animationFadeRightType = "fade-right";
export const animationDuration = '500';
export const animationDelay = '300';