import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerAnimationComponent } from './pointer-animation.component';

describe('PointerAnimationComponent', () => {
  let component: PointerAnimationComponent;
  let fixture: ComponentFixture<PointerAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointerAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointerAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
