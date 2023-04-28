import React from 'react';
import Link from 'next/link';
import { 
  FaStar, 
  FaCodeBranch, 
  FaEye, 
} from 'react-icons/fa';

// Types
type UserReposPageProps = {
  params: {
    userName: string;
  };
};

type ReposRespone = {
  id: string;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
}

// Server side data
const fetchRepos = async (user: string) => {
  const response = await fetch(`https://api.github.com/users/${ user }/repos`, {
    next: {
      revalidate: 60
    }
  });
  return await response.json();
};

// Page
const UserReposPage = async ({ params }: UserReposPageProps) => {
  const { userName } = params;

  const repos: Array<ReposRespone> = await fetchRepos(userName as string);
  
  return (
    <div className='repos-container'>
      <h2>Repositories</h2>
      <ul className='repo-list'>
        { 
          repos.map(({
            id: repoId,
            name: repoName,
            forks_count: repoForks,
            stargazers_count: repoStars,
            description: repoDescription,
            watchers_count: repoWatchers
          }) => (
            <li key={repoId}>
              <Link href={`/code/repos/${userName}/${repoName}`}>
                <h3>{ repoName }</h3>
                <p>{ repoDescription }</p>
                <div className="repo-details">
                  <span>
                    <FaStar />
                    { repoStars }
                  </span>
                  <span>
                    <FaCodeBranch />
                    { repoForks }
                  </span>
                  <span>
                    <FaEye />
                    { repoWatchers }
                  </span>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default UserReposPage;
