import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoListItemComponent } from './create-todo-list-item.component';

describe('CreateTodoListItemComponent', () => {
  let component: CreateTodoListItemComponent;
  let fixture: ComponentFixture<CreateTodoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTodoListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTodoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
