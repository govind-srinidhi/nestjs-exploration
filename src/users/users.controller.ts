import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Role, User } from './users.types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
   constructor(private readonly userService: UsersService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Query('role') role?: Role) {
    return this.userService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: User) {
    return this.userService.update(+id, userUpdate);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
