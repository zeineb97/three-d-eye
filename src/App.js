import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import GlassesDetails from './components/Glasses/GlassesDetails'
import Diagnostic from './components/dashboard/Diagnostic'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/glasses/:id' component={GlassesDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/diagnostic' component={Diagnostic} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
