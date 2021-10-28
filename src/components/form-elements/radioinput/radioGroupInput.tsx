import React from "react";
import "../form-elem.css";
import { Form } from "react-bootstrap";
import { OptionValue } from "../../../interfaces/common";

interface RadioInputProps {
  onChange: (...args: any) => void;
  onBlur: () => void;
  options: OptionValue[];
  value: string | undefined;
  name: string;
  inputRef: any;
  placeholder?: string;
  error?: any;
  id?: string;
  containerClass?: string;
}

function RadioInput({
  onChange,
  onBlur,
  value,
  name,
  inputRef,
  placeholder,
  error,
  id,
  options,
  containerClass,
}: RadioInputProps) {
  return (
    <div className={containerClass ? containerClass : "radio-inline"}>
      {options.map((opt: OptionValue, index: number) => {
        return (
          <label key={index} className="radio">
            <input
              type="radio"
              checked={value == opt.value}
              name={name}
              value={opt.value}
              onChange={(evt) => {
                onChange(evt.target.value);
              }}
            />
            <span className="checkmark"></span>

            {opt.label}
          </label>
        );
      })}
      {error && error.message ? (
        <>
          <Form.Control.Feedback type="invalid">
            {error.message}
          </Form.Control.Feedback>
        </>
      ) : null}
    </div>
  );
}

export default RadioInput;
