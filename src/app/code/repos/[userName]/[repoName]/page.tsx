import React, { Suspense } from 'react';
import Link from 'next/link';
// Components
import RepoData from '@/components/RepoData';
import RepoDirs from '@/components/RepoDirs';


type RepoDetailsProps = {
  params: {
    repoName: string;
    userName: string;
  }
};

const RepoDetails = ({ params }: RepoDetailsProps) => {
  const { repoName, userName } = params;
  return (
    <div className='card'>
      <Link 
        className='btn btn-back' 
        href={`/code/repos/${ userName }`}
      >
        Go back to repositories
      </Link>
      <Suspense
        fallback={<h4>Loading repo data...</h4>}
      >
        {/* @ts-expect-error Server Component */}
        <RepoData 
          name={repoName}
          user={userName}
        />
        {/* @ts-expect-error Server Component */}
        <RepoDirs 
          name={repoName}
          user={userName}
        />
      </Suspense>
    </div>
  );
};

export default RepoDetails
