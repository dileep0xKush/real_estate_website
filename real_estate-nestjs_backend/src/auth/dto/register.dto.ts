import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    example: 'john_doe',
    description: 'Unique username chosen by the user',
    required: true,
  })
  @IsString()
  @IsNotEmpty({ message: 'Username is required.' })
  userName: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'User email address',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty({ message: 'Email is required.' })
  email: string;

  @ApiProperty({
    minLength: 6,
    example: 'secret123',
    description: 'Password with at least 6 characters',
    required: true,
  })
  @IsString()
  @MinLength(6)
  @IsNotEmpty({ message: 'Password is required.' })
  password: string;

  @ApiProperty({
    required: false,
    example: 'John Doe',
    description: 'Full name of the user (optional)',
  })
  @IsOptional()
  @IsString()
  name?: string;
}
