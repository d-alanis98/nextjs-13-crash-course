import Link from 'next/link';
import React from 'react'

type RepoDirsProps = {
  name: string;
  user: string;
};

type RepoObject = {
  type: string;
  name: string;
  path: string;
};

const fetchRepoContents = async ({
  userName,
  repoName
}: {
  userName: string;
  repoName: string;
}): Promise<Array<RepoObject>> => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  })
  const response = await fetch(`https://api.github.com/repos/${userName}/${repoName}/contents`, {
    next: {
      revalidate: 60
    }
  });
  return await response.json();
};

const RepoDirs = async ({ 
  name, 
  user 
}: RepoDirsProps) => {
  const repoObjectsData = await fetchRepoContents({
    userName: user,
    repoName: name
  });

  const repoDirsData = repoObjectsData.filter(repoObject => repoObject.type === 'dir');
  

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {
          repoDirsData.map(({
            path: dirPath
          }) => (
            <li key={dirPath}>
              <Link href={`/code/repos/${user}/${name}/${dirPath}`}>
                {dirPath}
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default RepoDirs;