'use server';
import { revalidatePath } from 'next/cache';
import { Employee } from '../types';
import { employeeService } from '@/common/services/employeeService';

export const createEmployees = async (data: Employee[]) => {
  await employeeService.createMany(data);

  revalidatePath('/');
};
