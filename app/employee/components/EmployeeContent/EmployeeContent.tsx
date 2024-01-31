'use client';
import { Employee } from '@/employee/types';
import { createEmployees } from '@/employee/actions/createEmployees';
import { generateEmployee, getAverageExperience } from './utils';
import { EmployeeTable } from '../EmployeeTable';

export const EmployeeContent = ({ data }: { data: Employee[] }) => {
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
      <EmployeeTable data={data} />
    </div>
  );
};
