import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

export const fetchPosts = () => dispatch => {
  console.log("fething");
  axios.get("https://jsonplaceholder.typicode.com/posts").then(posts =>
    dispatch({
      type: FETCH_POSTS,
      payload: posts.data
    })
  );
};

export const createPost = (postData) => dispatch => {
  axios.post("https://jsonplaceholder.typicode.com/posts", postData).then(post => dispatch({
    type: NEW_POST,
    payload: post.data
  }));
};