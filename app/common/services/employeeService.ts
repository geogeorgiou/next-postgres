import { Employee } from '@/employee/types';
import db from '../utils/db';

export const employeeService = {
  getAll: () =>
    db.user.findMany({
      orderBy: { createdAt: 'desc' },
    }),
  createMany: (data: Employee[]) => db.user.createMany({ data }),
  deleteById: (id: string) =>
    db.user.delete({
      where: {
        id,
      },
    }),
};
