import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BustwoComponent } from './bustwo.component';

describe('BustwoComponent', () => {
  let component: BustwoComponent;
  let fixture: ComponentFixture<BustwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BustwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BustwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
