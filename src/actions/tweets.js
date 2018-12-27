import { saveLikeChange, saveTweet } from '../app/api/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const CHANGE_TWEETS = 'CHANGE_TWEETS'
export const NEW_TWEET = 'NEW_TWEET'

export function receiveTweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

function changeTweet ({id, authedUser, hasLiked}) {
    return {
        type: CHANGE_TWEETS,
        id,
        authedUser,
        hasLiked
    }
}

function newTweet (tweet) {
    return {
        type: NEW_TWEET,
        tweet,
    }
}

export function handleNewTweet (text, replyingTo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())
            
        return saveTweet({
            text,
            author: authedUser,
            replyingTo
        })

        .then((tweet) => dispatch(newTweet(tweet)))
        .then(() => dispatch(hideLoading()))
    }
    
}

export function handleChangeTweets (info) {
    return (dispatch) => {
        dispatch(changeTweet(info));

        return saveLikeChange(info)
            .catch((error) => {
                console.warn('Error in *handleChangeTweet*: ', error)
                dispatch(changeTweet(info))
                alert('The was an error liking the tweet. Try again.')
            })
    }
}