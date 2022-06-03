import React from 'react';
import { Form } from 'react-bootstrap';

import '../form-elem.css';

interface FormTextInputProps {
  onChange: (...args: any) => void;
  onBlur: () => void;
  onPaste?: (args: React.ClipboardEvent) => void;
  value: string;
  name: string;
  type?: string;
  inputRef?: any;
  placeholder?: string;
  error?: any;
  id?: string;
  className?: string;
  disabled?: boolean;
}

function FormTextAreaInput({
  onChange,
  onBlur,
  onPaste,
  value,
  name,
  inputRef,
  type,
  placeholder,
  className,
  error,
  id,
  disabled,
}: FormTextInputProps) {
  return (
    <React.Fragment>
      <Form.Control
        type={type}
        name={name}
        className={className ? className : 'form-control'}
        id={id}
        as="textarea"
        value={value}
        rows={4}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={(evt) => onChange(evt.target.value)}
        ref={inputRef}
        autoComplete={'no-auto-complete'}
        onPaste={onPaste}
        disabled={disabled}
      />
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

export default FormTextAreaInput;
