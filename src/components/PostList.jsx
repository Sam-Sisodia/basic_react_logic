import Post from "./Post";

import { PostList as PostListData } from "../strore/posts-list-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList } = useContext(PostListData);
  const postList = useLoaderData();


  // if (! dataFetched){
  //     fetch("https://dummyjson.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         addIntialsPosts(data.posts);
  //       });
  //       setdataFateched(true);

  // }

  // const handelOnClickPosts = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then(
  //       data => {
  //         addIntialsPosts(data.posts)
  //       }
  //     );

  // }

  return (
    <>
      {/* {<LoadingSpinner />} */}
      { postList.length === 0 && <WelcomeMessage />}

      {  postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};




export const PostLoader = () => {

   return fetch("https://dummyjson.com/posts",)
    .then((res) => res.json())
    .then((data) => {
      return data.posts
      // addIntialsPosts(data.posts);
      // setfetchig(false);
    });

}
export default PostList;


