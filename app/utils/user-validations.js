import { validator } from 'ember-cp-validations';

export const email = [
  validator('presence', true),
  validator('format', { type: 'email' })
];

export const password = [
  validator('presence', true),
  validator('length', {
    min: 4,
    max: 24
  })
];

export const passwordConfirmation = [
  validator('presence', true),
  validator('confirmation', {
    on: 'model.password',
    message: '{description} do not match',
    description: 'Passwords'
  })
];

export default {
  email, password, passwordConfirmation
};
