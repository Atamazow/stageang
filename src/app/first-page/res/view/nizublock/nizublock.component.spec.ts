import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NizublockComponent } from './nizublock.component';

describe('NizublockComponent', () => {
  let component: NizublockComponent;
  let fixture: ComponentFixture<NizublockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NizublockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NizublockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
