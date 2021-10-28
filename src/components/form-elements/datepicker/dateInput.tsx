import React from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import '../form-elem.css';

interface DateInputProps {
   onChange: (...args: any) => void;
   onBlur?: () => void;
   value: Date | undefined;
   name: string;
   inputRef?: any;
   placeholder?: string;
   error?: any;
   id?: string;
   maxDate?: Date;
   minDate?: Date;
   startDate?: Date;
   endDate?: Date;
   disabled?: boolean;
   dark?: boolean;
   dateFormat?: string;
   selectsRange?: boolean;
   inline?: boolean;
   showTimeSelect?: boolean;
   isClearable?: boolean;
   minTime?: Date;
   maxTime?: Date;
   filterTime?: any;
}

function DateInput({
   onChange,
   onBlur,
   value,
   name,
   inputRef,
   placeholder,
   error,
   filterTime,
   id,
   maxDate,
   minDate,
   startDate,
   endDate,
   disabled,
   minTime,
   maxTime,
   dark,
   dateFormat = 'MM/dd/yyyy',
   selectsRange = false,
   inline = false,
   showTimeSelect = false,
   isClearable = false,
}: DateInputProps) {

   const handleFocus = () => {
      let elem: HTMLElement = document.getElementsByName(name)[0]
      elem.setAttribute("autocomplete", "off");
   }

   return (
      <div className='ne-datepicker-container'>
         <DatePicker
            selected={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholderText={placeholder}
            name={name}
            id={id}
            disabled={disabled}
            ref={inputRef}
            maxDate={maxDate}
            onFocus={handleFocus}
            minDate={minDate}
            startDate={startDate}
            endDate={endDate}
            minTime={minTime}
            maxTime={maxTime}
            showYearDropdown
            dateFormat={dateFormat}
            className="form-control"
            autoComplete={'no-auto-complete'}
            selectsRange={selectsRange}
            inline={inline}
            showTimeSelect={showTimeSelect}
            timeIntervals={1}
            filterTime={filterTime}
            isClearable={isClearable}
         />
         <i className="fa fa-calendar-o datepicker-icon"></i>
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

export default DateInput;
