import * as React from 'react';
import './FormInput.scss';

export const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="formInput" onChange={handleChange} {...otherProps} />
    {label && (
      <label
        className={`${otherProps.value.length ? 'shrink' : ''} formInputLabel`}
      >
        {label}
      </label>
    )}
  </div>
);
