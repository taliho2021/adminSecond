import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirAmsDetailComponent } from './air-ams-detail.component';

describe('AirAmsDetailComponent', () => {
  let component: AirAmsDetailComponent;
  let fixture: ComponentFixture<AirAmsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirAmsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirAmsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
