import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoDataService } from './shared/todo-data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    })
      .overrideComponent(AppComponent, {
        set: {
          imports: [CommonModule],
          providers: [
            {
              provide: TodoDataService,
              useValue: {
                getTodoItems$: jest.fn(),
                addTodoItem: jest.fn(),
              },
            },
            {
              provide: Router,
              useValue: {
                navigate: jest.fn(),
              },
            },
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
