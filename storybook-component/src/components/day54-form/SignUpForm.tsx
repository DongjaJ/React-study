import Input from './Input';
import Button from './Button';
import useForm from '../../hooks/useForm';
import ErrorText from './ErrorText';
import CardForm from './CardForm';
import Title from './Title';

export interface FormProps {
  onSubmit: () => void;
}

export interface FormValues {
  name: string;
  password: string;
  passwordConfirm?: string;
}

const SignUpForm = ({ onSubmit }: FormProps) => {
  const { isLoading, error, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit,
    validate: ({ name, password, passwordConfirm }: FormValues) => {
      const newErrors = {} as Partial<FormValues>;
      if (!name) newErrors.name = '이름을 입력해주세요';
      if (!password) newErrors.password = '비밀번호를 입력해주세요';
      if (!passwordConfirm)
        newErrors.passwordConfirm = '비밀번호를 입력해주세요';
      return newErrors;
    },
  });

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Input name="name" placeholder="Name" onChange={handleChange} />
      {error.name && <ErrorText label={error.name} />}
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      {error.password && <ErrorText label={error.password} />}
      <Input
        type="password"
        name="passwordConfirm"
        placeholder="Password confirm"
        onChange={handleChange}
      />
      {error.passwordConfirm && <ErrorText label={error.passwordConfirm} />}
      <Button disabled={isLoading}>SignUp</Button>
    </CardForm>
  );
};

export default SignUpForm;
