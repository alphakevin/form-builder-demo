import React, { FC } from 'react';
import { withTheme } from '@rjsf/core';
import { Theme as MaterialUITheme } from '@rjsf/material-ui';
import { FormBuilderSchema, formBuilderSchema } from '../schemas/form-builder';

const Form = withTheme(MaterialUITheme);

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
