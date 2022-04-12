import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MounicaComponent } from './mounica.component';

describe('MounicaComponent', () => {
  let component: MounicaComponent;
  let fixture: ComponentFixture<MounicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MounicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MounicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
