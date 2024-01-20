import { getEmployeeCart } from './employee/api/employees';
import { EmployeeTable } from './employee/components/EmployeeTable';

export default async function Home() {
  const { employees } = await getEmployeeCart();
  return (
    <main className='flex flex-col items-center p-24'>
      <EmployeeTable data={employees} />
    </main>
  );
}
