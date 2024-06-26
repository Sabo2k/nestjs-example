import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {
    
    @IsString()
    @IsNotEmpty()
    username: string;
    
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}