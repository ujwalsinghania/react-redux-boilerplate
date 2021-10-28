import React from 'react'
import { Form } from 'react-bootstrap'
//import { CKEditor } from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface EditorInputProps {
   value: string;
   onChange: (...args: any) => void;
   onBlur: (...args: any) => void;
   error?: any;
   inputRef?: any;
   name?: any;
}

function EditorInput({
   value,
   onChange,
   onBlur,
   error,
   inputRef,
   name
}: EditorInputProps) {
   return (
      <React.Fragment>
         {/* <CKEditor
            id={name}
            ref={inputRef}
            editor={ClassicEditor}
            data={value}
            config={{
               removePlugins: ['EasyImage', 'MediaEmbed']
            }}
            onChange={(event: any, editor: any) => {
               const data: string = editor.getData();
               onChange(data)
            }}
            onBlur={(event: any, editor: any) => {
               const data: string = editor.getData();
               onBlur(data)
            }}
         /> */}
         {
            error && error.message ? <>
               <Form.Control.Feedback type="invalid" >
                  {error.message}
               </Form.Control.Feedback>
            </> : null
         }
      </React.Fragment>
   )
}

export default EditorInput
