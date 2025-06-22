import { useRef } from "react";

import { PostList } from "../strore/posts-list-store";

import { useContext } from "react";
const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handelSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/(\s+)/);
    addPost(userId,postTitle,postBody,reaction,tags)


  };


  return (  
    <form className="create-post" onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIdElement}
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
          ref={postTitleElement}
          className="form-control"
          id="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" ref={postBodyElement} className="form-label">
          Post Description
        </label>
        <input type="text" className="form-control" id="body" />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reaction on this Post
        </label>
        <input
          type="text"
          ref={reactionsElement}
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
          ref={tagsElement}
          className="form-control"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
