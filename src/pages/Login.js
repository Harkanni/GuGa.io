import login from '../login.module.css';
import { LoginForm } from '../components/LoginForm';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div className={login.body}>
      <nav className={login.nav}>
        <Link to={"/"} className={login.logo}>guga</Link>
      </nav>
      <div className={login.main}>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};
