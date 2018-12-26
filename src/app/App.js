import React, { Component } from 'react'
import { Route, Switch } from 'react-router'

import { connect } from 'react-redux'
import { initialData } from '../actions'

import Home from './pages/home/Home'
import LoadingBar from 'react-redux-loading'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(initialData());
  }

  render() {
    return (
      <div>
        <LoadingBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          
          {/* 
          TODO...: Quando não achar nenhuma rota acima *
            <Route component={NotFoundScreen} /> 
          */}
        </Switch>
      </div>
    )
  }
}

export default connect()(App)