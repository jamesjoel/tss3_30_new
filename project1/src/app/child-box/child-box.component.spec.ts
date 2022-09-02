import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBoxComponent } from './child-box.component';

describe('ChildBoxComponent', () => {
  let component: ChildBoxComponent;
  let fixture: ComponentFixture<ChildBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
