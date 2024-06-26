import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

/**
 * handles incoming HTTP-requests 
 */
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }    

    @Get(':id')
    getUserById(@Param('id') id: number) {
        return this.userService.getUserById(id);
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Put(':id')
    updateUserById(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUserById(id, updateUserDto);
    }

    @Delete(':id')
    deleteUserById(@Param('id') id: number) {
        return this.userService.deleteUserById(id);
    }
}
