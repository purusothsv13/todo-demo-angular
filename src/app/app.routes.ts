import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { TaskDetailComponent } from './todo-list/task-detail/task-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks',
        component: TodoListComponent,
      },
      {
        path: 'tasks/:id',
        component: TaskDetailComponent,
      },
      {
        path: 'profile-form',
        component: ProfileFormComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
