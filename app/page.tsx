import { employeeService } from './common/services/employeeService';
import { EmployeeTable } from './employee/components/EmployeeTable';

export default async function Home() {
  const employees = await employeeService.getAll();

  return (
    <main className='flex flex-col items-center p-24'>
      <EmployeeTable data={employees} />
    </main>
  );
}
