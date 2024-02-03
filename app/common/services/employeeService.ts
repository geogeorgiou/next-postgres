import { Employee } from '@/employee/types';
import db from '../utils/db';

export const getEmployeeById = (id: string) =>
  db.user.findUnique({ where: { id } });

export const getAllEmployees = () =>
  db.user.findMany({ orderBy: { createdAt: 'desc' } });

export const createManyEmployees = (data: Employee[]) =>
  db.user.createMany({ data });

export const deleteEmployeeById = (id: string) =>
  db.user.delete({ where: { id } });
