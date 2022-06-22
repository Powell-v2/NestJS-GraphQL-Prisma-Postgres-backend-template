import { ExecutionContext, CanActivate, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    ctx: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>("roles", ctx.getHandler());

    if (!roles) return true;

    const req = ctx.switchToHttp().getRequest();

    // return matchRoles(roles, req.user.roles)
    return true;
  }
}
