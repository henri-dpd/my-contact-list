import { mixed, object, string } from 'yup';

export const newContactSchema = object().shape({
  name: string()
    .min(3, 'name must be at least 3 characters')
    .required('name is required'),
  phone: string()
    .length(10, 'Phone invalid')
    .matches(RegExp(/^\d{10}$/), 'Phone invalid')
    .required('Phone number required'),
  image: mixed(),
  biography: string(),
});
