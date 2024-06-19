import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { LibraryService } from './library.service';
import { CreateLibrary } from './dto/create-Library.dto';
import { HfInference } from '@huggingface/inference';
import { ApiTags } from '@nestjs/swagger';

@Controller('library')
@ApiTags('Library')
export class LibraryController {

    constructor(private LibraryService:LibraryService ){}

    @Get()
    getLibrary(){

        return this.LibraryService.getLibrary()
    }



    @Post()
    updateLibrary(@Body()datali:CreateLibrary){
         return this.LibraryService.newLibrary(datali)
    }


    @Put('/:id')
    updateUser(@Body()data){
        console.log(data)
    }


}
