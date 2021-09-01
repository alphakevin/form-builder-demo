import React, { useCallback, useEffect, useRef, useState } from 'react';
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
      height: 'calc(50vh - 32px)',
    },
  })
);

const options = {
  mode: 'json',
  theme: 'material',
  lineNumbers: true,
  height: window.innerHeight,
};

export interface Props {
  value: any;
}

export function SourceEditor(props: Props) {
  const { value } = props;
  const editorRef = useRef<any>(null);
  const classes = useStyles();
  const source = JSON.stringify(value, null, 2);
  const updateSize = useCallback(
    () => editorRef.current?.setSize(null, window.innerHeight / 2 - 32),
    []
  );
  useEffect(() => {
    updateSize();
    const handleResize = () => updateSize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return (
    <div className={classes.root}>
      <CodeMirror
        className={classes.editor}
        value={source}
        options={options}
        editorDidMount={(editor) => (editorRef.current = editor)}
        onBeforeChange={(editor, data, value) => {}}
        onChange={(editor, data, value) => {}}
      />
    </div>
  );
}
