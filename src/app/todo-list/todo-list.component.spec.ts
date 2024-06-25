import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoDataService } from '../shared/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let router: any;

  let itemsMock = [
    {
      title: 'Task1',
      completed: false,
    },
    {
      title: 'Task2',
      completed: true,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent],
      providers: [
        {
          provide: TodoDataService,
          useValue: {
            getTodoItems$: jest.fn().mockReturnValue(of(itemsMock)),

            addTodoItem: jest.fn(),
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: 'ACTIVATED_ROUTE',
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component['todoDataService'].getTodoItems$).toHaveBeenCalled();
  });

  it('should assign items', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.todoItems).toBeTruthy();
    expect(component.progress).toMatchSnapshot('progress');
    expect(component.todoItems).toMatchSnapshot('todoItems');
  });

  it('should filter out items with empty title', () => {
    component['todoDataService'].getTodoItems$ = jest.fn().mockReturnValue(
      of([
        {
          title: '',
        },
        {
          title: 'Task1',
        },
      ])
    );

    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.todoItems).toBeTruthy();
    expect(component.todoItems).toMatchSnapshot('todoItems');
  });

  it('should navigate to details page', () => {
    fixture.detectChanges();

    const item: any = {
      id: 'ITEM_ID_1',
    };

    component.onView(item);

    expect(router.navigate.mock.calls[0]).toMatchSnapshot();
  });

  it('should not navigate to details page', () => {
    fixture.detectChanges();

    component.onView(null);

    expect(router.navigate).not.toHaveBeenCalled();
  });

  describe('template', () => {
    it('should render todo list item', () => {
      fixture.detectChanges();

      const todoListItemElements = fixture.debugElement.queryAll(
        By.css('[data-testid="todo-list-item"]')
      );

      expect(todoListItemElements.length).toEqual(2);
    });

    it('should render todo list item', () => {
      const deleteSpy = jest.spyOn(component, 'onDelete');
      fixture.detectChanges();

      const todoListItemDelBtnElement = fixture.debugElement.query(
        By.css('[data-testid="todo-list-item-delete-btn"]')
      );

      todoListItemDelBtnElement.triggerEventHandler('click');

      expect(deleteSpy.mock.calls).toMatchSnapshot();
    });
  });
});
