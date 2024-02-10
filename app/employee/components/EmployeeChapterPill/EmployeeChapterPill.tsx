'use client';
import { CHAPTERS } from '@/employee/constants';
import { Chapter } from '@/employee/types';

const defaultClasses = `py-1 px-3 rounded-full text-xs`;

type ChapterPillConfig = {
  title: string;
  class: string;
};

const chapterToClassMap: Record<Chapter, ChapterPillConfig> = {
  web: {
    title: 'Web',
    class: 'bg-blue-200 text-blue-600',
  },
  java: {
    title: 'Java',
    class: 'bg-yellow-200 text-yellow-600',
  },
  seti: {
    title: 'SETI',
    class: 'bg-red-200 text-red-600',
  },
  '.net': {
    title: '.NET',
    class: 'bg-purple-200 text-purple-600',
  },
  'ui-ux': {
    title: 'UI/UX',
    class: 'bg-green-200 text-green-600',
  },
  data: {
    title: 'Data',
    class: 'bg-indigo-200 text-indigo-600',
  },
};

const isChapter = (chapter: string): chapter is Chapter =>
  CHAPTERS.includes(chapter as Chapter);

export const EmployeeChapterPill = ({ chapter }: { chapter: string }) => {
  if (!isChapter(chapter)) {
    return (
      <div className={`${defaultClasses} bg-red-400 text-red-800`}>???</div>
    );
  }

  return (
    <div className={`${defaultClasses} ${chapterToClassMap[chapter].class}`}>
      {chapterToClassMap[chapter].title}
    </div>
  );
};
