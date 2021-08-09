import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import './JPFooter.css';
import { Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  jpfooter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100px',
    backgroundColor: '#282c34',
    width: '100%',
    flexShrink: 0,
    padding: 20,
    borderRadius: '12px',
    position: 'fixed',
    bottom: 0,
  },
  jpfooter_content: {
    color: '#ffffff',
  },
}));

function JPFooter(props){
const classes = useStyles();
 return(
   <footer class={classes.jpfooter}>
      <ThemeProvider theme={props.theme}>
        <Typography variant="h2" class={classes.jpfooter_content}>Jackson Paul Heck Resume</Typography>
      </ThemeProvider>
    </footer>
 );
};

JPFooter.propTypes = {};

JPFooter.defaultProps = {};

export default JPFooter;
