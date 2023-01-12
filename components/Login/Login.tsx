import * as React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../feature/user';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="login">
      <button
        onClick={() =>
          dispatch(login({ name: 'Ajay', age: 19, email: 'ajay@abc.com' }))
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
export default Login;
