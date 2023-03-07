import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelateComponent } from './pixelate.component';

describe('PixelateComponent', () => {
  let component: PixelateComponent;
  let fixture: ComponentFixture<PixelateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixelateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PixelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
