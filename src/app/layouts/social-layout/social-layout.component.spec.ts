import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLayoutComponent } from './social-layout.component';

describe('SocialLayoutComponent', () => {
  let component: SocialLayoutComponent;
  let fixture: ComponentFixture<SocialLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
