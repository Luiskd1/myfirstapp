import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/users')
@ApiTags('Users')
export class UsersController {

    constructor(private userService:UsersService){}

    @Get()
    getAllUsers(){

        return this.userService.getUsers();
    }

    @Post()
    createUsers(@Body() user:CreateUserDto){
        return this.userService.postUsers(user)
    }


 




}
