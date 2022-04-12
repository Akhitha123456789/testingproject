import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhanaComponent } from './dhana.component';

describe('DhanaComponent', () => {
  let component: DhanaComponent;
  let fixture: ComponentFixture<DhanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
