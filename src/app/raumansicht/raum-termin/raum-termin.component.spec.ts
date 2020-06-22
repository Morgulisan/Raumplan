import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaumTerminComponent } from './raum-termin.component';

describe('RaumTerminComponent', () => {
  let component: RaumTerminComponent;
  let fixture: ComponentFixture<RaumTerminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaumTerminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaumTerminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
