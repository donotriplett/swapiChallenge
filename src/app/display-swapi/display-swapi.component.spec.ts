import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySWAPIComponent } from './display-swapi.component';

describe('DisplaySWAPIComponent', () => {
  let component: DisplaySWAPIComponent;
  let fixture: ComponentFixture<DisplaySWAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySWAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySWAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
