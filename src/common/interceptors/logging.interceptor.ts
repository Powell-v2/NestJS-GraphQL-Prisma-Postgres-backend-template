import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    console.log("Starting execution ...");

    const now = Date.now();

    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(`Ending execution ... It took ${Date.now() - now}ms`)
        )
      );
  }
}
