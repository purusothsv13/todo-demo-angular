import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { HighlightItemDirective } from '../../highlight-item.directive';
import { TodoItem } from '../../app.types';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [CommonModule, HighlightItemDirective],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss',
})
export class TodoListItemComponent {
  @Input({ required: true }) item!: TodoItem;
  @Input() progress!: number;
  @Output() progressChange = new EventEmitter<number>();

  bgColor = 'grey';

  constructor(elementRef: ElementRef) {}

  updateProgress() {
    this.progress += 0.1;
    this.progressChange.emit(this.progress);
  }
}
