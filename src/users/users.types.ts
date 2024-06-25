export type Role = 'INTERN' | 'ENGINEER' | 'ADMIN';

export interface User {
  id: number;
  role?: Role;
  age?: number;
  name?: string;
}
