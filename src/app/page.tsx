'use client';

import { useState, useEffect } from 'react';
// Components
import Courses from '@/components/Courses';
import Loading from './loading'; // We are importing it as a regular component
// API calls
import { fetchCourses } from '@/api/courses';
// Types
import type { CourseData } from '@/types/courses';
import CourseSearch from '@/components/CourseSearch';
const HomePage = () => {

  const [courses, setCourses] = useState<CourseData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const courses = await fetchCourses();
        setCourses(courses);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    })();
  }, []);

  if (loading)
    return <Loading />

  return (
    <div>
      <h1>Welcome to home page</h1>
      <CourseSearch 
        setTopLevelCourses={setCourses}
      />
      <Courses
        courses={courses}
      />
    </div>
  );
}

export default HomePage;