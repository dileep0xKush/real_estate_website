import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FastifyReply, FastifyRequest } from 'fastify';
import { Response } from '../interfaces/response.interface';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> {
    const httpContext = context.switchToHttp();

    const request = httpContext.getRequest<FastifyRequest>();
    const reply = httpContext.getResponse<FastifyReply>();

    return next.handle().pipe(
      map(
        (data: T): Response<T> => ({
          status: 'success',
          statusCode: reply.statusCode,
          timestamp: new Date().toISOString(),
          path: request.url,
          method: request.method,
          data,
        }),
      ),
    );
  }
}
