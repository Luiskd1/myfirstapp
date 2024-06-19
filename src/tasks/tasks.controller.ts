import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req, Res, UsePipes, ValidationPipe  } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Request, Response } from "express";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller('/tasks')
@ApiTags("Tasks")

export class TaskController {


            
    tasksService:TasksService
    constructor(tasksService:TasksService){
        this.tasksService = tasksService
    }

@Get()    
getAllTasks (@Query() query:any) {
    console.log(query)
    return this.tasksService.getTasks()
}


@Get('/:id')    
getATask (@Param('id') id:string) {
    console.log(id)
    return this.tasksService.getTask(parseInt(id))
}

@Post()
createTask(@Body() task:CreateTaskDto){

    return this.tasksService.createTasks(task)
}

@Put('/:id') 
updateTask(@Body() task:UpdateTaskDto){
    return this.tasksService.updateTasks(task)
}

@Delete()    
deleteTasks () {

    return this.tasksService.deleteTasks()
}

@Patch()    
updateTasksStatus () {

    return this.tasksService.updateTasksState()
}

}