import { Component, Input } from '@angular/core';
import { TodoItem } from '../../app.types';
import { ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../../shared/todo-data.service';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
})
export class TaskDetailComponent {
  todoItem: TodoItem | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly todoDataService: TodoDataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((val) => {
      const id = val.get('id');

      if (!id) {
        return;
      }
      this.todoItem = this.todoDataService.getTodoItemById(parseInt(id));
    });
  }
}
