import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatySecondComponent } from './staty-second.component';

describe('StatySecondComponent', () => {
  let component: StatySecondComponent;
  let fixture: ComponentFixture<StatySecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatySecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatySecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
