import React, { Component, Fragment } from 'react';
import List from '@material-ui/core/List';
import Drink from './Drink'
import { apiUrl } from './API.js'


class DrinksList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    }
  }

  componentDidMount() {
    fetch(apiUrl('/api/drinks/'))
      .then(resp => resp.json())
      .then(json => this.setState({drinks: json.drinks || []}))
      .catch(err => console.log(err));
  }

  render() {

    let drinkElements = this.state.drinks.map((d) => <Drink data={d} key={d.ref}/> );

    return (
      <Fragment>
        <List component="nav">
          {drinkElements}
        </List>
      </Fragment>
    );
  }
}

export default DrinksList
