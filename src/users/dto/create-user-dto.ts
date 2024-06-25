import { IsNumber, IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { Role } from '../users.types';

export class CreateUserDto {
  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Valid role required',
  })
  role: Role;

  @IsNumber()
  age: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
