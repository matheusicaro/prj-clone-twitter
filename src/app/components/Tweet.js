import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'

import { formatTweet, formatDate } from '../utils/functions'
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

export class Tweet extends Component {

    toParent = (event, id) => {
        event.preventDefault();
        // TODO: redirecionar para tweet do id especificado.
    }

    handleLike = (event) => {
        event.preventDefault();
        // TODO: salvar estado na store quando clicar em curtir
    }

    render() {
        const { tweet } = this.props

        if (tweet === null)
            return <p>This Tweet doesn't existd</p>

        const {
            name, avatar, timestamp, text, hasLiked, likes, replies, parent
        } = tweet

        return (
            <div className='tweet'>

                <img src={avatar} alt={`Avatar of ${name}`} className='avatar' />

                <div>
                    <div className='tweet-info'>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        {parent && (
                            <button className='replying-to' onClick={(event) => this.toParent(event, parent.id)}>
                                Repling to @ {parent.author}
                            </button>
                        )}
                        <p>{text}</p>
                    </div>

                    <div className='tweet-icons'>
                        <TiArrowBackOutline className='tweet-icon' />
                        <span>{replies !== 0 && replies}</span>
                        <button className='heart-button' onClick={this.handleLike}>
                            { hasLiked === true 
                                ? <TiHeartFullOutline color='#e0245e' className='tweet-icon'/>
                                : <TiHeartOutline className='tweet-icon'/>
                            }
                        </button>
                        <span>{likes !== 0 && likes}</span>
                    </div>
                </div>
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