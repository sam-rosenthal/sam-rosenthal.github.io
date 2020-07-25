import React from 'react';
import TypedHeader from './TypedHeader';
import { Divider } from '@material-ui/core';

export default function About(): JSX.Element {
  return (
    <>
      {TypedHeader('About me')}
      <Divider />
    </>
  );
}
