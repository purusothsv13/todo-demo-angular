import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-todo-list-item',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-todo-list-item.component.html',
  styleUrl: './create-todo-list-item.component.scss',
})
export class CreateTodoListItemComponent {
  @Output() createTask = new EventEmitter<string>();

  newTask = new FormControl('', [Validators.required]);

  addTask(): void {
    if (!this.newTask.value) {
      alert('Empty Descrption');
      return;
    }

    this.createTask.emit(this.newTask.value);
    this.newTask.setValue('');

    // this.todoItems.push({
    //   completed: false,
    //   description: this.newTask,
    // });

    // this.newTask = '';
  }
}
