import { CHAPTERS, SENIORITIES } from '@/employee/constants';
import { Employee } from '@/employee/types';
import { faker } from '@faker-js/faker';

export const getFakerEmployee = (): Employee => ({
  id: faker.string.uuid().slice(0, 24),
  fullName: faker.person.fullName(),
  seniority: faker.helpers.arrayElement(SENIORITIES),
  chapter: faker.helpers.arrayElement(CHAPTERS),
  yearsOfExperience: faker.helpers.arrayElement(
    Array.from({ length: 9 }, (_, i) => i + 1),
  ),
});
