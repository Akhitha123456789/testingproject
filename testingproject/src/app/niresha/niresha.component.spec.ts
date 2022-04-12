import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NireshaComponent } from './niresha.component';

describe('NireshaComponent', () => {
  let component: NireshaComponent;
  let fixture: ComponentFixture<NireshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NireshaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NireshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
