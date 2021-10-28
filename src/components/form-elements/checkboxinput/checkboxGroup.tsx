import React, { useEffect, useState } from "react";
import "../form-elem.css";
import { Form } from "react-bootstrap";
import { OptionValue } from "../../../interfaces/common";

interface CheckboxInputProps {
  onChange: (...args: any) => void;
  onBlur: () => void;
  options: OptionValue[];
  value: any;
  name: string;
  inputRef: any;
  error?: any;
  id?: string;
}

function CheckboxGroupInput({
  onChange,
  onBlur,
  options,
  value,
  name,
  inputRef,
  error,
  id,
}: CheckboxInputProps) {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  function handleSelect(checkedName: string) {
    const newNames = checkedValues?.includes(checkedName)
      ? checkedValues?.filter((name) => name !== checkedName)
      : [...(checkedValues ?? []), checkedName];
    setCheckedValues(newNames);
    return newNames;
  }

  return (
    <React.Fragment>
      {options.map((opt: OptionValue, index: number) => {
        return (
          <label key={index} className="container-checkbox">
            {opt.label}
            <input
              type="checkbox"
              name="impact_change_initiative"
              value={opt.value}
              checked={checkedValues.includes(opt.value)}
              onChange={() => handleSelect(opt.value)}
              ref={inputRef}
            />
            <span className="checkmark" />
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
    </React.Fragment>
  );
}

export default CheckboxGroupInput;
