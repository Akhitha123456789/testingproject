import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanjaiComponent } from './sanjai.component';

describe('SanjaiComponent', () => {
  let component: SanjaiComponent;
  let fixture: ComponentFixture<SanjaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanjaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanjaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
