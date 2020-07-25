import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Divider } from '@material-ui/core';
import { JavaOSS, ConverterWebsite, PersonalWebsite } from './ProjectInformation';
import { Homesite, TIC } from './WorkInformation';

export default function Projects(): JSX.Element {
  return (
    <Grid container direction="column" justify="center" spacing={3} style={{ textAlign: 'left' }}>
      <Grid item>
        <Typography component="h1" variant="h2">
          Personal Projects
        </Typography>
        <Divider />
      </Grid>
      <JavaOSS />
      <ConverterWebsite />
      <PersonalWebsite />
      <Grid item></Grid>
      <Grid item>
        <Typography component="h1" variant="h2">
          Work Experience
        </Typography>
        <Divider />
      </Grid>
      <Homesite />
      <TIC />
      <Grid item></Grid>
      <Grid item>
        <Typography component="h1" variant="h2">
          Class Projects
        </Typography>
        <Divider />
      </Grid>
    </Grid>
  );
}
