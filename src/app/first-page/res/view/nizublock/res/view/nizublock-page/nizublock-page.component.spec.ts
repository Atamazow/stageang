import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NizublockPageComponent } from './nizublock-page.component';

describe('NizublockPageComponent', () => {
  let component: NizublockPageComponent;
  let fixture: ComponentFixture<NizublockPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NizublockPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NizublockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
