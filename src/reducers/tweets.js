import { RECEIVE_TWEETS, CHANGE_TWEETS, NEW_TWEET } from '../actions/tweets'

export default function tweets(state = {}, action) {

    switch (action.type) {

        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            }

        case CHANGE_TWEETS:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true
                    ? state[action.id].likes.filter((uid) => {return uid !== action.authedUser})
                    : state[action.id].likes.concat([action.authedUser])
                }
            }

        case NEW_TWEET:
            
            const { tweet } = action
            
            let replyingTo = {}
            if (tweet.replyingTo !== null) {
                replyingTo = {
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyTo].replies.concat([tweet.id])
                    }
                }
            }

            return {
                ...state,
                [action.tweet.id]: action.tweet,
                ...replyingTo
            }

        default:
            return state
    }
}
