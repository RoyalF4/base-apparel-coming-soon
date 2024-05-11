export function validation(input) {
  input = input.current;

  if (input.validity.valid) {
    return '';
  } else {
    if (input.validity.valueMissing) {
      return 'An email is required';
    } else if (input.validity.typeMismatch) {
      return 'Please provide a valid email address';
    }
  }
}
