'use client'; // Error components must be Client Components

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className='flex flex-col items-center p-24 gap-5'>
      <h1 className='text-3xl font-bold leading-10 text-gray-100 text-center'>
        Something went wrong! 😫
      </h1>
      {process.env.NODE_ENV === 'development' && (
        <h3
          className={`font-bold leading-10 text-gray-100 text-xl text-center`}>
          Hint: Try to run the following command in your terminal:
          <pre className='text-red-500'>
            <code>pnpm db:migrate</code>
          </pre>
        </h3>
      )}
      <button
        onClick={reset}
        className={
          'flex justify-center mt-1 px-4 py-2 text-sm leading-5 text-white font-bold bg-green-700 hover:bg-green-800 rounded-md'
        }>
        Try again
      </button>
    </main>
  );
}
