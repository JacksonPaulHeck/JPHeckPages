import React from 'react';
import { Typography, Paper, Card, CardActions, CardContent, Button, ButtonBase } from '@material-ui/core';
import portrait from '../../JacksonPaulHeckPhoto.jpeg';
import { ThemeProvider, createTheme, responsiveFontSizes, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  jphome: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    paddingBottom: '45px',
  },
  jphome_column: {
    paddingLeft: '15px',
    paddingRight: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
  },
  jphome_column_middle: {
    paddingLeft: '15px',
    paddingRight: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexShrink: 5,
  },
  jphome_portrait: {
    maxWidth: '100%',
    height: 'auto',
  },
  jphome_title: {
    maxWidth: '100%',
    height: 'auto',
  },
  jphome_info: {
    maxWidth: '100%',
    height: 'auto',
  },
  jphome_card: {
    width: '100%',
    margin: '10px',
    height: 'auto',
    "&:hover": {
      backgroundColor: '#282c34',
      color: '#ffffff',
    }
  },
}));


function JPHome(props){
  const classes = useStyles();
  let history = useHistory();

  function handleActivitesClick (){
    history.push('/JPHeckPages/Activities');
  }
  function handleCommunityClick (){
    history.push('/JPHeckPages/CommunityAndLeadership');
  }
  function handleEducationClick (){
    history.push('/JPHeckPages/EducationAndCredentials');
  }
  function handleWorkExperienceClick (){
    history.push('/JPHeckPages/WorkExperience');
  }
  function handleHonorsAndAwardsClick (){
    history.push('/JPHeckPages/HonorsAndAwards');
  }
  function handleProjectsClick (){
    history.push('/JPHeckPages/Projects');
  }

  return(
    <Paper class={classes.jphome}>
      
      <Paper class={classes.jphome_column, classes.jphome_column_middle}>
        <ThemeProvider theme={props.theme}>
          <Typography class={classes.jphome_title} variant="h1">Jackson Paul Heck</Typography>
          <Typography class={classes.jphome_info} variant="h4">(479) 530-7351 • jacksonheck1@gmail.com</Typography>
          <img class={classes.jphome_portrait} alt="JPHPhoto" src={portrait}/>
        </ThemeProvider>
      </Paper>
      <Paper class={classes.jphome_column}>
      <Card className={classes.jphome_card}>
        <ButtonBase onClick={handleActivitesClick}>
          <CardContent>
            <Typography variant='h2'>Activities</Typography>
          </CardContent>
          </ButtonBase>
        </Card>
        <Card className={classes.jphome_card}>
        <ButtonBase onClick={handleCommunityClick}>
          <CardContent>
            <Typography variant='h2'>Community and Leadership</Typography>
          </CardContent>
          </ButtonBase>
        </Card>
        <Card className={classes.jphome_card}>
        <ButtonBase onClick={handleEducationClick}>
          <CardContent>
            <Typography variant='h2'>Education and Credentials</Typography>
          </CardContent>
          </ButtonBase>
        </Card>
      </Paper>
      <Paper class={classes.jphome_column}>
      <Card className={classes.jphome_card}>
        <ButtonBase onClick={handleWorkExperienceClick}>
          <CardContent>
            <Typography variant='h2'>Work Experience</Typography>
          </CardContent>
          </ButtonBase>
        </Card>
        <Card className={classes.jphome_card}>
        <ButtonBase onClick={handleHonorsAndAwardsClick}>
          <CardContent>
            <Typography variant='h2'>Honors and Awards</Typography>
          </CardContent>
          </ButtonBase>
        </Card>
        <Card className={classes.jphome_card}>
        <ButtonBase onClick={handleProjectsClick}>
          <CardContent>
            <Typography variant='h2'>Projects</Typography>
          </CardContent>
          </ButtonBase>
        </Card>
      </Paper>
    </Paper>
  );
};

JPHome.propTypes = {};

JPHome.defaultProps = {};

export default JPHome;
