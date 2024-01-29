import db from '../utils/db';

export const employeeService = {
  getAll: () =>
    db.user.findMany({
      orderBy: { createdAt: 'desc' },
    }),
  getById: (id: number) => db.user.findUnique({ where: { id } }),
};
