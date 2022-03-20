import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmacComponent } from './hmac.component';

describe('HmacComponent', () => {
  let component: HmacComponent;
  let fixture: ComponentFixture<HmacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
