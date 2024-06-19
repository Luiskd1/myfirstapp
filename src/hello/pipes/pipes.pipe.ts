import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PipesPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    console.log(value)
    
    const ageNumber = parseInt(value.age.toString());

    if (isNaN(ageNumber)) {

      throw new HttpException('age must be a number', HttpStatus.BAD_REQUEST)
      
    }


    return {...value, age:ageNumber};
  }
}
