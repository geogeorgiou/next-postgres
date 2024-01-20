import { BackToHomepage } from './common/components/BackToHomepage';

const NotFound = () => {
  return (
    <main className='flex flex-col items-center p-24 gap-5'>
      <h1 className='text-3xl font-bold leading-10 text-gray-100 text-center'>
        The page or resource you are looking for does not exist!
      </h1>
      <BackToHomepage />
    </main>
  );
};

export default NotFound;
