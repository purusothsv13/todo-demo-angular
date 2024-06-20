import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateTodoListItemComponent } from './create-todo-list-item/create-todo-list-item.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoItem } from '../app.types';
import { FilterTasksPipe } from '../filter-tasks.pipe';
import { TodoDataService } from '../shared/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Observable,
  Subject,
  combineLatest,
  concat,
  filter,
  forkJoin,
  fromEvent,
  iif,
  interval,
  map,
  merge,
  of,
  partition,
  range,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    TodoListItemComponent,
    CreateTodoListItemComponent,
    FilterTasksPipe,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  @ViewChild(TodoListItemComponent) listItem!: TodoListItemComponent;
  @ViewChild('viewBtn') viewBtn!: HTMLButtonElement;

  date = new Date();

  progress = 0.7;
  searchValue = '';

  todoItems: TodoItem[] = [];

  constructor(
    private readonly todoDataService: TodoDataService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const range$ = range(1, 10);

    const result = partition(range$, (n, i) => {
      return n % 2 === 0;
    });
    result[0].subscribe((val) => console.log('Even', val));

    concat(...result).subscribe((val) => {
      console.log(val);
    });

    merge(...result).subscribe((val) => {
      console.log('merge', val);
    });

    this.todoDataService.setSubject(1);
    this.todoDataService.setSubject(2);
    this.todoDataService.setSubject(3);
    this.todoDataService.setSubject(4);
    this.todoDataService.getSubject().subscribe((val) => {
      console.log('Component1', val);
    });

    this.todoDataService
      .getTodoItems$()
      .pipe(
        map((items) => {
          return items.filter((i) => !!i.title);
        })
      )
      .subscribe((items) => {
        this.todoItems = items;
        this.ref.markForCheck();
      });
  }

  onCreate(newTask: string): void {
    const todoItem = {
      id: Math.round(Math.random() * 10000),
      completed: false,
      title: newTask,
      userId: 1,
    };

    this.todoDataService.addTodoItem(todoItem).subscribe();
  }

  onView(item: TodoItem) {
    this.router.navigate([item.id], { relativeTo: this.route });
  }

  onDelete(item: TodoItem) {
    this.todoItems.splice(this.todoItems.indexOf(item), 1);
  }
}
