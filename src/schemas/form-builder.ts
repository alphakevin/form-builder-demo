import { JSONSchema7 } from 'json-schema';

export type FormBuilderField = {
  key: string;
  label: string;
  control: 'text' | 'checkbox' | 'select';
  options?: string[];
};

export type FormBuilderSchema = {
  title: string;
  fields: FormBuilderField[];
};

export const formBuilderSchema: JSONSchema7 = {
  type: 'object',
  title: 'Form Builder',
  properties: {
    title: { type: 'string', title: 'Form Title' },
    fields: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          control: {
            type: 'string',
            enum: ['text', 'checkbox', 'select'],
            default: 'No',
          },
          key: {
            type: 'string',
          },
          label: {
            type: 'string',
          },
        },
        required: ['control', 'key', 'label'],
        dependencies: {
          control: {
            oneOf: [
              {
                properties: {
                  control: {
                    enum: ['text'],
                  },
                },
              },
              {
                properties: {
                  control: {
                    enum: ['checkbox'],
                  },
                },
              },
              {
                properties: {
                  control: {
                    enum: ['select'],
                  },
                  options: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  },
};
