export type Seniority =
  | 'junior'
  | 'mid'
  | 'senior'
  | 'principal'
  | 'chapter-leader';

export type Chapter = 'web' | 'java' | 'seti' | '.net' | 'ui-ux' | 'data';

export type Employee = {
  id: number;
  fullName: string;
  seniority: Seniority;
  chapter: Chapter;
  yearsOfExperience: number;
};

export type EmployeeCart = {
  employees: Employee[];
};
