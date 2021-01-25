import { PretifyPhoneNumberPipe } from './pretify-phone-number.pipe';

describe('PretifyPhoneNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new PretifyPhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
