import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="post">
      <Link to={`/post/${post._id}`} className="link">
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat" key={c._id}>
              {c.name}
            </span>
          ))}
        </div>
          {post.photo && (
            <img className="postImg" src={PF + post.photo} alt="" />
          )}

          <span className="postTitle">{post.title.slice(0, 50) + ". . . ."}</span>
        
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
        <p className="postDesc">{post.desc}</p>

      </div>
      </Link>
    </div>
  );
}
