import {
    _getUsers,
    _getTweets,
    _saveLikeToggle,
    _saveTweet,
  } from './data'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getTweets(),
    ]).then(([users, tweets]) => ({
      users,
      tweets,
    }))
  }
  
  export function saveLikeChange(info) {
    return _saveLikeToggle(info)
  }
  
  export function saveTweet (info) {
    return _saveTweet(info)
  }