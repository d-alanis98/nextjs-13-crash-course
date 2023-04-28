import { CourseData } from '@/types/courses';

export const fetchCourses = async (): Promise<CourseData[]> => {
  const response = await fetch('http://localhost:3000/api/courses');
  return await response.json();
}

export const searchCourses = async (query: string): Promise<CourseData[]> => {
  const response = await fetch(`http://localhost:3000/api/courses/search?name=${query}`);
  return await response.json();
} 