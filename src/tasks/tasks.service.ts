import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable({})
export class TasksService {

    private tasks= []


    getTasks(){
        return this.tasks
    }

    getTask(id){

        const taskFound = this.tasks.find (task => task.id === id)

        if (taskFound) {
            return taskFound
        }
        return new NotFoundException(`task with ${id} not found`)





        return 
    }

    createTasks(task:CreateTaskDto){
        console.log(task)
        this.tasks.push({
            ...task,
            id: this.tasks.length+1
        })
        return task
    }

    updateTasks(task:UpdateTaskDto){


        return 'actualizando tarea'
    }

    deleteTasks(){
        return 'borrando tarea'
    }

    updateTasksState(){
        return 'actualizando tarea en un estado'
    }
} 