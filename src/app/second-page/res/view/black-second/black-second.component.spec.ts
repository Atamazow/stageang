import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackSecondComponent } from './black-second.component';

describe('BlackSecondComponent', () => {
  let component: BlackSecondComponent;
  let fixture: ComponentFixture<BlackSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
