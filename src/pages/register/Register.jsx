import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { axiosApi } from '../../network';
import './register.css';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordConfirm.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axiosApi.post('/auth/register', user);
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className='login'>
      <div className='registerWrapper'>
        <div className='registerLeft'>
          <h3 className='loginLogo'> NexSocial</h3>
          <span className='loginDesc'>Keep in touch with friends</span>
        </div>
        <div className='registerRight'>
          <form className='registerBox' onSubmit={handleClick}>
            <input
              placeholder='Username'
              required
              ref={username}
              className='loginInput'
            />
            <input
              placeholder='email'
              required
              ref={email}
              type='email'
              className='loginInput'
            />
            <input
              placeholder='Password'
              required
              ref={password}
              type='password'
              minLength='6'
              className='loginInput'
            />
            <input
              placeholder='Password confirmation'
              required
              ref={passwordConfirm}
              type='password'
              className='loginInput'
            />
            <button className='loginButton' type='submit'>
              Sign Up
            </button>

            <button className='loginRegisterButton'>Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
}
