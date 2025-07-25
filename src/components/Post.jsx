import { AiFillDelete } from "react-icons/ai";


import { PostList  } from "../strore/posts-list-store";
import { useContext } from "react";

const Post = ({ post }) => {
  const {deletePost} = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={ () => deletePost(post.id)}>
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag,index) => (
          <span key= {index} className="badge text-bg-primary hashtag">{tag}</span>
        ))}
      </div>
      <div className="alert alert-success reactions" role="alert">
        This Post Reacted by {post.reaction} Peoples
      </div>
    </div>
  );
};

export default Post;
