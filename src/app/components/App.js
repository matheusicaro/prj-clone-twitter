import React, { Component } from 'react'

import { connect } from 'react-redux'
import { initialData } from '../../actions'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(initialData());
  }

  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App)