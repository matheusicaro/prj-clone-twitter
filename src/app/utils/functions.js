export function formatDate(timestamp) {
    const date = new Date(timestamp)
    const time = date.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + date.toLocaleDateString()
}

export function formatTweet(tweet, author, authedUser, parentTweet) {
    const { id, likes, replies, text, timestamp } = tweet
    const { name, avatarURL } = author

    return {
        name,
        id,
        timestamp,
        text,
        avatar: avatarURL,
        likes: likes.length,
        replies: replies.length,
        hasLiked: likes.includes(authedUser),
        parent: !parentTweet ? null : {
            author: parentTweet.author,
            id: parentTweet.id,
        }
    }
}