import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LamejorComponent } from './lamejor.component';

describe('LamejorComponent', () => {
  let component: LamejorComponent;
  let fixture: ComponentFixture<LamejorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LamejorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LamejorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
