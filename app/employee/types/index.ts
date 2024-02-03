import { getEmployeeById } from '@/common/services/employeeService';
import { CHAPTERS, SENIORITIES } from '../constants';

export type Seniority = (typeof SENIORITIES)[number];

export type Chapter = (typeof CHAPTERS)[number];

type PrismaEmployee = NonNullable<Awaited<ReturnType<typeof getEmployeeById>>>;

export type Employee = Omit<PrismaEmployee, 'createdAt' | 'updatedAt'>;
