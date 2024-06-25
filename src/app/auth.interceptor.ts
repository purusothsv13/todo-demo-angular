import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { AuthService } from './shared/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  console.log('Auth - Interceptor');

  return authService.getToken().pipe(
    switchMap((token) => {
      const clonedReq = req.clone({
        headers: req.headers.set('user-key', token),
      });

      return next(clonedReq).pipe(
        tap((value) => console.log('Response:' + value))
      );
    })
  );
};
