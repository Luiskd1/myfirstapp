import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    
    const authorization = req.headers['authorization'];
    if (!authorization) {
      throw new HttpException('unathorized', HttpStatus.UNAUTHORIZED);
    }


    if (authorization !== 'xyz123') {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    next();
  }
}
