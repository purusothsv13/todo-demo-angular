import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    HeaderComponent,
    SharedModule,
    TodoListComponent,
    ProfileFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
