import { Suspense } from 'react';
import { EmployeeContent } from './employee/components/EmployeeContent';
import { getAllEmployees } from './common/services/employeeService';

const EmployeeHome = async () => {
  const employees = await getAllEmployees();

  return <EmployeeContent data={employees} />;
};

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <Suspense fallback='Loading...'>
        <EmployeeHome />
      </Suspense>
    </main>
  );
}
