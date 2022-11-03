import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi. How are you?", likesCount: 3 },
        { id: 2, message: "Hi", likesCount: 14 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
      newMessageText: "",
    },
  },

  _callSubscriber() {
    console.log("lol");
  },

  // ________________________________________________________________________________________________________

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // ________________________________________________________________________________________________________

  // ________________________________________________________________________________________________________
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
