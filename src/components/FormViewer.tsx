import React from 'react';
import { Form } from './Form';

interface FormViewerProps {
  schema: any;
  value: any;
  onChange: (value: any) => void;
}

export function FormViewer(props: FormViewerProps) {
  const { schema, value, onChange } = props;
  return (
    <Form
      schema={schema}
      formData={value}
      onChange={(event) => onChange(event.formData)}
    />
  );
}
