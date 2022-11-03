const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Vika" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Maxim" },
    { id: 4, name: "Andrey" },
    { id: 5, name: "Ira" },
  ],
  messages: [
    { id: 1, message: "Meow" },
    { id: 2, message: "Yo" },
    { id: 3, message: "LOL" },
    { id: 4, message: "How are you?" },
    { id: 5, message: "Where is keys?" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let body = action.newMessageText;
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 6,
            message: body,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageText) => ({
  type: ADD_MESSAGE,
  newMessageText,
});

export default dialogsReducer;
