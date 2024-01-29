'use server';
import { employeeService } from '@/common/services/employeeService';
import { revalidatePath } from 'next/cache';

export const deleteEmployeeById = async (id: string) => {
  await employeeService.deleteById(id);

  revalidatePath('/');
};
