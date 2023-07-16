import login from '../login.module.css';

export const LoginForm = () => {
  return (
    <div className={login.formContainer}>
      <h1>Sign in to your account</h1>
      <form className={login.form} action=''>
        <div className={login.formGroup}>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
        </div>
        <div className={login.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
        </div>
        <button>Continue</button>
        <p>Forgot password?</p>
      </form>
      
    </div>
  );
};
