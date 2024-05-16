import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";

/**
 * handles business logic 
 */
@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: string): Promise<User | null> {
        return this.userRepository.findOneBy({ id });
    }

    async create(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    async update(id: string, user: User): Promise<User> {
        await this.userRepository.update(id, user);
        return this.userRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }   
}