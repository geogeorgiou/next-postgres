import { Employee } from '@/employee/types';

export const getAverageExperience = (employees: Employee[]) =>
  employees.reduce((acc, curr) => acc + curr.yearsOfExperience, 0) /
  employees.length;
