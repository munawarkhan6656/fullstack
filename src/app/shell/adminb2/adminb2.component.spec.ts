import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminb2Component } from './adminb2.component';

describe('Adminb2Component', () => {
  let component: Adminb2Component;
  let fixture: ComponentFixture<Adminb2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminb2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
