import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

/**
 * handles incoming HTTP-requests 
 */
@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.findAll();
    }    
}
