import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMaterialesComponent } from './registro-materiales.component';

describe('RegistroMaterialesComponent', () => {
  let component: RegistroMaterialesComponent;
  let fixture: ComponentFixture<RegistroMaterialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMaterialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
