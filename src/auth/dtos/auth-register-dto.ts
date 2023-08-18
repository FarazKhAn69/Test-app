import { IsString, IsEmail, MaxLength, IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class AuthRegisterDto {
    
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    fullName: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string;
    
    @IsDateString()
    @IsNotEmpty()
    @ApiProperty()
    dateOfBirth: Date;

}
  