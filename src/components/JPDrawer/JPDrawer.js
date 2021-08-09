import React from 'react';
import { Drawer } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import './JPDrawer.css';

function JPDrawer(props){
  return (

    <Drawer
      className={props.classes.drawer}
      variant="temporary"
      anchor="left"
      open={props.open}
      classes={{
        paper: props.classes.drawerPaper,
      }}
    >
      <div className={props.classes.drawerHeader}>
        <IconButton onClick={props.handleDrawerClose}>
          {props.theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
    </Drawer>

  );
}

JPDrawer.propTypes = {};

JPDrawer.defaultProps = {};

export default JPDrawer;
