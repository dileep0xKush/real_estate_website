import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    example: 'john_doe',
    description: 'Unique username chosen by the user',
  })
  @IsString()
  userName: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'User email address',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    minLength: 6,
    example: 'secret123',
    description: 'Password with at least 6 characters',
  })
  @IsString()
  @MinLength(6)
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
