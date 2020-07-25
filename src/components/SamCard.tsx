import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Box,
  Avatar,
  Drawer,
  Toolbar,
  Hidden,
  AppBar,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Link,
  Tooltip,
} from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ComputerIcon from '@material-ui/icons/Computer';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from './Navbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    sam: {
      textAlign: 'center',
      fontFamily: 'lato',
      // marginTop: theme.spacing(5),
    },
    box: {
      // marginRight: theme.spacing(3),
      marginTop: theme.spacing(1.5),
      textAlign: 'center',
      fontFamily: 'raleway',
    },
    drawerLg: {
      width: 'calc(25% + 12px)',
      flexShrink: 0,
      minWidth: '250px',
      borderRight: 'none',
    },
    drawerPaperLg: {
      width: 'calc(25% + 12px)',
      minWidth: '250px',
      background: theme.palette.background.default,
      borderRight: 'none',
    },
    drawer: {
      width: 'calc(25% + 24px)',
      flexShrink: 0,
      minWidth: '250px',
    },
    drawerPaper: {
      width: 'calc(25% + 24px)',
      minWidth: '250px',
      background: theme.palette.background.default,
    },
    appBar: {
      flexGrow: 1,
      zIndex: 1301,
    },
    whitesmoke: {
      color: 'whitesmoke',
    },
    empty: {},
    samButton: {
      '&:hover': {
        backgroundColor: '#7b0000',
      },
      textTransform: 'none',
      textDecoration: 'none',
      alignSelf: 'stretch',
    },
  }),
);

export default function SamCard(): JSX.Element {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(-1);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function DrawerContent(): JSX.Element {
    return (
      <>
        <Toolbar />
        <Divider />
        <br />
        <Box className={classes.box}>
          <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt="Sam Rosenthal"
              src="https://media-exp1.licdn.com/dms/image/C5603AQGPOB4oIPPhQg/profile-displayphoto-shrink_200_200/0?e=1600300800&v=beta&t=XCP-y3rjz9_20hyRJ1ReHdEcoy8Tapa9cHKmGJKutvA"
              className={classes.icon}
            />
          </div>
          <Typography component="h3" variant="h5">
            <b>Software Engineer</b>
          </Typography>

          <Typography component="h4" variant="h6">
            Cornell University '21
          </Typography>
          <Typography component="h4" variant="subtitle1">
            <Link href="mailto:ser259@cornell.edu" target="_blank">
              ser259@cornell.edu
            </Link>{' '}
          </Typography>
        </Box>
        <br />
      </>
    );
  }

  function Nav(): JSX.Element {
    return (
      <>
        <Divider />
        <List style={{ paddingTop: '0px' }}>
          {[
            [<PersonIcon key="0" />, 'About'],
            [<WorkOutlineOutlinedIcon key="1" />, 'Projects'],
            [<ComputerIcon key="2" />, 'Skills'],
            [<DescriptionOutlinedIcon key="3" />, 'Resume'],
          ].map(([icon, text], index) => (
            <ListItem
              button
              key={index}
              component={RouterLink}
              to={'/' + text}
              onClick={() => {
                handleDrawerClose();
                setCurrentPage(index);
              }}
              style={{ background: currentPage === index ? '#b21919' : 'inherit' }}
            >
              <ListItemIcon className={currentPage === index ? classes.whitesmoke : classes.empty}>{icon}</ListItemIcon>
              <ListItemText className={currentPage === index ? classes.whitesmoke : classes.empty} primary={text} />
            </ListItem>
          ))}
          <Divider />
        </List>

        <Box style={{ textAlign: 'center' }}>
          <Tooltip title="Email me">
            <Button
              aria-label="email"
              href="mailto:ser259@cornell.edu"
              target="_blank"
              onClick={handleDrawerClose}
              color="primary"
            >
              <EmailIcon />
            </Button>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <Button
              aria-label="linkedIn"
              href="https://www.linkedin.com/in/sam-rosenthal-1ab870155/"
              target="_blank"
              onClick={handleDrawerClose}
              color="primary"
            >
              <LinkedInIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Github">
            <Button
              aria-label="github"
              href="https://github.com/sam-rosenthal"
              target="_blank"
              onClick={handleDrawerClose}
              color="primary"
            >
              <GitHubIcon />
            </Button>
          </Tooltip>
        </Box>
      </>
    );
  }

  return (
    <>
      <Hidden mdDown>
        <Navbar />
        <Drawer
          className={classes.drawerLg}
          variant="permanent"
          classes={{
            paper: classes.drawerPaperLg,
          }}
          anchor="left"
          ModalProps={{
            keepMounted: true,
          }}
          color="default"
        >
          <DrawerContent />
        </Drawer>
      </Hidden>
      <Hidden lgUp smDown>
        <AppBar className={classes.appBar} color="primary" position="fixed">
          <Toolbar>
            <Typography
              variant="h3"
              component={RouterLink}
              to="/"
              onClick={() => setCurrentPage(-1)}
              className={classes.samButton}
              style={{ color: '#fafafa', fontFamily: 'Raleway', alignSelf: 'center' }}
            >
              <b>Sam Rosenthal</b>
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          anchor="left"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
          open={open}
          onClose={handleDrawerClose}
          color="default"
        >
          <DrawerContent />
          <Nav />
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <AppBar className={classes.appBar} color="primary" position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setOpen(!open);
              }}
              edge="start"
              style={{ color: '#fafafa' }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h3"
              component={RouterLink}
              to="/"
              style={{ color: '#fafafa' }}
              onClick={() => {
                handleDrawerClose();
                setCurrentPage(-1);
              }}
            >
              Sam Rosenthal
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
          open={open}
          onClose={handleDrawerClose}
          color="default"
        >
          <Divider />
          <DrawerContent />
          <Nav />
        </Drawer>
      </Hidden>
    </>
  );
}
