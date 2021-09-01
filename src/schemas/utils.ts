import { JSONSchema7 } from 'json-schema';
import { FormBuilderField, FormBuilderSchema } from './form-builder';

export function transformFieldSchema(field: FormBuilderField): JSONSchema7 {
  const formSchema: JSONSchema7 = {
    title: field.label,
  };
  switch (field.control) {
    case 'checkbox':
      return {
        type: 'boolean',
        ...formSchema,
      };
    case 'text':
      return {
        type: 'string',
        ...formSchema,
      };
    case 'select':
      return {
        type: 'string',
        enum: field.options,
        ...formSchema,
      };
  }
}

export function transformToJsonSchema(
  builderSchema: FormBuilderSchema
): JSONSchema7 {
  const schema: JSONSchema7 = {
    type: 'object',
    title: builderSchema.title,
    properties: builderSchema.fields
      .filter((field) => field.key && field.control as any !== 'No')
      .reduce(
        (prev, field) => ({
          ...prev,
          [field.key]: transformFieldSchema(field),
        }),
        {}
      ),
  };
  return schema;
}
