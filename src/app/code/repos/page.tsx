import React from 'react';
import Link from 'next/link';
// Constants
import { GITHUB_USERS } from '@/constants';

const ReposPage = () => (
  <div className='repos-container'>
    <ul className='repo-list'>
      {
        GITHUB_USERS.map(gitHubUser => (
          <li key={gitHubUser}>
            <Link href={`/code/repos/${ gitHubUser }`}>{ gitHubUser }</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

export default ReposPage;