import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonquesComponent } from './ponques.component';

describe('PonquesComponent', () => {
  let component: PonquesComponent;
  let fixture: ComponentFixture<PonquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
