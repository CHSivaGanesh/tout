import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeddybearsComponent } from './teddybears.component';

describe('TeddybearsComponent', () => {
  let component: TeddybearsComponent;
  let fixture: ComponentFixture<TeddybearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeddybearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeddybearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
