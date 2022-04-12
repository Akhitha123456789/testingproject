import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonakshiComponent } from './sonakshi.component';

describe('SonakshiComponent', () => {
  let component: SonakshiComponent;
  let fixture: ComponentFixture<SonakshiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonakshiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonakshiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
