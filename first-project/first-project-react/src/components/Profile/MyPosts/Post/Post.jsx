import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img
          src="https://pbs.twimg.com/profile_images/1129091907995492352/H0SkedKK.jpg"
          alt="id-img"
        ></img>
        {props.message}
        <div>{props.likes} likes</div>
        <div>
          <span>Like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
