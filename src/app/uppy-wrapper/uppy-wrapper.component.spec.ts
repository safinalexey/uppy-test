import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppyWrapperComponent } from './uppy-wrapper.component';

describe('UppyWrapperComponent', () => {
  let component: UppyWrapperComponent;
  let fixture: ComponentFixture<UppyWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppyWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
