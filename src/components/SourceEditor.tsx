import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'auto',
    },
    editor: {
      height: 'calc(50vh - 24px)',
    },
  }),
);

const options = {
  mode: 'json',
  theme: 'material',
  lineNumbers: true,
  height: window.innerHeight,
}

export interface Props {
  value: any;
}

export default function SourceEditor(props: Props) {
  const { value } = props;
  const [editor, setEditor] = useState<any>(null);
  const classes = useStyles();
  const source = JSON.stringify(value, null, 2);
  useEffect(() => {
    editor?.setSize(null, window.innerHeight / 2 - 24);
  });
  return (
    <div className={classes.root}>
      <CodeMirror
        className={classes.editor}
        value={source}
        options={options}
        editorDidMount={(editor) => setEditor(editor)}
        onBeforeChange={(editor, data, value) => {}}
        onChange={(editor, data, value) => {}}
      />
    </div>
  )
}
