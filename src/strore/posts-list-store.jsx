import { createContext, useReducer,useState,useEffect } from "react";


export const PostList = createContext({
  postList: [],
  addPost: () => {},

  addPosts: () => {},
  deletePost: () => {},
});
 

const postListReducer = (currentPostList,action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id != action.payload.postId
    );
  } else if (action.type == "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts
    ;
  }
   else if (action.type == "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
}
 
const PostListProvider = ({children}) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,  []);


  // const [fetching, setfetchig] = useState(false);

   

  const addPost = (userId,postTitle,postBody,reaction,tags) => {
    console.log(`${userId}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reaction,
        userId: userId,
        tags: tags
      },
    });

    

  };


  // const addIntialsPosts = (posts) => {
  //     dispatchPostList({
  //       type: "ADD_INITIAL_POSTS",
  //       payload: {
  //        posts,
  //       },
  //     });
  //   };


  const deletePost =(postId) =>  {
    dispatchPostList({
      type:"DELETE_POST",
      payload:{
        postId,

      },
    });
   

  };

  // useEffect(() => {
  //   setfetchig(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addIntialsPosts(data.posts);
  //       setfetchig(false);
  //     });

  //   return () => {
  //     console.log("clen up ");
  //     controller.abort();
  //   };
  // }, []);


  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
  
};


// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Python",
//     body: "Python is a high-level, interpreted programming language with dynamic semantics.",
//     reaction: 100,
//     userId: "1",
//     tags: ["Python", "ML"],
//   },
//   {
//     id: "2",
//     title: "Js",
//     body: "Java is a general-purpose, class-based, object-oriented programming language.",
//     reaction: 2,  
//     userId: "1",
//     tags: ["Js", "React"],
//   },
// ];

export default PostListProvider;