import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { resolve } from 'path';
// Data
import courses from '../data.json' assert {
  type: 'json',
};

export const POST = async (req: Request) => {
  const { 
    link, 
    title, 
    level, 
    description 
  } = await req.json();

  const maxId = Math.max(...courses.map(course => course.id));

  const newCourse = {
    id: maxId + 1,
    link,
    title,
    level,
    description
  };

  const updatedCourses = courses.concat(newCourse);

  await writeFile(resolve(__dirname, '../../../../../../src/app/api/courses/data.json'), JSON.stringify(updatedCourses, null, 2));

  return NextResponse.json(newCourse);
}