import React, { FC } from 'react';


interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => (
  <form>

    <label htmlFor="email">Email</label>
    <input type='email' name='email' id='emailInput'/>

    <label htmlFor="password">Password</label>
    <input type='password' name='password' id='passwordInput'/>

    <button>Login</button>
    
  </form>
);

export default LoginForm;
