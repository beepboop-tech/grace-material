import React, { Component, Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import LocalDrink from '@material-ui/icons/LocalDrink';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ClickNHold from "./helpers/ClickNHold";
import { postJSON } from './API.js'


const DrinkComponent = (props) => {
  return (
      <ListItem button className={'true'}>
        <ListItemText
            inset
            primary={props.component.ingredient.name}
            secondary={
              <React.Fragment>
                {`${props.component.measure} shots`}
              </React.Fragment>
            }
        />
      </ListItem>
  );
};

class Drink extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      open: false,
    }
  }

  handleClick = (e, enough) => {
    if (!enough) {
      this.setState(state => ({open: !state.open}));
    }
  };

	clickNHold(e){
		if (window.confirm("Is there a glass on the trolley?")) {
		  console.log(`Making a ${this.state.data.name}`)
      postJSON('/api/orders/', { ref: this.state.data.ref })
      .then(resp => resp.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));

    }
	}

  render() {

    let components = this.state.data.components.map((c) => <DrinkComponent component={c} key={c.ingredient.ref}/> );

    return (
      <Fragment>

        <ClickNHold
        	time={0.6}
          onClickNHold={this.clickNHold.bind(this)}
          onEnd={this.handleClick.bind(this)}
        >
          <Fragment>
            <ListItem button >
              <ListItemIcon  >
                <LocalDrink />
              </ListItemIcon>
              <ListItemText inset primary={this.state.data.name} />
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </Fragment>

        </ClickNHold>

        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {components}
          </List>
        </Collapse>

      </Fragment>
    );
  }
}

export default Drink
