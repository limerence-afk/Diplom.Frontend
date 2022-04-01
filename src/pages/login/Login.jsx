import './login.css';

export default function Login() {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'> NexSocial</h3>
          <span className='loginDesc'>Keep in touch with friends</span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <input placeholder='email' className='loginInput' />
            <input placeholder='Password' className='loginInput' />
            <button className='loginButton'>Log in</button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegisterButton'>
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
