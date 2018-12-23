import { getInitialData } from '../api/api'
import { receiveTweets } from './tweets'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'matheusicaro'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData().then(({ users, tweets }) => {
            dispatch( receiveTweets(tweets));
            dispatch( receiveUsers(users));
            dispatch( setAuthedUser(AUTHED_ID));
        })
    }
}