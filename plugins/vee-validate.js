import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('required', required);
extend('email', email);
extend('password', {
  validate(value) {
    return {
      required: true,
      valid: value.length >= 8,
    }
  },
  computesRequired: true,
});
