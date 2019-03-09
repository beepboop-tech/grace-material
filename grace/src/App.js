import React, { Component, Fragment } from 'react';
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import { BrowserRouter as Router, Route } from "react-router-dom";
import DrinksList from './components/DrinkList'
import CreateDrink from './components/CreateDrink'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Router>
            <Fragment>
              <Route path="/" exact component={DrinksList} />
              <Route path="/create/" component={CreateDrink} />
              <Footer />
            </Fragment>
          </Router>
      </div>
    );
  }
}

export default App;
