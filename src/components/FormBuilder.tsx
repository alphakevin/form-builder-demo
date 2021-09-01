import React from 'react';
import { FormBuilderSchema, formBuilderSchema } from '../schemas/form-builder';
import { Form } from './Form';

interface FormBuilderProps {
  value: FormBuilderSchema;
  onChange: (schema: FormBuilderSchema) => void;
}

export function FormBuilder(props: FormBuilderProps) {
  const { value, onChange } = props;
  return (
    <Form
      schema={formBuilderSchema}
      formData={value}
      onChange={(event) => onChange(event.formData)}
    />
  );
}
