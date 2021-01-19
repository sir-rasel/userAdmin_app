import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMassageComponent } from './login-massage.component';

describe('LoginMassageComponent', () => {
  let component: LoginMassageComponent;
  let fixture: ComponentFixture<LoginMassageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMassageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
