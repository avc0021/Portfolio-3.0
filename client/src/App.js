import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloProvider
} from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Header />
          <div>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/about" component={About} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
