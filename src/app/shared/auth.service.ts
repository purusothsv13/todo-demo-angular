import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getToken(): Observable<string> {
    return of('USER_TOKEN');
  }
}
