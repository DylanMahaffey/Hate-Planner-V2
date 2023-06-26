import React, { FC } from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';


interface LoginProps {}

const Login: FC<LoginProps> = () => (
  <div>
    <h1>Login</h1>
    <LoginForm />
  </div>
);

export default Login;
