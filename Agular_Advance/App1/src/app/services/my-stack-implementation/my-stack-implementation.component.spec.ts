import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStackImplementationComponent } from './my-stack-implementation.component';

describe('MyStackImplementationComponent', () => {
  let component: MyStackImplementationComponent;
  let fixture: ComponentFixture<MyStackImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyStackImplementationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStackImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
