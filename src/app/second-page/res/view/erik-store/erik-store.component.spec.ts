import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErikStoreComponent } from './erik-store.component';

describe('ErikStoreComponent', () => {
  let component: ErikStoreComponent;
  let fixture: ComponentFixture<ErikStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErikStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErikStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
