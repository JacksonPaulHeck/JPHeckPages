import React from 'react';
import PropTypes from 'prop-types';
import './JPCommAndLead.css';
import { Typography, List, ListItem } from '@material-ui/core';

function JPCommAndLead(){
return (
  <div>
  <Typography variant='h2' className="Section-title">COMMUNITY SERVICE & LEADERSHIP</Typography>
  <Typography variant='h3'>LEADERSHIP ROLES</Typography>
  <List>
  <Typography variant='h4'>Kappa Sigma Fraternity Officer - Grand Scribe (Elected 2020)</Typography>
    <ListItem>
      <Typography variant='h5'>This position is on the executive committee for the Delta-Pi chapter of Kappa Sigma. Youngest ranking member of the executive committee. Oversee chair positions of the fraternity. Another important role for this position is being timely, taking notes, and being exceptionally organized.</Typography>
    </ListItem>
  </List>
  <Typography variant='h3'>COMMUNITY SERVICE</Typography>
  <List>
    <ListItem>
      <Typography variant='h5'>Kappa Sigma Fraternity “Woofs for Warriors” program (8 volunteer hours) 2020, 2021</Typography>
    </ListItem>
    <ListItem>
      <Typography variant='h5'>Kappa Sigma Fraternity “Kampaign CurE” (8 volunteer hours) 2020</Typography>
    </ListItem>
    <ListItem>
      <Typography variant='h5'>Fraternity Bible Study Co-Leader (10 volunteer hours) 2021</Typography>
    </ListItem>
  </List>
  </div>
);
};

JPCommAndLead.propTypes = {};

JPCommAndLead.defaultProps = {};

export default JPCommAndLead;

