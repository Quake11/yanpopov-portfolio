import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEducationComponent } from './self-education.component';

describe('SelfEducationComponent', () => {
  let component: SelfEducationComponent;
  let fixture: ComponentFixture<SelfEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
