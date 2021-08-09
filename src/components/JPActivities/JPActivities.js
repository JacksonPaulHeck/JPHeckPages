import React from 'react';
import PropTypes from 'prop-types';
import './JPActivities.css';
import { Typography, List, ListItem, Paper } from '@material-ui/core';

function JPActivities(){
  return (
    <Paper>
    <Typography variant='h2'>EXTRACURRICULAR ACTIVITIES</Typography>
    <Typography variant='h3'>SOUTHERN METHODIST UNIVERSITY, Dallas, TX</Typography>
    <List>
      <ListItem>
        <Typography variant='h5'>SMU Ultimate Frisbee Team</Typography>
      </ListItem>
      <ListItem>
        <Typography variant='h5'>SMU Computer Science Club</Typography>
      </ListItem>
      <ListItem>
        <Typography variant='h5'>Kappa Sigma Fraternity – Delta Pi Chapter</Typography>
      </ListItem>
    </List>
    <Typography variant='h3'>NATIONWIDE</Typography>
    <List>
      <ListItem>
        <Typography variant='h5'>World Cube Association - Competitor, Judge</Typography>
      </ListItem>
    </List>
    </Paper>
  );
}

JPActivities.propTypes = {};

JPActivities.defaultProps = {};

export default JPActivities;
