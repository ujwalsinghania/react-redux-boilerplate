import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

import '../form-elem.css';

interface FormTextInputProps {
  onChange: (...args: any) => void;
  onBlur: () => void;
  onFocus?: () => void;
  onPaste?: (args: React.ClipboardEvent) => void;
  value: any;
  name: string;
  type: string;
  className?: string;
  inputRef?: any;
  placeholder?: string;
  error?: any;
  id?: string;
  pattern?: string;
  maxLength?: number;
  appendText?: string;
  step?: string;
  readOnly?: boolean;
}

function FormTextInput({
  onChange,
  onBlur,
  onPaste,
  value,
  name,
  inputRef,
  type,
  placeholder,
  error,
  id,
  pattern,
  onFocus,
  maxLength,
  className,
  step,
  appendText,
  readOnly,
}: FormTextInputProps) {
  return (
    <InputGroup>
      <Form.Control
        className={className ? className : 'form-control'}
        type={type}
        name={name}
        value={value}
        id={id}
        step={step}
        onFocus={onFocus ? onFocus : () => {}}
        maxLength={maxLength}
        pattern={pattern}
        onWheel={(evt: any) => evt.target.blur()}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={(evt) => onChange(evt.target.value)}
        ref={inputRef}
        autoComplete={'no-auto-complete'}
        onPaste={onPaste}
        readOnly={readOnly}
      />
      {appendText ? (
        <InputGroup.Text id="basic-addon2">{appendText}</InputGroup.Text>
      ) : null}
      {error && error.message ? (
        <>
          <Form.Control.Feedback type="invalid">
            {error.message}
          </Form.Control.Feedback>
        </>
      ) : null}
    </InputGroup>
  );
}

export default FormTextInput;
