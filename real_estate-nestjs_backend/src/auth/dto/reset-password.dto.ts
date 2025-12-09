import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty({
    example: 'a4f9b3c2d7e84a5f9acb8f43e71d9e2f',
    description: 'Reset password token sent to user email',
  })
  @IsString()
  token: string;

  @ApiProperty({
    example: 'newStrongPassword123',
    description: 'The new password (must be at least 6 characters)',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  newPassword: string;
}
