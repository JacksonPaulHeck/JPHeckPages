import React from 'react';
import PropTypes from 'prop-types';
import './JPHonorsAndAwards.css';
import { Typography, List, ListItem } from '@material-ui/core';

function JPHonorsAndAwards(){
  return (
    <div>
    <Typography variant='h3'>HONORS & AWARDS</Typography>
    <List>
      <ListItem>
        <Typography variant="h5">SMU Discovery Scholar 2019 - Present</Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5">SMU Provost Scholar 2019 - Present</Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5">National Merit Finalist Scholar 2019</Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5">Fayetteville HS (Fayetteville, AR) Graduate with Distinguished Honors 2019 </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5">AP Scholar with Distinction 2018-2019</Typography>
      </ListItem>
    </List>
    </div>
  );
}
JPHonorsAndAwards.propTypes = {};

JPHonorsAndAwards.defaultProps = {};

export default JPHonorsAndAwards;
