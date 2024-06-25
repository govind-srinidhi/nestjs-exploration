import { Injectable } from '@nestjs/common';
import { User } from './users.types';

@Injectable()
export class UsersService {
  private users: Array<User> = [
    {
      id: 1,
      name: 'User 1',
      role: 'INTERN',
      age: 22,
    },
    {
      id: 2,
      name: 'User 2',
      role: 'INTERN',
      age: 23,
    },
    {
      id: 3,
      name: 'User 3',
      role: 'ENGINEER',
      age: 27,
    },
    {
      id: 3,
      name: 'User 4',
      role: 'ADMIN',
      age: 32,
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return role ? this.users.filter((user) => user.role === role) : this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: User) {
    this.users.push(user);
    return this.users;
  }

  delete(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      return this.users.splice(index, 1)?.[0];
    }
    return null;
  }

  update(id: number, userUpdate: User) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...userUpdate };
    }
    return this.users[index];
  }
}
