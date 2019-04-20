import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cube1080Component } from './cube1080.component';

describe('Cube1080Component', () => {
  let component: Cube1080Component;
  let fixture: ComponentFixture<Cube1080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cube1080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cube1080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
