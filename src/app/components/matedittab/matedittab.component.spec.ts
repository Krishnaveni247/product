import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatedittabComponent } from './matedittab.component';

describe('MatedittabComponent', () => {
  let component: MatedittabComponent;
  let fixture: ComponentFixture<MatedittabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatedittabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatedittabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
