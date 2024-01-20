import Link from 'next/link';

export const BackToHomepage = () => {
  return (
    <Link
      href={'/'}
      className={
        'flex justify-center mt-1 px-4 py-2 text-sm leading-5 text-white font-bold bg-green-700 hover:bg-green-800 rounded-md'
      }>
      Back to Employees
    </Link>
  );
};
