import React from 'react';
import {
  Divider,
  Grid,
  Typography,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItem,
  Theme,
  List,
  Icon,
} from '@material-ui/core';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import { makeStyles, createStyles } from '@material-ui/styles';
import FlightIcon from '@material-ui/icons/Flight';
import { loadCSS } from 'fg-loadcss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
    flexlist: {
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
      },
      paddingTop: '0px',
    },
    list: {
      paddingTop: '0px',
    },
  }),
);

interface liData {
  icon: JSX.Element;
  primaryText: string;
  secondaryText: string | null;
}

function createListData(icon: JSX.Element, primaryText: string, secondaryText: string | null): liData {
  return { icon, primaryText, secondaryText };
}

interface sectionData {
  title: string;
  listData: Array<liData>;
}

function createSectionData(title: string, listData: Array<liData>): sectionData {
  return { title, listData };
}

const generalData = [
  createListData(
    <Icon className="fas fa-university" style={{ color: 'white' }} />,
    'Currently a Senior at Cornell Univeristy',
    'Ithaca, NY',
  ),
  createListData(
    <SchoolIcon />,
    'Majoring in Computer Science and minoring in Operations Reaserch',
    'College of Engineering',
  ),
  createListData(<SmartphoneIcon />, 'Passionate about solving real-world problems through technology', null),
  createListData(<HomeIcon />, 'Proud Marylander', 'Bethesda, Maryland'),
];

const covidData = [
  createListData(<FitnessCenterIcon />, 'Worked out gymless', 'Body/free weights, yoga, running'),
  createListData(<MenuBookIcon />, 'Picked up new hobbies', 'Reading, juggling, origami, cooking'),
  createListData(<WorkIcon />, 'Worked as a Software Intern', 'TNS'),
  createListData(<CodeIcon />, 'Learned new skills', 'React, react-router, Typescript, Spring Boot'),
];

const interestsData = [
  createListData(
    <SportsFootballIcon />,
    'Sports',
    "Sports is one of my favorite pastimes. In my collegiate career I've played in intramural soccer, basketball, bowling, and innertube water polo. Fifa, Madden, and NBA 2k are among my favorite video games. I am a proud Cornell Big Red hockey season-ticket holder and the reigningchampion of my fantasy-football league",
  ),
  createListData(
    <FlightIcon />,
    'Travel',
    "I have a life goal of visiting all 50 states. These are the 36 I've been to thus far:",
  ),
];

const pageData = [
  createSectionData('General info:', generalData),
  createSectionData("How I've spent my time during COVID-19:", covidData),
  createSectionData('Personal interests:', interestsData),
];

export default function About(): JSX.Element {
  const classes = useStyles();

  function generateLists(props: Array<sectionData>): JSX.Element {
    return (
      <>
        {props.map((d, index) => (
          <>
            <Typography component="h2" variant="h5">
              <b>{d.title}</b>
            </Typography>
            <List className={index === 1 ? classes.flexlist : classes.list}>
              {d.listData.map((x, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>{x.icon}</Avatar>
                  </ListItemAvatar>
                  {x.secondaryText !== null ? (
                    <ListItemText primary={x.primaryText} secondary={x.secondaryText} />
                  ) : (
                    <ListItemText primary={x.primaryText} />
                  )}
                </ListItem>
              ))}
            </List>
            <br />
          </>
        ))}
      </>
    );
  }

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
    return () => {
      node.parentNode!.removeChild(node);
    };
  }, []);

  return (
    <Grid container direction="column" justify="center" spacing={3} style={{ textAlign: 'left' }}>
      <Grid item style={{ textAlign: 'center' }}>
        <Typography component="h1" variant="h2" id="about">
          About me
        </Typography>
        <Divider />
      </Grid>
      <Grid item>
        {generateLists(pageData)}
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1afa7ETgmwTXkEy2MudSD8XSgQgrNVY6-"
          width="100%"
          height="600px"
          title="states"
        ></iframe>
      </Grid>
    </Grid>
  );
}
