import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsDeviceComponent } from './physics-device.component';

describe('PhysicsDeviceComponent', () => {
  let component: PhysicsDeviceComponent;
  let fixture: ComponentFixture<PhysicsDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicsDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicsDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
