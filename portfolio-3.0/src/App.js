import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
// import Projects from './components/Projects';
 import About from './components/About';
// import Resume from './components/Resume';
// import Contact from './components/Contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloProvider
} from '@apollo/client';

function App() {
  return (
    <ApolloProvider>
      <Router>
        <div>
          <Nav />
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
