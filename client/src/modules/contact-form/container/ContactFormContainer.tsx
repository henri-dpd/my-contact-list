import React from 'react';
import { useForm } from 'react-hook-form';
import { ObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/core/components/button/Button';
import { ContactSchema } from '@/core/types/contact';
import Input from '@/core/components/inputs/Input';
import TextArea from '@/core/components/inputs/TextArea';

interface Props {
  initalData?: ContactSchema;
  contactSchema: ObjectSchema<ContactSchema>;
  onSubmit: (data: ContactSchema) => void;
}

const UserRegistrationForm: React.FC<Props> = ({
  contactSchema,
  initalData,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: initalData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Input
          name="name"
          label="Name"
          props={register('name')}
          error={errors.name?.message}
        />
        <Input
          name="phone"
          label="Phone Number"
          props={register('phone')}
          error={errors.phone?.message}
          type="tel"
        />
        <TextArea
          name="biography"
          label="Biography"
          props={register('biography')}
          error={errors.biography?.message}
        />
      </div>
      <div className="flex justify-center items-center">
        <Button
          className="w-full max-w-[200px]"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default UserRegistrationForm;
