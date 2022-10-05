/* eslint-disable prettier/prettier */
import { ArgumentsHost, Catch, ExceptionFilter, HttpAdapterHost, HttpException, HttpStatus } from "@nestjs/common";
import { AbstractHttpAdapter } from "@nestjs/core";
import { ExecException } from "child_process";

@Catch()
export class FilterExceptionHttp implements ExceptionFilter  {
  private httpAdapter: AbstractHttpAdapter;

  constructor(adapterHost: HttpAdapterHost) {
  this.httpAdapter = adapterHost.httpAdapter;
  }

  catch(exception: Error, host: ArgumentsHost) {
  const context =  host.switchToHttp();
  const req = context.getRequest();
  const res = context.getResponse();

 const { status, body } = exception instanceof HttpException
   ? {
    status: exception.getStatus(),
    body: exception.getResponse()
   }
   : {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    body: {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      timestamp: new Date().toISOString(),
      path: req.path
    }
   };
   this.httpAdapter.reply(res, body, status);
  }
}