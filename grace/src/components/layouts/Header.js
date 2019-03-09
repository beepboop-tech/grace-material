import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class Header extends Component {
  render() {
    return (
      <Fragment>
          <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                The Garrison
                </Typography>
            </Toolbar>
          </AppBar>
      </Fragment>
    );
  }
}

export default Header;