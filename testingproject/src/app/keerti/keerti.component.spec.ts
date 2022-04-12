import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeertiComponent } from './keerti.component';

describe('KeertiComponent', () => {
  let component: KeertiComponent;
  let fixture: ComponentFixture<KeertiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeertiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
