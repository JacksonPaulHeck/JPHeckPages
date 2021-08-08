import React from 'react';
import PropTypes from 'prop-types';
import Workexp from '../../components/Workexp/Workexp';
import { Typography, Container, Grid } from '@material-ui/core';
import portrait from '../../JacksonPaulHeckPhoto.jpeg';
import clsx from 'clsx';
import Image from 'material-ui-image';
import './JPHome.css';

function JPHome(props){
  return(
    <div class={props.classes.jphome}>
      <Typography variant="h1">Jackson Paul Heck</Typography>
      <Typography variant="h4">(479) 530-7351 • jacksonheck1@gmail.com</Typography>
      <img alt="JPHPhoto" src={portrait}/>
    </div>
  );
};

JPHome.propTypes = {};

JPHome.defaultProps = {};

export default JPHome;
