import React, { FC } from 'react';
import { withTheme } from '@rjsf/core';
import { Theme as MaterialUITheme } from '@rjsf/material-ui';

const Form = withTheme(MaterialUITheme);

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
