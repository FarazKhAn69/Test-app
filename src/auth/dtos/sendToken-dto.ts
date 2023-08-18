import { IsString, MaxLength, IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendTokenDto {
    
    @MaxLength(255)
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string;
}
