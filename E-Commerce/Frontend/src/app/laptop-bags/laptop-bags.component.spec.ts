import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopBagsComponent } from './laptop-bags.component';

describe('LaptopBagsComponent', () => {
  let component: LaptopBagsComponent;
  let fixture: ComponentFixture<LaptopBagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopBagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
