import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCipherComponent } from './general-cipher.component';

describe('GeneralCipherComponent', () => {
  let component: GeneralCipherComponent;
  let fixture: ComponentFixture<GeneralCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralCipherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
