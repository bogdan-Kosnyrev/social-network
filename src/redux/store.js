import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It`s my first post', likesCount: 11},
        {id: 3, message: 'Blalala', likesCount: 13},
        {id: 4, message: 'Yes yes yes', likesCount: 14}
      ],
      newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Bogdan'},
        {id: 2, name: 'Stanislav'},
        {id: 3, name: 'Eduard'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Dima'},
        {id: 6, name: 'Viktor'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'}
      ],
      newMessageBody: ''
    },
    sidebar: {},
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('State changed')
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)
  }
}

export default store
