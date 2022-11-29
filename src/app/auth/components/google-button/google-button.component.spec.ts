import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleButtonComponent } from './google-button.component';

describe('GoogleButtonComponent', () => {
  let component: GoogleButtonComponent;
  let fixture: ComponentFixture<GoogleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
