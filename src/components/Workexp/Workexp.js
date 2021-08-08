import React from 'react';
import PropTypes from 'prop-types';
import { Typography, List, ListItem } from '@material-ui/core';
import './Workexp.css';

function Workexp({companyTitle, companyLocation, jobTitle, jobDates, jobDescription, workedOn, workedOnDescription}){
  return(
    <div>
    <Typography variant="h3">{companyTitle}, {companyLocation}</Typography>
    <List>
    <Typography variant="h4">{jobTitle} {jobDates}</Typography>
      <ListItem>
        <Typography variant="h5">{jobDescription}</Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5">{workedOn} <br/> {workedOnDescription}</Typography>
      </ListItem>
    </List>
    </div>
  );
};

Workexp.propTypes = {
  companyTitle: PropTypes.string,
  companyLocation: PropTypes.string,
  jobTitle: PropTypes.string,
  jobDates: PropTypes.string,
  jobDescription: PropTypes.string,
  workedOn: PropTypes.string,
  workedOnDescription: PropTypes.string
};

Workexp.defaultProps = {};

export default Workexp;
