import { employeeService } from './common/services/employeeService';
import { EmployeeContent } from './employee/components/EmployeeContent';

export default async function Home() {
  const employees = await employeeService.getAll();

  return (
    <main className='flex flex-col items-center p-24'>
      <EmployeeContent data={employees} />
    </main>
  );
}
