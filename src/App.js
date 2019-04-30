import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import GlassesDetails from './components/Glasses/GlassesDetails'
import Diagnostic from './components/dashboard/Diagnostic'
import AddGlass from './components/Glasses/AddGlass'
import MessageButton from './components/chat/MessageButton'
import GlassesUpload from './components/Glasses/GlassesUpload'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <MessageButton />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/glasses/:id' component={GlassesDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/diagnostic' component={Diagnostic} />
            <Route path='/addglasses' component={AddGlass} />
            <Route path='/model' component={GlassesUpload} />
           
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
