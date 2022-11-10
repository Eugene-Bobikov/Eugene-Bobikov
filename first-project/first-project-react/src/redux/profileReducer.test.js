import addPostActionCreator from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Hi. How are you?", likesCount: 3 },
    { id: 2, message: "Hi. How are you?", likesCount: 14 },
  ],
};

test("new post should be added", () => {
  // start data
  let action = addPostActionCreator("Eugene");
  //action
  let newState = profileReducer(state, action);
  //expectation
  expect(newState.posts.length).toBe(3);
});
