import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusoneComponent } from './busone.component';

describe('BusoneComponent', () => {
  let component: BusoneComponent;
  let fixture: ComponentFixture<BusoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
