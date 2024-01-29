'use client';
import { Employee } from '@/employee/types';
import { createEmployees } from '@/employee/actions/createEmployees';
import { EmployeeChapterPill } from '../EmployeeChapterPill';
import { EmployeeDeleteAction } from '../EmployeeDeleteAction';
import { generateEmployee, getAverageExperience } from './utils';

export const EmployeeTable = ({ data }: { data: Employee[] }) => {
  const averageExperience = getAverageExperience(data);

  return (
    <div className='flex flex-col'>
      <button
        className={
          'flex justify-center mt-1 mb-8 px-4 py-2 text-sm leading-5 text-white font-bold bg-green-700 hover:bg-green-800 rounded-md'
        }
        onClick={() =>
          createEmployees(Array.from({ length: 3 }, generateEmployee))
        }>
        Generate Mock Employees
      </button>
      <h3 className={`font-bold leading-10 text-gray-100 text-xl`}>
        Total Employees: {data.length}
      </h3>
      <h3 className={`mb-10 font-bold leading-10 text-gray-100 text-xl`}>
        Average Experience:{' '}
        {averageExperience ? averageExperience.toFixed(1) : `0.0`}
      </h3>
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
                  <td className='text-center px-4 py-2'>
                    {employee.seniority}
                  </td>
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
    </div>
  );
};
