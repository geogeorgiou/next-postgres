'use server';
import { revalidatePath } from 'next/cache';
import { Employee } from '../types';
import { createManyEmployees } from '@/common/services/employeeService';

export const generateEmployees = async (data: Employee[]) => {
  await createManyEmployees(data);

  revalidatePath('/');
};
