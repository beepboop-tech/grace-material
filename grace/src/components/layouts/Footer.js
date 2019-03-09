import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Create from '@material-ui/icons/Create';
import LocalDrink from '@material-ui/icons/LocalDrink';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
};


class Footer extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <BottomNavigation
        value={this.state.value}
        onChange={this.handleChange}
        className={classes.stickToBottom}
        showLabels
      >
        <BottomNavigationAction component={Link} to="/" label="Drinks" icon={<LocalDrink />} />
        <BottomNavigationAction component={Link} to="/create" label="Create" icon={<Create />} />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(Footer)
