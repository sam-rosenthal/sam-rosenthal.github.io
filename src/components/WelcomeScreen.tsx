import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Theme, makeStyles, createStyles, Container, Divider, Button, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import TypedHeader from './TypedHeader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // padding: theme.spacing(3),
      height: '100%',
    },
    sam: {
      textAlign: 'center',
      fontFamily: 'lato',
      padding: theme.spacing(3),
    },
  }),
);

export default function WelcomeScreen(): JSX.Element {
  const classes = useStyles();
  return (
    <Container className={classes.root} style={{ textAlign: 'left' }}>
      {TypedHeader("Hi I'm Sam!")}
      <Typography component="h2" variant="h5" gutterBottom>
        While I do not like green eggs and ham, I really enjoy programming and problem solving.
      </Typography>
      <Divider />
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
          <Typography component="h5" variant="subtitle1">
            This website, which I created from scratch (without using templates or a publishing tool) to gain more
            experience with web development.
          </Typography>
        </li>
      </ul>
      <Button variant="contained" color="primary" component={RouterLink} to="/Projects">
        Learn more about my projects
      </Button>
    </Container>
  );
}
