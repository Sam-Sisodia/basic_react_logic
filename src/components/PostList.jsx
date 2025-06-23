import Post from "./Post"

import {PostList as PostListData} from '../strore/posts-list-store'
import { useContext } from "react"
import WelcomeMessage from './WelcomeMessage'


const PostList = () => {
  const { postList, addIntialsPosts } = useContext(PostListData);
 
  const handelOnClickPosts = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(
        data => {
          addIntialsPosts(data.posts)
        }
      );

  } 
 
  return (
    <>
      {postList.length === 0 && (<WelcomeMessage onGetPostsClick= {handelOnClickPosts} />)}

      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;