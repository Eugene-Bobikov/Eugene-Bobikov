import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requaired,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <div className={s.post}>
        <h3>My posts</h3>
      </div>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      {postsElements}
    </div>
  );
};

const addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="..."
          component={Textarea}
          name={"newPostText"}
          validate={[requaired, maxLengthCreator(10)]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
      <div>
        <button>Remove</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  addNewPostForm
);

export default MyPosts;
