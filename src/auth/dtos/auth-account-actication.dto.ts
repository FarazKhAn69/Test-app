import { IsString, MaxLength, IsNotEmpty } from 'class-validator';
import { IsValidPassword } from 'src/auth/decorators';
import { ApiProperty } from '@nestjs/swagger';
export class AuthAccountActivationDto {
    
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    token: string;

   
    @IsString()
    @IsNotEmpty()
    @IsValidPassword()
    @ApiProperty()
    password: string;

}
  