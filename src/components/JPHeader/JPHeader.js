import React from 'react';
import JPDrawer from '../JPDrawer/JPDrawer';
import { Typography, AppBar, Container, Toolbar } from '@material-ui/core';
import './JPHeader.css';


import clsx from 'clsx';
import CssBaseline from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function JPHeader(props){

return(
  <div className={clsx(props.classes.content, {
    [props.classes.contentShift]: props.open,
  })}>
    <CssBaseline />
    <AppBar
      position="fixed"
      className={clsx(props.classes.appBar, {
        [props.classes.appBarShift]: props.open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          className={clsx(props.classes.menuButton, props.open && props.classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {props.pageTitle}
        </Typography>
      </Toolbar>
    </AppBar>
    <JPDrawer
      open={props.open}
      theme={props.theme}
      classes={props.classes}
      handleDrawerClose={props.handleDrawerClose}
      />
  </div>
);
}

JPHeader.propTypes = {};

JPHeader.defaultProps = {};

export default JPHeader;
