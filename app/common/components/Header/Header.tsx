'use client';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='mx-2 flex items-center justify-between p-4 mb-10 bg-primary rounded-b-2xl'>
      <Link href='/'>
        <h1 className='text-3xl font-bold leading-10 text-gray-100'>
          NextJS HR
        </h1>
      </Link>
    </header>
  );
};
