import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import NoMatch from './NoMatch';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Jumbo from './components/Jumbo';

function App() {
  return (
    <Router basename="/react-portfolio">
      <NavigationBar />
      <Jumbo />
      <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route component={NoMatch} />
          </Switch>
      </Layout>
    </Router>
  );
}

export default App;
