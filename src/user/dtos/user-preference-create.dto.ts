import { IsString, MaxLength, IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UserPreferenceCreateDto {
    
    @MaxLength(255)
    @IsNotEmpty()
    @ApiProperty()
    title: string;

    @MaxLength(255)
    @IsNotEmpty()
    @ApiProperty()
    description: string;

    @IsString()
    @IsNotEmpty()
    @IsUUID()
    @ApiProperty()
    userId: string;

}
  