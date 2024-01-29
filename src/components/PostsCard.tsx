import { PostProps } from "../types/index";

const PostsCard = (post: PostProps) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.id}</p>
      <p>{post.views}</p>
      <hr />
    </div>
  );
};

export default PostsCard;
