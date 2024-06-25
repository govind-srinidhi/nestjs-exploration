import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user-dto';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {
  private users = [
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
      id: 4,
      name: 'User 4',
      role: 'ADMIN',
      age: 32,
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return role ? this.users.filter((user) => user.role === role) : this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`No user found with id: ${id}`);
    }
  }

  create(createUserDto: CreateUserDto) {
    const users = this.users.sort((user1, user2) => user1.id - user2.id);
    this.users.push({
      id: (users[users.length - 1]?.id ?? 0) + 1,
      ...createUserDto,
    });
    return this.users;
  }

  delete(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      return this.users.splice(index, 1)?.[0];
    }
    return null;
  }

  update(id: number, userUpdate: UpdateUserDto) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...userUpdate };
    }
    return this.users[index];
  }
}
