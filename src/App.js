import React from 'react';
import { Switch, Route } from 'react-router-dom';
import JPHeader from './components/JPHeader/JPHeader';
import JPHome from './components/JPHome/JPHome';
import JPWorkExp from './components/JPWorkExp/JPWorkExp';
import JPCommAndLead from './components/JPCommAndLead/JPCommAndLead';
import JPHonorsAndAwards from './components/JPHonorsAndAwards/JPHonorsAndAwards';
import JPActivities from './components/JPActivities/JPActivities';
import JPEduAndCreds from './components/JPEduAndCreds/JPEduAndCreds';
import JPFooter from './components/JPFooter/JPFooter';
import JPProjects from './components/JPProjects/JPProjects';
import { CssBaseline } from '@material-ui/core';
import { makeStyles, useTheme, responsiveFontSizes } from '@material-ui/core/styles';
import './App.css';
import clsx from 'clsx';
import { ViewColumn } from '@material-ui/icons';


const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#282c34',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flex: '1 0 auto',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 30,
    minWidth: 0,
  },
  contentShift: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 30,
    minWidth: 0,
  },
}));

function App() {
  const classes = useStyles();
  var theme = useTheme();
  theme = responsiveFontSizes(theme);
  
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <main className={classes.root}>
      <CssBaseline />
      <JPHeader
        theme = {theme}
        classes = {classes}
        open = {open}
        handleDrawerOpen = {handleDrawerOpen}
        handleDrawerClose = {handleDrawerClose}
        pageTitle = "Jackson Paul Heck Resume"
      />
          <div
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}>
        <Switch>
          <Route
          exact
          path='/JPHeckPages'
          render={(props) => (
            <JPHome {...props} classes={classes}/>
          )}/>
          <Route
          exact
          path='/JPHeckPages/WorkExperience'
          render={(props) => (
            <JPWorkExp {...props}/>
          )}/>
          <Route
          exact
          path='/JPHeckPages/EducationAndCredentials'
          render={(props) => (
            <JPEduAndCreds {...props}/>
          )}/>
          <Route
          exact
          path='/JPHeckPages/CommunityAndLeadership'
          render={(props) => (
            <JPCommAndLead {...props}/>
          )}/>
          <Route
          exact
          path='/JPHeckPages/Activities'
          render={(props) => (
            <JPActivities {...props}/>
          )}/>
          <Route
          exact
          path='/JPHeckPages/HonorsAndAwards'
          render={(props) => (
            <JPHonorsAndAwards {...props}/>
          )}/>
          <Route
          exact
          path='/JPHeckPages/Projects'
          render={(props) => (
            <JPProjects {...props}/>
          )}/>
        </Switch>
        </div>
    </main>
    <JPFooter
    theme = {theme}
    classes = {classes}
    />
    </>
  );
}

export default App;
