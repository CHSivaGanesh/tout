import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsitemsComponent } from './sportsitems.component';

describe('SportsitemsComponent', () => {
  let component: SportsitemsComponent;
  let fixture: ComponentFixture<SportsitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
