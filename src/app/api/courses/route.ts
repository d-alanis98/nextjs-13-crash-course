import { NextResponse } from 'next/server';
import courses from './data.json' assert {
  type: 'json'
};


export const GET = async (request: Request) => {
  return NextResponse.json(courses);
}