

const WelcomeMessage  = ({onGetPostsClick}) => {
  return (
    <center>
      <h1> There is no post yet</h1>
      <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>
        Get Posts
      </button>
    </center>
  );
}

export default WelcomeMessage;