import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarnombreComponent } from './cambiarnombre.component';

describe('CambiarnombreComponent', () => {
  let component: CambiarnombreComponent;
  let fixture: ComponentFixture<CambiarnombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarnombreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarnombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
