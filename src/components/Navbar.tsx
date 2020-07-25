import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Tooltip, Grid, Theme, Divider, Box, Hidden } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ComputerIcon from '@material-ui/icons/Computer';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      flexGrow: 1,
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      textAlign: 'center',
      marginRight: theme.spacing(3),
      color: '#fafafa',
    },
    contactme: {
      marginLeft: theme.spacing(3),
    },
    indicator: {
      background: '#fafafa',
    },
    tabText: {
      color: '#fafafa',
      fontFamily: 'Raleway',
    },
    samButton: {
      '&:hover': {
        backgroundColor: '#7b0000',
      },
      textTransform: 'none',
      textDecoration: 'none',
      alignSelf: 'stretch',
    },
    samBox: {
      display: 'flex',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tab: {
      '&:hover': {
        backgroundColor: '#7b0000',
      },
    },
  }),
);

export default function Navbar(): JSX.Element {
  const classes = useStyles();
  // const location = useLocation().pathname;

  const location = useLocation().pathname;

  function getValue(pathname: string): number | boolean {
    // console.log(pathname);
    if (pathname === '/') {
      return false;
    } else if (pathname === '/About') {
      return 1;
    } else if (pathname === '/Projects') {
      return 3;
    } else if (pathname === '/Skills') {
      return 5;
    } else if (pathname === '/Resume') {
      return 7;
    } else {
      return 0;
    }
  }
  // console.log(location);
  // console.log(getValue(location));

  return (
    <>
      <Hidden mdDown>
        <AppBar className={classes.appBar} position="fixed" color="primary">
          <Toolbar>
            <Grid container justify="center" alignItems="center">
              <Grid item md={3} sm={12} component={Link} to="/" className={classes.samButton}>
                <Box className={classes.samBox}>
                  <Typography className={classes.menuButton} component="h1" variant="h4" color="primary">
                    {/* <b style={{ fontFamily: 'Raleway' }}> */}
                    Sam Rosenthal
                    {/* </b> */}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={7} sm={12}>
                <Tabs
                  value={getValue(location)}
                  aria-label="tabs example"
                  variant="scrollable"
                  classes={{
                    indicator: classes.indicator,
                  }}
                  className={classes.tabText}
                >
                  <Divider orientation="vertical" flexItem />
                  <Tab icon={<PersonIcon />} label="About" component={Link} to="/About" className={classes.tab} />
                  <Divider orientation="vertical" flexItem />
                  <Tab
                    icon={<WorkOutlineOutlinedIcon />}
                    label="Projects"
                    component={Link}
                    to="/Projects"
                    className={classes.tab}
                  />
                  <Divider orientation="vertical" flexItem />
                  <Tab icon={<ComputerIcon />} label="Skills" component={Link} to="/Skills" className={classes.tab} />
                  <Divider orientation="vertical" flexItem />
                  <Tab
                    icon={<DescriptionOutlinedIcon />}
                    label="Resume"
                    component={Link}
                    to="/Resume"
                    className={classes.tab}
                  />
                  <Divider orientation="vertical" flexItem />
                </Tabs>
              </Grid>
              <Grid item md={2} sm={12}>
                <Box display="flex" justifyContent="flex-end" className={classes.contactme}>
                  <Tooltip title="Email me">
                    <Button
                      aria-label="email"
                      href="mailto:ser259@cornell.edu"
                      target="_blank"
                      style={{ minWidth: '24px', color: '#fafafa' }}
                    >
                      <EmailIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="LinkedIn">
                    <Button
                      aria-label="linkedIn"
                      href="https://www.linkedin.com/in/sam-rosenthal-1ab870155/"
                      target="_blank"
                      style={{ minWidth: '24px', color: '#fafafa' }}
                    >
                      <LinkedInIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Github">
                    <Button
                      aria-label="github"
                      href="https://github.com/sam-rosenthal"
                      target="_blank"
                      style={{ minWidth: '24px', color: '#fafafa' }}
                    >
                      <GitHubIcon />
                    </Button>
                  </Tooltip>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Hidden>

      <Hidden lgUp smDown>
        <AppBar className={classes.appBar} color="primary" position="fixed">
          <Toolbar>
            <Typography
              variant="h3"
              component={Link}
              to="/"
              className={classes.samButton}
              style={{ color: '#fafafa', fontFamily: 'Raleway' }}
            >
              <b>Sam Rosenthal</b>
            </Typography>
          </Toolbar>
        </AppBar>
      </Hidden>
    </>
  );
}
