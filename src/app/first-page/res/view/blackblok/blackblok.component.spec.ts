import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackblokComponent } from './blackblok.component';

describe('BlackblokComponent', () => {
  let component: BlackblokComponent;
  let fixture: ComponentFixture<BlackblokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackblokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackblokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
