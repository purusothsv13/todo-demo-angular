import { Component } from '@angular/core';
import { ProfileFormComponent } from '../profile-form/profile-form.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TodoListComponent,
    ProfileFormComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
