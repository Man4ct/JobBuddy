import { Logo, FormRow } from '../components';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <FormRow type='email' name='email' defaultValue='john@gmail.com' />
        <FormRow type='password' name='password' defaultValue='secret123' />

        <button className='btn btn-block'>submit</button>
        <button className='btn btn-block'>explore the app</button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
