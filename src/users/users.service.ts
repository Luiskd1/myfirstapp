import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class UsersService {

    constructor(private prisma:PrismaService ){ } 




   async getUsers(){
        return this.prisma.user.findMany()
    }

    postUsers(@Body()user:CreateUserDto){

        return this.prisma.user.create({data:user})

    }


}
