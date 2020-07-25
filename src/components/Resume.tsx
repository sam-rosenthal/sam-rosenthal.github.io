import React from 'react';
// import { Paper } from '@material-ui/core';
import './Resume.pdf';
export default function Resume(): JSX.Element {
  return (
    // <Paper style={{ width: '100%', height: '100%' }}>
    <iframe
      src={'./Resume.pdf'}
      title="resume"
      style={{
        display: 'flex',
        minWidth: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
    ></iframe>
    // </Paper>
  );
}
