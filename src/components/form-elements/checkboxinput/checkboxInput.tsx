import React from 'react';
import '../form-elem.css';
import { Form } from 'react-bootstrap';

interface CheckboxInputProps {
  onChange: (...args: any) => void;
  onBlur: () => void;
  label: React.ReactNode;
  value: boolean;
  name: string;
  inputRef: any;
  error?: any;
  id?: string;
  containerClass?: string;
}

function CheckboxInput({
  onChange,
  onBlur,
  value,
  name,
  inputRef,
  error,
  id,
  label,
  containerClass = '',
}: CheckboxInputProps) {
  return (
    <React.Fragment>
      <label htmlFor={id} className={`checkbox checkbox-outline checkbox-outline-2x ${containerClass}`}>
        <input
          type="checkbox"
          checked={value}
          name={name}
          id={id}
          ref={inputRef}
          onChange={(evt) => {
            onChange(evt.target.checked);
          }}
          onBlur={onBlur}
        />
        <span className="checkmark"></span>
        {label}
      </label>
      {error && error.message ? (
        <>
          <Form.Control.Feedback type="invalid">
            {error.message}
          </Form.Control.Feedback>
        </>
      ) : null}
    </React.Fragment>
  );
}

export default CheckboxInput;
