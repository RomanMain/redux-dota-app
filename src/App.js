import React from 'react';
import Heroes from './components/Heroes'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeroesDetail from './components/HeroesDetail'

function App() {
  return (
    <div className="min-vh-100 bg-dark">
      <header className="jumbotron jumbotron-fluid">
        <h2 className="container">Drink vodka, play dotka</h2>
      </header>
      <Router>
          <Switch>
            <Route exact path="/" component={Heroes} />
            <Route path="/:id" component={HeroesDetail} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
