import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackblokSecondComponent } from './blackblok-second.component';

describe('BlackblokSecondComponent', () => {
  let component: BlackblokSecondComponent;
  let fixture: ComponentFixture<BlackblokSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackblokSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackblokSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
