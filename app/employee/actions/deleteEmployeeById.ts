'use server';
import db from '@/common/utils/db';
import { revalidatePath } from 'next/cache';

export const deleteEmployeeById = async (id: string) => {
  await db.user.delete({
    where: {
      id,
    },
  });

  revalidatePath('/');
};
