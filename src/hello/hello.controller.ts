import { Controller, Get, HttpCode, Param, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { query, Request, Response } from 'express';
import { PipesPipe } from './pipes/pipes.pipe';
import { AuthGuard } from './guard/auth/auth.guard';

@Controller('')
export class HelloController {


    @Get('/')
    helloFriend( @Req() request:Request, @Res() response:Response ){

        console.log(request.url)
        response.status(200).json({
            message: 'Hello World',

        })
        return 'hola mundo'
    }

    @Get('new')
    @HttpCode(201)
    somethingNew(){
        return 'Something new'
    }


    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 not found'
    }
    @Get("error")
    @HttpCode(500)
    errorPage(){
        return 'Error Route!!'
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe)num:number){
        return num + 14
    }

    
    @Get("greet")
    @UseGuards(AuthGuard)
    greet(@Query(PipesPipe) query:{name:string, age:number}){ 
        console.log(typeof query.name)
        console.log(typeof (query.age))
        return `your name is ${query.name} and your age ${query.age}`
    }

}
