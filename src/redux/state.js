let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: `It's my first post`, likesCount: 4}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Greg'},
            {id: 3, name: 'Rick'},
            {id: 4, name: 'Sam'},
            {id: 5, name: 'Andrew'},
            {id: 6, name: 'Stan'},
        ],

        messages: [
            {id: 1, text: 'Hi!'},
            {id: 2, text: 'What\'s up?'},
            {id: 3, text: 'I\'m learning React :)'},
        ]
    }
}

export default state;