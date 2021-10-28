import React from 'react';
import Select from 'react-select';
import '../form-elem.css';
import { Form } from 'react-bootstrap';
import { OptionValue } from '../../../interfaces/common';

interface SelectInputProps {
  onChange: (...args: any) => void;
  onBlur?: () => void;
  options: OptionValue[];
  value: OptionValue | undefined;
  name: string;
  inputRef?: any;
  placeholder?: string;
  error?: any;
  id?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  dark?: boolean;
  isDisabled?: boolean;
  isMulti?: boolean;
  getOptionValue?: string;
  getOptionLabel?: string;
  containerClass?: string;
}

function SelectInput({
  onChange,
  onBlur,
  value,
  name,
  inputRef,
  placeholder,
  error,
  id,
  options,
  isSearchable,
  isClearable = false,
  isDisabled,
  isMulti,
  containerClass,
}: SelectInputProps) {
  return (
    <div className={`select-container ${containerClass || ''}`}>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        isClearable={isClearable}
        isSearchable={isSearchable == undefined ? true : isSearchable}
        onBlur={onBlur}
        name={name}
        menuPortalTarget={document.body}
        isMulti={isMulti}
        id={id}
        isDisabled={isDisabled}
        ref={inputRef}
        placeholder={placeholder}
      />
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

export default SelectInput;
