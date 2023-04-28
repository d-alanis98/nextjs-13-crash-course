'use client';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
// API
import { searchCourses } from '@/api/courses';
// Types
import { CourseData } from '@/types/courses';

const CourseSearch = ({ setTopLevelCourses }: {
  setTopLevelCourses: (value: CourseData[]) => void;
}) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const courses = await searchCourses(query);
    setTopLevelCourses(courses);
  }
  
  return (
    <form onSubmit={handleSubmit} className='search-form'>
        <input
          type='text'
          className='search-input'
          value={query}
          onChange={({ target: { value } }) => setQuery(value)}
          placeholder='Search courses...'
        />
        <button className='search-button' type='submit'>
          Search
          <FaSearch style={{ marginLeft: '0.5rem'}}/>
        </button>
    </form>
  )
}

export default CourseSearch
