import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Logging - Interceptor');
  console.log('Request URL: ', req.url);
  return next(req).pipe(tap(() => console.log('Logging Response')));
};
