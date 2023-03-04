import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  SetMetadata,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { DateTime } from 'luxon';

export const AuthGuard = (roles: string[] = []) => SetMetadata('roles', roles);

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> | any {
    try {
      const requiredRoles = this.reflector.getAllAndOverride('roles', [
        context.getHandler(),
        context.getClass(),
      ]);
      if (!requiredRoles?.length) return true;
      if (requiredRoles.some((n) => n === 'ALL')) return true;
      const dt = DateTime.now();
      const { headers } = context.switchToHttp().getRequest();
      if (!headers.authorization)
        throw new HttpException('Доступ запрещен', HttpStatus.FORBIDDEN);
      const token = headers.authorization.split(' ')[1];
      const { roles, expires } = this.jwtService.verify(token);
      if (dt.toISO() >= expires)
        throw new HttpException(
          'access-token expires',
          HttpStatus.UNAUTHORIZED,
        );

      if (!roles.some((n) => requiredRoles.includes(n)))
        throw new HttpException('Доступ запрещен', HttpStatus.FORBIDDEN);
      return true;
    } catch (e) {
      if (e.name === 'JsonWebTokenError')
        throw new HttpException(
          'access-token invalid',
          HttpStatus.UNAUTHORIZED,
        );
      throw e;
    }
  }
}
