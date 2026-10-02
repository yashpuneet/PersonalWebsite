/**
 * Data Types for Inktober files
 */

export interface InktoberEntry {
  day: number;
  prompt: string;
  imageSrc: string;
  orientation: 'horizontal' | 'vertical';
  medium?: string;
  completed: boolean;
}