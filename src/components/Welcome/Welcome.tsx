import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Divider, Button, Link, Grid } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export default function Welcome(): JSX.Element {
  return (
    <Grid container direction="column" justify="center" spacing={3} style={{ textAlign: 'left' }}>
      <Grid item style={{ textAlign: 'center' }}>
        <Typography component="h1" variant="h2" id="welcome">
          <Typewriter
            options={{
              strings: ['Sam Rosenthal', 'Problem solver', 'Programmer', 'Fun guy ;)'],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
        <Divider />
      </Grid>
      <Grid item>
        <Typography component="h2" variant="h5" gutterBottom>
          <b>Hello and welcome to my personal website!</b>
        </Typography>
        <Typography component="h5" variant="subtitle1" gutterBottom>
          This past summer I worked as a Software Engineer Intern at{' '}
          <Link href="https://tnsi.com/" rel="noopener noreferrer" target="_blank">
            Transaction Network Services.
          </Link>
        </Typography>
        <Typography component="h5" variant="subtitle1">
          I am currently working on the following personal projects:
        </Typography>
        <ul style={{ marginTop: '0px' }}>
          <li>
            <Typography component="h5" variant="subtitle1">
              <Link href="https://github.com/sam-rosenthal/java-cssSelector-to-xpath" target="_blank">
                java-cssSelector-to-xpath
              </Link>
              , my OSS Project which converts CSS Selectors to XPaths.
            </Typography>
          </li>
          <li>
            <Typography component="h5" variant="subtitle1">
              <Link href="https://css-selector-to-xpath.appspot.com/" target="_blank">
                CSS Selector to XPath Converter
              </Link>
              , a website using the OSS software to provide an online conversion tool. It is deployed on Google Cloud
              Platform using its App Engine.
            </Typography>
          </li>
          <li>
            <Typography component="h5">
              This website, which I created from scratch (without using templates or a publishing tool) to gain more
              experience with web development.
            </Typography>
          </li>
        </ul>
        <Button variant="contained" color="primary" component={RouterLink} to="/Projects">
          Learn more about my projects
        </Button>
      </Grid>
    </Grid>
  );
}
