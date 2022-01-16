import * as React from 'react';
import { FormInput } from '../FormInput/FormInput';
import { CustomButton } from '../CustomButton/CustomButton';
import './SignIn.scss';

export const SignIn = () => {
  const [userDetails, setUserDetails] = React.useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails({ email: '', password: '' });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <div className="signIn">
      <h2>I already have account</h2>
      <span> Sign in with your email and password</span>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          name="email"
          type="email"
          value={userDetails.email}
          required
          label="email"
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={userDetails.password}
          required
          handleChange={handleChange}
        />
        <CustomButton>Sign In</CustomButton>
      </form>
    </div>
  );
};
