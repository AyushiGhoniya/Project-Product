import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninSignupFormComponent } from './signin-signup-form.component';

describe('SigninSignupFormComponent', () => {
  let component: SigninSignupFormComponent;
  let fixture: ComponentFixture<SigninSignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninSignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
