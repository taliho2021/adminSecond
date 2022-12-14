import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckAmsComponent } from './truck-ams.component';

describe('TruckAmsComponent', () => {
  let component: TruckAmsComponent;
  let fixture: ComponentFixture<TruckAmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckAmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckAmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
