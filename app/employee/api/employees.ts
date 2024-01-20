import { Employee, EmployeeCart } from '../types';

const employeeCart: EmployeeCart = {
  employees: [
    {
      id: 1,
      fullName: 'John Doe',
      seniority: 'junior',
      chapter: 'seti',
      yearsOfExperience: 1,
    },
    {
      id: 2,
      fullName: 'Jane Doe',
      seniority: 'mid',
      chapter: 'ui-ux',
      yearsOfExperience: 3,
    },
    {
      id: 3,
      fullName: 'Sam Smith',
      seniority: 'senior',
      chapter: 'java',
      yearsOfExperience: 6,
    },
    {
      id: 4,
      fullName: 'Sara Smith',
      seniority: 'principal',
      chapter: 'web',
      yearsOfExperience: 8,
    },
    {
      id: 5,
      fullName: 'Joe Leader',
      seniority: 'chapter-leader',
      chapter: '.net',
      yearsOfExperience: 10,
    },
  ],
};

export const getEmployeeCart = async (): Promise<EmployeeCart> => {
  return employeeCart;
};

export const getEmployeeById = async (
  id: number,
): Promise<Employee | undefined> =>
  getEmployeeCart().then((employeeCart) =>
    employeeCart.employees.find((p) => p.id === id),
  );

export const deleteEmployeeById = async (id: number): Promise<EmployeeCart> => {
  const employee = await getEmployeeById(id);
  if (employee) {
    employeeCart.employees = employeeCart.employees.filter(
      (p) => p.id !== employee.id,
    );
  }
  return employeeCart;
};

export const clearEmployeeCart = async (): Promise<EmployeeCart> => {
  employeeCart.employees = [];
  return employeeCart;
};
