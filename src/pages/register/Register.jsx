import './register.css';

export default function Register() {
  return (
    <div className='login'>
      <div className='registerWrapper'>
        <div className='registerLeft'>
          <h3 className='loginLogo'> NexSocial</h3>
          <span className='loginDesc'>Keep in touch with friends</span>
        </div>
        <div className='registerRight'>
          <div className='registerBox'>
            <input placeholder='Username' className='loginInput' />
            <input placeholder='email' className='loginInput' />
            <input placeholder='Password' className='loginInput' />
            <input placeholder='Password confirmation' className='loginInput' />
            <button className='loginButton'>Sign Up</button>

            <button className='loginRegisterButton'>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
