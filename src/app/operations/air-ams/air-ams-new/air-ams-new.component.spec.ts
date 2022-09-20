import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirAmsNewComponent } from './air-ams-new.component';

describe('AirAmsNewComponent', () => {
  let component: AirAmsNewComponent;
  let fixture: ComponentFixture<AirAmsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirAmsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirAmsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
