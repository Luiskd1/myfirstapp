import { IsString, isString, MinLength, minLength } from "class-validator"


export class CreateLibrary {


    @IsString()
    @MinLength(2)
    book:string
    @IsString()
    @MinLength(5)
    descripcion:string
    
}