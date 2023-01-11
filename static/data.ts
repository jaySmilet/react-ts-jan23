import { Employee } from '../models/Employee';

export const EmpList: Employee[] = [
  {
    id: (Math.random() * new Date().getTime()).toString(),
    name: 'Ajay',
    email: 'ajay@gmail.com',
    position: 'CTO',
  },
  {
    id: (Math.random() * new Date().getTime()).toString(),
    name: 'Raman',
    email: 'raman@gmail.com',
    position: 'CEO',
  },
  {
    id: (Math.random() * new Date().getTime()).toString(),
    name: 'Raghav',
    email: 'raghav@gmail.com',
    position: 'COO',
  },
];
