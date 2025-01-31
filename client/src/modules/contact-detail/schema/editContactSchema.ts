import { FULL_NAME_REGEX } from '@/core/constants/regex';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { mixed, object, string } from 'yup';

export const editContactSchema = object().shape({
  name: string()
    .min(3, 'name must be at least 3 characters')
    .max(100, 'name must be up to 100 characters')
    .matches(FULL_NAME_REGEX, 'name have to be first name and last name')
    .required('name is required'),
  phone: string()
    .required('Phone number required')
    .test('phone', (phone) => isValidPhoneNumber(phone)),
  biography: string(),
  image: mixed(),
});
