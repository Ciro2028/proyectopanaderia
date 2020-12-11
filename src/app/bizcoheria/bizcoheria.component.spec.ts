import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizcoheriaComponent } from './bizcoheria.component';

describe('BizcoheriaComponent', () => {
  let component: BizcoheriaComponent;
  let fixture: ComponentFixture<BizcoheriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizcoheriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizcoheriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
