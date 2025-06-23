import Post from "./Post";

import { PostList as PostListData } from "../strore/posts-list-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addIntialsPosts } = useContext(PostListData);
  const [fetching, setfetchig] = useState(false);
  // const [dataFetched , setdataFateched] = useState();

  useEffect(() => {
    setfetchig(true);
    const controller = new AbortController();
    const signal = controller.signal
    fetch("https://dummyjson.com/posts", {signal})
      .then((res) => res.json())
      .then((data) => {
        addIntialsPosts(data.posts);
        setfetchig(false);
      });

    return () => {
      console.log("clen up ");
      controller.abort();


    }
  }, []);

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
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}

      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
