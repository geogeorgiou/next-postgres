import { Suspense } from 'react';
import { employeeService } from './common/services/employeeService';
import { EmployeeContent } from './employee/components/EmployeeContent';

const EmployeeHome = async () => {
  const employees = await employeeService.getAll();

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
