import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @ApiProperty({
    example: 'oldPassword123',
    description: 'The user’s current password for verification',
  })
  @IsString()
  currentPassword: string;

  @ApiProperty({
    example: 'newStrongPassword456',
    description: 'The new password (minimum 6 characters)',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  newPassword: string;
}
