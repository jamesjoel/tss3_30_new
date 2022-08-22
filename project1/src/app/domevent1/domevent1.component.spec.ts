import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Domevent1Component } from './domevent1.component';

describe('Domevent1Component', () => {
  let component: Domevent1Component;
  let fixture: ComponentFixture<Domevent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Domevent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Domevent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
