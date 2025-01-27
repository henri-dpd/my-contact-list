import { mixed, object, string } from 'yup';

export const newContactSchema = object().shape({
  name: string()
    .min(3, 'name must be at least 3 characters')
    .min(50, 'name must be up to 50 characters')
    .required('name is required'),
  phone: string()
    .matches(/^\+1 \(\d{3}\) \d{3}-\d{4}$/, 'Phone invalid')
    .required('Phone number required'),
  image: mixed(),
  biography: string(),
});
