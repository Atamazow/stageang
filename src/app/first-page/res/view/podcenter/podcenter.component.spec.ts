import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcenterComponent } from './podcenter.component';

describe('PodcenterComponent', () => {
  let component: PodcenterComponent;
  let fixture: ComponentFixture<PodcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
