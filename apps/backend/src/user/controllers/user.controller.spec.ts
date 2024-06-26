import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../services/user.service';
import { faker } from '@faker-js/faker';
import { User } from '@prisma/client';

/**
 * @see https://dev.to/niemet0502/writing-unit-tests-for-your-nestjs-rest-api-3cgg
 */
describe('UserController', () => {

    let userService: UserService;
    let userController: UserController;

    const mockUserService = {
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [
                UserService,
                {
                    provide: UserService,
                    useValue: mockUserService,
                },
            ],
        }).compile();

        userService = module.get<UserService>(UserService);
        userController = module.get<UserController>(UserController);
    });


    it('should be defined', () => {
        expect(userController).toBeDefined();
    });


    it('createUser => should create a new user by given data', async () => {
        
        // arrange
        const createUserEntity = {
            username: faker.internet.userName(),
            password: faker.internet.password(),
        } as User;
        
        const userToBeCreated = {
            id: 1,
            username: faker.internet.userName(),
            password: faker.internet.password(),
        };

        jest.spyOn(mockUserService, 'create').mockReturnValue(userToBeCreated);

        // act
        const result = await userController.createUser(createUserEntity);

        // assert
        expect(mockUserService.create).toHaveBeenCalled();
        expect(mockUserService.create).toHaveBeenCalledWith(createUserEntity);
        expect(result).toEqual(userToBeCreated);
    });


    it('getAllUsers => should return an array of users', async () => {

        // arrange
        const user = {
            id: 1,
            username: faker.internet.userName(),
            password: faker.internet.password(),
        };
        const users = [user];

        jest.spyOn(mockUserService, 'findAll').mockReturnValue(users);

        // act
        const result = await userController.getAllUsers();

        // assert
        expect(result).toEqual(users);
        expect(mockUserService.findAll).toHaveBeenCalled();
    });


    it('getUserById => should find a user by a given id and return its data', async () => {
        // arrange
        const id = 1;
        const user = {
            id: 1,
            username: faker.internet.userName(),
            password: faker.internet.password(),
        };

        jest.spyOn(mockUserService, 'findOne').mockReturnValue(user);

        // act
        const result = await userController.getUserById(id);

        // assert
        expect(result).toEqual(user);
        expect(mockUserService.findOne).toHaveBeenCalled();
        expect(mockUserService.findOne).toHaveBeenCalledWith(id);
    });


    it('updateUserById => should find a user by a given id and update its data', async () => {
        
        // arrange
        const id = 1;
        const userToBeUpdated = {
            id: 1,
            username: faker.internet.userName(),
            password: faker.internet.password(),
        };

        const updatedUser = {
            username: faker.internet.userName(),
            password: faker.internet.password(),
        } as User;
        
        jest.spyOn(mockUserService, 'update').mockReturnValue(updatedUser);

        // act
        const result = await userController.updateUserById(id, updatedUser);

        // assert
        expect(result).toEqual(updatedUser);
        expect(mockUserService.update).toHaveBeenCalled();
        expect(mockUserService.update).toHaveBeenCalledWith(id, updatedUser);
    });

    it('deleteUserById => should find and delete a user by a given id and return Number of affected rows', async () => {
        
        // arrange
        const id = 1;
        const user = {
            id: 1,
            username: faker.internet.userName(),
            password: faker.internet.password(),
        };

        jest.spyOn(mockUserService, 'delete').mockReturnValue(user);

        // act
        const result = await userController.deleteUserById(id);

        // assert
        expect(result).toEqual(result);
        expect(mockUserService.delete).toHaveBeenCalled();
        expect(mockUserService.delete).toHaveBeenCalledWith(id);
    });
});