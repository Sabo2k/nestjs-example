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
    getAllUsers() {
        return this.userService.findAll();
    }    

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @Post()
    createUser(@Body() user: User) {
        return this.userService.create(user);
    }

    @Delete(':id')
    deleteUserById(@Param('id') id: string) {
        return this.userService.remove(id);
    }
}
