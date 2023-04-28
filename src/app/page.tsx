// Components
import Courses from '@/components/Courses';

const HomePage = () => {
  return (
    <div>
       <h1>Welcome to home page</h1>
       {/* @ts-expect-error Server Component */}
       <Courses />
    </div>
  );
}

export default HomePage;