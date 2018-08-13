import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcDeskComponent } from './pc-desk.component';

describe('PcDeskComponent', () => {
  let component: PcDeskComponent;
  let fixture: ComponentFixture<PcDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
