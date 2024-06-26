import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

/**
 * handles business logic
 */
@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) {}

    /**
     * retrieves a single user by ID
     * @param {number} id
     * @returns a promise that resolves to either a User object 
     *          or null if no user was found
     */
    public async getUserById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { id } });
    }

    /**
     * retrieves all users
     * @returns a promise that resolves to either a User object 
     *          or null if no user was found
     */
    public async getAllUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    /**
     * creates a new User
     * @param {CreateUserDto} createUserDto
     * @returns a promise that resolves to either a User object 
     *          or null if no user was found
     */
    public async createUser(createUserDto: CreateUserDto): Promise<User> {
        return this.prisma.user.create({ data: createUserDto });
    }

    /**
     * updates an existing user
     * @param {number} id identification number of the user
     * @param {UpdateUserDto} updateUserDto 
     * @returns a promise that resolves to either a User object 
     *          or null if no user was found
     */
    public async updateUserById(
        id: number,
        updateUserDto: UpdateUserDto
    ): Promise<User> {
        return this.prisma.user.update({
            where: { id },
            data: updateUserDto
        });
    }

    /**
     * deletes an existing user
     * @param {number} id identification number of the user
     * @returns a promise that resolves to either a User object
     *          or null if no user was found 
     */
    public async deleteUserById(id: number): Promise<User> {
        return this.prisma.user.delete({ where: { id } });
    }
}