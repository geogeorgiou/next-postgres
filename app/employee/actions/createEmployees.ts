'use server';
import db from '@/common/utils/db';
import { revalidatePath } from 'next/cache';
import { Employee } from '../types';

export const createEmployees = async (data: Employee[]) => {
  await db.user.createMany({
    data,
  });

  revalidatePath('/');
};
