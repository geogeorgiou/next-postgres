'use server';
import { deleteEmployeeById } from '@/common/services/employeeService';
import { revalidatePath } from 'next/cache';

export const removeEmployeeById = async (id: string) => {
  await deleteEmployeeById(id);

  revalidatePath('/');
};
