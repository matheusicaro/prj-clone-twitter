import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'

import { formatTweet } from '../utils/functions'
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

export class Tweet extends Component {

    render() {

        const { tweet } = this.props

        if (tweet === null)
            return <p>This Tweet doesn't existd</p>

        const {
            name, avatar, timestamp, text, hasLiked, likes, replies, parent
        } = tweet

        return (
            <div className='tweet'>
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />

            </div>
        )
    }
}

// Segundo parametro da função mapStateToProps é a props que está vindo
// do componente pai (dashboard)
function mapStateToProps({ authedUser, users, tweets }, { id }) {

    if (Object.keys(users).length === 0)
        return {
            authedUser,
            tweet: null
        }

    const tweet = tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null
  
    return {
        authedUser,
        tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
    }
}
export default connect(mapStateToProps)(Tweet) 