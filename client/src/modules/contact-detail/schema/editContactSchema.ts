import { PHONE_REGEX } from '@/core/constants/regex';
import { mixed, object, string } from 'yup';

export const editContactSchema = object().shape({
  name: string()
    .min(3, 'name must be at least 3 characters')
    .max(50, 'name must be up to 50 characters')
    .required('name is required'),
  phone: string()
    .matches(PHONE_REGEX, 'Phone invalid')
    .required('Phone number required'),
  biography: string(),
  image: mixed(),
});
