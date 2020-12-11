import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenteparcial1Component } from './componenteparcial1.component';

describe('Componenteparcial1Component', () => {
  let component: Componenteparcial1Component;
  let fixture: ComponentFixture<Componenteparcial1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componenteparcial1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componenteparcial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
