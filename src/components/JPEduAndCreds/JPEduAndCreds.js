import React from 'react';
import './JPEduAndCreds.css';
import { Typography, List, ListItem } from '@material-ui/core';

function JPEduAndCreds(){
    return (
    <div>
    <Typography variant='h2' className="Section-title">EDUCATION & CREDENTIALS</Typography>
    <Typography variant='h3'>SOUTHERN METHODIST UNIVERSITY, Dallas, TX</Typography>
    <List>
      <ListItem>
        <Typography variant="h5">Double Major in Computer Science and Mathematics, Minor in Spanish, (Spring 2023)</Typography>
      </ListItem>
    </List>
    <List>
      <Typography variant="h4">Programming Experience</Typography>
      <ListItem>
        <Typography variant="h5">Java, JavaScript, C++, Python, TypesScript, React, AngularJS, Java Spring, SQL</Typography>
      </ListItem>
    </List>
    <List>
      <Typography variant="h4">Certifications</Typography>
      <ListItem>
        <Typography variant="h5">Arkansas Seal of Biliteracy</Typography>
      </ListItem>
    </List>
    </div>
  );
};

JPEduAndCreds.propTypes = {};

JPEduAndCreds.defaultProps = {};

export default JPEduAndCreds;
