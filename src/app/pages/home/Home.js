import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.css'

import { Dashboard } from '../../components'

export class Home extends Component {

    render() {
        const { loading, tweetIds } = this.props;
        
        return (
            <div>
                {(loading === true) ? null : (
                    <div>
                        <h3 className='center'>Your Timeline</h3>
                        <Dashboard tweetIds={tweetIds} />
                    </div>
                )}
            </div>
        )
    }
}

function mapStateToProps({ tweets, authedUser }) {
    return {
        loading: authedUser === true,
        tweetIds: Object.keys(tweets)
            .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home)