import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminb1Component } from './adminb1.component';

describe('Adminb1Component', () => {
  let component: Adminb1Component;
  let fixture: ComponentFixture<Adminb1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminb1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
