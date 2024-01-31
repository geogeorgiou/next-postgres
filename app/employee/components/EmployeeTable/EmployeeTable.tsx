'use client';
import { Employee } from '@/employee/types';
import { EmployeeChapterPill } from '../EmployeeChapterPill';
import { EmployeeDeleteAction } from '../EmployeeDeleteAction';

export const EmployeeTable = ({ data }: { data: Employee[] }) => {
  return (
    <div className='overflow-x-auto shadow-md sm:rounded-lg'>
      <div className='inline-block min-w-full align-middle'>
        <table className='table-fixed'>
          <thead>
            <tr className='bg-primary uppercase text-sm leading-normal'>
              <th className='w-1/4 px-4 py-2'>Full Name</th>
              <th className='w-1/4 px-4 py-2'>Seniority</th>
              <th className='w-1/4 px-4 py-2'>Chapter</th>
              <th className='w-1/4 px-4 py-2'>Years of Experience</th>
              <th className='w-1/4 px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <tr
                key={employee.id}
                className='even:bg-primary odd:bg-secondary hover:opacity-75'>
                <td className='text-center px-4 py-2'>
                  <div className='flex gap-3 items-center justify-center'>
                    {employee.fullName}
                  </div>
                </td>
                <td className='text-center px-4 py-2'>{employee.seniority}</td>
                <td className='text-center px-4 py-2'>
                  <EmployeeChapterPill chapter={employee.chapter} />
                </td>
                <td className='text-center px-4 py-2'>
                  {employee.yearsOfExperience}
                </td>
                <td className='text-center px-4 py-2'>
                  <EmployeeDeleteAction id={employee.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
