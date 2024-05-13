import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";

/**
 * handles business logic 
 */
@Injectable()
export class UserService {

    private readonly users: User[] = [];

    findAll(): User[] {
        return this.users;
    }
}