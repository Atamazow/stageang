import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcentrPageComponent } from './podcentr-page.component';

describe('PodcentrPageComponent', () => {
  let component: PodcentrPageComponent;
  let fixture: ComponentFixture<PodcentrPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcentrPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcentrPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
