let rerenderEntireTree = () => {

};

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: `It's my first post`, likesCount: 4}
        ],

        newPostText: 'IT-Kamasutra'
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

export const addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 1
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;