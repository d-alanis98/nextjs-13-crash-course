import React from 'react';
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

type RepoDataProps = {
  name: string;
  user: string;
};

const fetchRepoData = async ({ userName, repoName }: {
  userName: string,
  repoName: string
}) => {
  const response = await fetch(`https://api.github.com/repos/${ userName }/${ repoName }`, {
    next: {
      revalidate: 60
    }
  });
  return await response.json();
}

const RepoData = async ({ 
  name,
  user 
}: RepoDataProps) => {
  
  const repoData = await fetchRepoData({ 
    userName: user,
    repoName: name
  });
  
  return (
    <>
      <h2>{ repoData.name }</h2>
      <p>{ repoData.description }</p>
      <div className='card-stats'>
        <span>
          <FaStar />
          { repoData.stargazers_count }
        </span>
        <span>
          <FaCodeBranch />
          { repoData.forks_count }
        </span>
        <span>
          <FaEye />
          { repoData.watchers_count }
        </span>
      </div>
    </>
  )
}

export default RepoData;
