import { Controller, MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TaskController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
import { LoggerMiddleware } from "src/users/logger/logger.middleware";


@Module({
    controllers : [TaskController],
    providers:[TasksService]
})
export class TaskModule {

  }