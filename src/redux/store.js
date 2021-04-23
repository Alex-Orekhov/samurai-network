const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 1
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default store;
window.store = store;