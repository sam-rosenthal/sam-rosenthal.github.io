import { Typography } from '@material-ui/core';
import React from 'react';
import Typewriter from 'typewriter-effect';

export default function TypedHeader(text: string): JSX.Element {
  return (
    <Typography component="h1" variant="h2" id="skills">
      <Typewriter
        options={{
          strings: text,
          autoStart: true,
        }}
      />
    </Typography>
  );
}
