import { getInitialData } from '../app/api/api'
import { receiveTweets } from './tweets'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'matheusicaro'

export function initialData() {
    return (dispatch) => {

        dispatch(showLoading())

        return getInitialData().then(({ users, tweets }) => {
            dispatch(receiveTweets(tweets));
            dispatch(receiveUsers(users));
            dispatch(setAuthedUser(AUTHED_ID));

            // end initial dates stoped loading
            dispatch(hideLoading());
        })
    }
}
