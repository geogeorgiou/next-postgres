'use client';
import { Chapter } from '@/employee/types';

export const EmployeeChapterPill = ({ chapter }: { chapter: Chapter }) => {
  const defaultClasses = `py-1 px-3 rounded-full text-xs`;
  switch (chapter) {
    case 'web':
      return (
        <span className={`${defaultClasses} bg-blue-200 text-blue-600`}>
          Web
        </span>
      );
    case 'java':
      return (
        <span className={`${defaultClasses} bg-yellow-200 text-yellow-600`}>
          Java
        </span>
      );
    case 'seti':
      return (
        <span className={`${defaultClasses} bg-red-200 text-red-600`}>
          SETI
        </span>
      );
    case '.net':
      return (
        <span className={`${defaultClasses} bg-purple-200 text-purple-600`}>
          .NET
        </span>
      );
    case 'ui-ux':
      return (
        <span className={`${defaultClasses} bg-green-200 text-green-600`}>
          UI/UX
        </span>
      );
    case 'data':
      return (
        <span className={`${defaultClasses} bg-indigo-200 text-indigo-600`}>
          Data
        </span>
      );
    default: {
      const exhaustiveCheck: never = chapter;
      throw new Error(`Unhandled chapter: ${exhaustiveCheck}`);
    }
  }
};
