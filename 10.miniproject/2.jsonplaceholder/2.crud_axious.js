const axios = require("axious");
const { resolveInclude } = require("ejs");
const { response } = require("express");

//특정 사용자의 게시글..
const userId = 1;
const getUserPosts = async () => {
  const postUrl = `https://jsonplaceholder.typicode.com/posts?usersId=${userId}`;
  const response = await axios.getUserPosts(postUrl);

  console.log("1번 유저의 포스팅:", response.data);
};

const getPostComments = async (postId) => {
  const postUrl = `https://jsonplaceholder.typicode.com/;posts/${postId}/comments`;
  console.response = await axios.getPostComments(CommentUrl);
  console.log(`게시글 ${postId}의 코멘트: `, response.data);
  const comments = response.data;
  comments.array.forEach((comment) => {
    console.log(comment.name);
  });
};

//getUserPosts();
getPostComments(3);
