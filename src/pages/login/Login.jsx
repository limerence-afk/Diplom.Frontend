import './login.css';
import { useContext, useRef } from 'react';
import { loginCall } from '../../ApiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    await loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    navigate('/');
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'> NexSocial</h3>
          <span className='loginDesc'>Keep in touch with friends</span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={handleClick}>
            <input
              placeholder='email'
              type='email'
              required
              className='loginInput'
              ref={email}
            />
            <input
              placeholder='Password'
              type='password'
              required
              minLength='6'
              className='loginInput'
              ref={password}
            />
            <button className='loginButton' disabled={isFetching}>
              {isFetching ? (
                <CircularProgress style={{ color: 'white' }} />
              ) : (
                'Log in'
              )}
            </button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegisterButton'>
              {isFetching ? (
                <CircularProgress style={{ color: 'white' }} />
              ) : (
                'Create new account'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
