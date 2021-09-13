import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseContentComponent } from './house-content.component';

describe('HouseContentComponent', () => {
  let component: HouseContentComponent;
  let fixture: ComponentFixture<HouseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
