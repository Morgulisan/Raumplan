import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminAnlegenComponent } from './termin-anlegen.component';

describe('TerminAnlegenComponent', () => {
  let component: TerminAnlegenComponent;
  let fixture: ComponentFixture<TerminAnlegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminAnlegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
