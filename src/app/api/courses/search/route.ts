import { NextResponse } from 'next/server';
// Data
import courses from '../data.json' assert {
  type: 'json',
};

export const GET = async (req: Request) => {
  const { url } = req;
  const { searchParams } = new URL(url);
  const idFilter = searchParams.get('id');
  const nameFilter = searchParams.get('name');

  const filteredCourses = courses.filter(course => {
    if (
      !!nameFilter && 
      !course.title
        .toLowerCase()
        .includes(
          nameFilter
            .toLowerCase()
        )
    )
      return false;
    if (!!idFilter && Number(idFilter) !== course.id)
      return false;
    return true;
    
  });

  return NextResponse.json(filteredCourses);
};