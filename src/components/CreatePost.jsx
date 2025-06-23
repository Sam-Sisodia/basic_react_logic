import { useRef } from "react";

import { PostList } from "../strore/posts-list-store";

import { useContext } from "react";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();

  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const reactionsElement = useRef();
  // const tagsElement = useRef();

  // const handelSubmit = (event) => {
  //   event.preventDefault();
  //   const userId = userIdElement.current.value;
  //   const postTitle = postTitleElement.current.value;
  //   const postBody = postBodyElement.current.value;
  //   const reaction = reactionsElement.current.value;
  //   const tags = tagsElement.current.value.split(/(\s+)/);
  //   addPost(userId,postTitle,postBody,reaction,tags)
  //   navigate('/')


  // };


  return (  
    <Form  method="POST" className="create-post" >
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body"  className="form-label">
          Post Description
        </label>
        <input type="text" name ="body" className="form-control" id="body" />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reaction on this Post
        </label>
        <input
          type="text"
          name="reaction"
          className="form-control"
          id="reactions"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter the tags
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};



export async  function CreatePOSTAction(data) {
  const formData=  await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split("");

  console.log("++++++++++++++++++++++++++++++",postData)
  

  fetch("https://dummyjson.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData)
  }).then((res)=>res.json())
  .then((post)=>{
    console.log("+++++++++++++++++++++++++",post)
    // addPost(post);

  })

  return redirect('/');
};
export default CreatePost;
