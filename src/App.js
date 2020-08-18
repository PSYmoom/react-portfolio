import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import update from 'immutability-helper';

import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import NoMatch from './NoMatch';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Jumbo from './components/Jumbo';
import ScrollUp from './components/ScrollUp';

class App extends Component {
  state = {
    upperbound: "#FFFFFF",
    lowerbound: "#000000",
    colorChanger:{
      "Navigation Bar": {
        "Background Color": {
          validated: "#222",
          unvalidated: "",
          error: false
        },
        "Text Color": {
          validated:  "#bbb",
          unvalidated: "",
          error: false
        },
        "Hover Color": {
          validated:  "white",
          unvalidated: "",
          error: false
        }
      },
      "Container": {
        "Background Color": {
          validated: "rgb(33,150,243)",
          unvalidated: "",
          error: false
        },
        "Border Color": {
          validated:  "#1976d2",
          unvalidated: "",
          error: false
        }
      },
      "Button": {
        "Primary": {
          validated: "#222",
          unvalidated: "",
          error: false
        },
        "Border": {
          validated:  "#bbb",
          unvalidated: "",
          error: false
        }
      }
    }
  };

  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleValueChange(variables, value) {
    let newState = update(this.state, {
      colorChanger : {
        [variables[0]] : {
          [variables[1]] : {
            unvalidated: {$set: value},
            error: {$set: false}
          }
        }
      }
    });

    this.setState(newState);
  }

  handleButtonClick(variables) {
    let unvalidated = String(this.state.colorChanger.[variables[0]].[variables[1]].unvalidated);

    if (unvalidated.length === 7 && unvalidated >= this.state.lowerbound && unvalidated <= this.state.upperbound) {
      let newState = update(this.state, {
        colorChanger : {
          [variables[0]] : {
            [variables[1]] : {
              validated: {$set: unvalidated}
            }
          }
        }
      });

      this.setState(newState);
    } else {
      let newState = update(this.state, {
        colorChanger : {
          [variables[0]] : {
            [variables[1]] : {
              error: {$set: true}
            }
          }
        }
      });

      this.setState(newState);
    }
  }

  render() {
    return (
      <Router basename="/react-portfolio">
        <NavigationBar navbar={this.state.colorChanger.["Navigation Bar"]}/>
        <Jumbo />
        <Layout>
          <Switch>
            <Route
              exact path="/"
              render={(props) => (<Home {...props}
                onValueChange={this.handleValueChange}
                onButtonClick={this.handleButtonClick}
                allComponents={this.state.colorChanger}
                />
              )}
            />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
        <ScrollUp button={this.state.button} />
      </Router>
    );
  }
}

export default App;
