import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

/**
 * handles incoming HTTP-requests 
 */
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    async getAllUsers() {
        return this.userService.findAll();
    }    

    @Post()
    createUser(@Body() user: User) {
        return this.userService.create(user);
    }
}
