import { Injectable } from '@angular/core';
import { TodoItem } from '../app.types';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  map,
  of,
  tap,
  timer,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  private _subject: ReplaySubject<number> = new ReplaySubject<number>(1);

  private _todoItems$!: BehaviorSubject<TodoItem[]>;

  constructor(private readonly http: HttpClient) {}

  getTodoItems$(): Observable<TodoItem[]> {
    if (!this._todoItems$) {
      this._todoItems$ = new BehaviorSubject<TodoItem[]>([]);

      this.http
        .get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos?userId=1')
        .pipe(
          tap((items) => {
            this._todoItems$.next(items);
          })
        )
        .subscribe();
    }
    return this._todoItems$.asObservable();
  }

  addTodoItem(request: TodoItem): Observable<TodoItem> {
    return this.http
      .post<TodoItem>('https://jsonplaceholder.typicode.com/todos', request)
      .pipe(
        tap((item) => {
          const todoItems = this._todoItems$.getValue();
          todoItems.push(item);

          this._todoItems$.next(todoItems);
        })
      );
  }

  getSubject(): Observable<number> {
    return this._subject.asObservable();
  }

  setSubject(val: number): void {
    this._subject.next(val);
  }

  getTodoItemById(id: number): TodoItem | undefined {
    const todoItems = this._todoItems$.getValue();
    return todoItems.find((item) => item.id === id);
  }
}
