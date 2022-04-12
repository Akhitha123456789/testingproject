import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrntComponent } from './prnt.component';

describe('PrntComponent', () => {
  let component: PrntComponent;
  let fixture: ComponentFixture<PrntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
