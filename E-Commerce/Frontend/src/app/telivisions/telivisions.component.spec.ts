import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelivisionsComponent } from './telivisions.component';

describe('TelivisionsComponent', () => {
  let component: TelivisionsComponent;
  let fixture: ComponentFixture<TelivisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelivisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelivisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
