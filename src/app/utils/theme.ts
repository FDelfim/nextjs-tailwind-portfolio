import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const themeClasses = {
  text: {
    primary: 'text-gray-800 dark:text-gray-100',
    secondary: 'text-gray-00 dark:text-gray-300',
    muted: 'text-gray-500 dark:text-gray-400',
    inverse: 'text-gray-100 dark:text-gray-800',
  },
  projectText: {
    title: 'bg-gradient-to-b dark:from-yellow-200 dark:to-yellow-500 from-blue-500 to-blue-800 bg-clip-text text-transparent',
    subtitle: 'text-gray-800 dark:text-gray-200',
    description: 'text-gray-700 dark:text-gray-300',
    muted: 'text-gray-500 dark:text-gray-400',
    inverse: 'text-gray-50 dark:text-gray-900',
  },
  experienceText: {
    title: 'bg-gradient-to-b dark:from-yellow-200 dark:to-yellow-500 from-blue-500 to-blue-800 bg-clip-text text-transparent',
    subtitle: 'text-gray-800 dark:text-gray-200',
    description: 'text-gray-700 dark:text-gray-300',
    muted: 'text-gray-500 dark:text-gray-400',
    inverse: 'text-gray-50 dark:text-gray-900',
  },
  background: {
    primary: 'bg-white dark:bg-gray-900',
    secondary: 'bg-gray-50 dark:bg-gray-800',
    muted: 'bg-gray-100 dark:bg-gray-700',
    overlay: 'bg-white/80 dark:bg-gray-900/80',
  },
  border: {
    primary: 'border-gray-200 dark:border-gray-700',
    secondary: 'border-gray-300 dark:border-gray-600',
  },
  hover: {
    primary: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    secondary: 'hover:bg-gray-200 dark:hover:bg-gray-700',
    text: 'hover:text-gray-900 dark:hover:text-gray-50',
  },
  button: {
    primary: 'bg-blue-500 dark:bg-blue-400 text-white hover:bg-opacity-90',
    secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100',
  },
  card: {
    primary: 'bg-white dark:bg-gray-800 shadow-lg',
    secondary: 'bg-gray-50 dark:bg-gray-700',
  },
  input: {
    primary: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400',
  },
  transition: {
    all: 'transition-all duration-200',
    colors: 'transition-colors duration-200',
    transform: 'transition-transform duration-200',
  },
  gradient: {
    primary: 'dark:from-yellow-300 dark:to-yellow-500 from-blue-500 to-blue-800',
  },
} as const

export function getThemeClasses(baseClasses: string, themeClasses: string[]) {
  return cn(baseClasses, ...themeClasses)
} 