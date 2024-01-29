import { employeeService } from '@/common/services/employeeService';
import { CHAPTERS, SENIORITIES } from '../constants';

export type Seniority = (typeof SENIORITIES)[number];

export type Chapter = (typeof CHAPTERS)[number];

// export type Employee = {
//   id: number;
//   fullName: string;
//   seniority: Seniority;
//   chapter: Chapter;
//   yearsOfExperience: number;
// };

export type Employee = NonNullable<
  Awaited<ReturnType<typeof employeeService.getById>>
>;

export type EmployeeCart = {
  employees: Employee[];
};
