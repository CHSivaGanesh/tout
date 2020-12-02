import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginunsuccesfulComponent } from './loginunsuccesful.component';

describe('LoginunsuccesfulComponent', () => {
  let component: LoginunsuccesfulComponent;
  let fixture: ComponentFixture<LoginunsuccesfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginunsuccesfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginunsuccesfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
