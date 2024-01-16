import { Logo, FormRow } from '../components';
import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import customFetch from '../utils/customFetch.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('auth/login', data);
    toast.success('Login Successfull', {
      autoClose: 1500,
    });
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    try {
      await customFetch.post('/auth/login', data);
      toast.success('take a test drive');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <button className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        <button type='button' className='btn btn-block' onClick={loginDemoUser}>
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
