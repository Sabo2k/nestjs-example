import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from '../user/controllers/user.controller';
import { UserService } from '../user/services/user.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
    controllers: [AppController, UserController],
    providers: [AppService, UserService, PrismaService],
})
export class AppModule {}
