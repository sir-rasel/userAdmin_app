import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMassageComponent } from './register-massage.component';

describe('RegisterMassageComponent', () => {
  let component: RegisterMassageComponent;
  let fixture: ComponentFixture<RegisterMassageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMassageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
