import React, { Component } from 'react'
import { Route, Switch } from 'react-router'

import { connect } from 'react-redux'
import { initialData } from '../actions'

import { Home, NewTweet } from './pages'

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
          <Route exact path="/new-tweet" component={NewTweet} />

          
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