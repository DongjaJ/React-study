import { useState } from 'react';
import { FormValues } from '../components/day54-form/SignUpForm';

type UseFormProps = {
  initialValues: FormValues;
  onSubmit: () => void;
  validate: (args: FormValues) => Partial<FormValues>;
};

export default function useForm({
  initialValues,
  onSubmit,
  validate,
}: UseFormProps) {
  const [values, setValues] = useState(initialValues);
  const [error, setErrors] = useState<Partial<FormValues>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    const newErrors = validate(values);
    if (Object.keys(newErrors).length === 0) {
      await onSubmit();
    }
    setErrors(newErrors);
    setIsLoading(false);
  };

  return { values, error, isLoading, handleChange, handleSubmit };
}
