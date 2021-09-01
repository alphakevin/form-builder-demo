import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import { FormBuilder } from './components/FormBuilder';
import { FormViewer } from './components/FormViewer';
import SourceEditor from './components/SourceEditor';
import { FormBuilderSchema } from './schemas/form-builder';
import { transformToJsonSchema } from './schemas/utils';

function App() {
  const [builderSchema, setBuilderSchema] = useState<FormBuilderSchema>({
    title: '',
    fields: [],
  });
  const [formSchema, setFormSchema] = useState({});
  const [formData, setFormData] = useState({});
  useEffect(() => {
    setFormSchema(transformToJsonSchema(builderSchema));
    setFormData({});
  }, [builderSchema]);
  return (
    <div className='App'>
      <div className='form-builder'>
        <FormBuilder value={builderSchema} onChange={setBuilderSchema} />
      </div>
      <div className='source-editor'>
        <Typography>Builder Schema</Typography>
        <SourceEditor value={builderSchema} />
        <Typography>JSON Schema</Typography>
        <SourceEditor value={formSchema} />
      </div>{' '}
      <div className='form-builder'>
        <FormViewer schema={formSchema} value={formData} onChange={setFormData} />
      </div>
      <div className='source-editor'>
        <Typography>Form Data</Typography>
        <SourceEditor value={formData} />
      </div>
    </div>
  );
}

export default App;
