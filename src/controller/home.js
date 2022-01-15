export const getUsers = (req, res, next) => {
    const { token } = req.body
    let data = req.readData('users', 'user.json')
    let lastMessages = req.readData('messages', 'message.json')
    data = data ? JSON.parse(data) : []
    lastMessages = lastMessages ? JSON.parse(lastMessages) : []

    let thisUser = ""

    if (data.length) {
        data = data.map((user) => {
            delete user.password
            if (user.token == token) thisUser == user
        })
    }

    if (lastMessages.length) {
        data = data.map((user) => {
            let messages = lastMessages.filter((m) => {
                if (m.messages[m.messages - 1].friendId == thisUser.userId) {
                    user['lastMessage'] = m.messages[m.messages - 1].messages[m.messages[m.messages - 1].messages.length - 1]
                }
            })
        })
    }
    console.log(data);
    res.send(data)
}