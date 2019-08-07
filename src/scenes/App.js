import React, { Component} from 'react';
import {hot} from 'react-hot-loader';
import { Route } from 'react-router-dom';
import Home from './Home';
import Developers from './Developers/Developers';
import Team from './Team';
import WebMiner from "./WebMiner";
import Presale from './Presale/Presale';
import Privacy from './Privacy';
import Terms from './Terms';
import Career from './Career/Career';
import '../styles/App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/developers" component={Developers} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/miner" component={WebMiner} />
        {
        // <Route exact path="/presale" component={Presale} />
        }
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/career" component={Career} />
      </div>
    );
  }
}

export default hot(module)(App);
