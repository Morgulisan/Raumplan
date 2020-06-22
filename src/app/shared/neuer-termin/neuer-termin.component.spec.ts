import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuerTerminComponent } from './neuer-termin.component';

describe('NeuerTerminComponent', () => {
  let component: NeuerTerminComponent;
  let fixture: ComponentFixture<NeuerTerminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuerTerminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuerTerminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
