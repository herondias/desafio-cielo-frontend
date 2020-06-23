import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';

import { Observable, throwError, EMPTY } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastService } from '../services/toast.service';


@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastService) {}

  intercept(request: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {

    return next.handle(request).pipe(
      retry(1),
      catchError((httpError: HttpErrorResponse) => {
        if (httpError.status >= 200 && httpError.status < 300) {
          return EMPTY;
        }

        this.toastService.onErrorWithToast(httpError);
        const error = httpError.error.message || httpError.statusText;
        return throwError(error);
      })

    );
  }
}
