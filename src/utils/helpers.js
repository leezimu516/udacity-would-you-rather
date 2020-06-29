export function formatDate(timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatPool(question, authors) {
    const {id, author, timestamp, optionOne, optionTwo} = question;
    const {name, avatarURL} = authors[author];

    return {
        name,
        id,
        timestamp,
        avatar: avatarURL,
        optionOne,
        optionOneVotes: optionOne.votes.length,
        optionOneText: optionOne.text,
        optionTwo,
        optionTwoVotes: optionTwo.votes.length,
        optionTwoText: optionTwo.text,
        totalVotes: optionOne.votes.length +  optionTwo.votes.length,

        // likes: likes.length,
        // replies: replies.length,
        // hasLiked: likes.includes(authedUser),
        // parent: !parentTweet ? null : {
        //     author: parentTweet.author,
        //     id: parentTweet.id,
        // }
    }
}