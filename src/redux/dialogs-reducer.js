const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state
    case SEND_MESSAGE:
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.messages.push({id: 6, message: body})
      return state
    default:
      return state
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body: body
})


export default dialogsReducer