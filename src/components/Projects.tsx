import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import { JavaOSS, ConverterWebsite, PersonalWebsite } from './ProjectInformation';
import { Homesite, TIC } from './WorkInformation';
import TypedHeader from './TypedHeader';

export default function Projects(): JSX.Element {
  return (
    <Grid container direction="column" justify="center" spacing={3} style={{ textAlign: 'left' }}>
      <Grid item style={{ textAlign: 'center' }}>
        {TypedHeader('Personal Projects')}
        <Divider />
      </Grid>
      <JavaOSS />
      <ConverterWebsite />
      <PersonalWebsite />
      <Grid item></Grid>
      <Grid item style={{ textAlign: 'center' }}>
        {TypedHeader('Work Experience')}
        <Divider />
      </Grid>
      <Homesite />
      <TIC />
      <Grid item></Grid>
      <Grid item style={{ textAlign: 'center' }}>
        {TypedHeader('Class Projects')}
        <Divider />
      </Grid>
    </Grid>
  );
}
