import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const initialLikes = post.likes ? post.likes.length : 0;

  const [like, setLike] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/users?userId=${post.userId}`);
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
    setIsLiked(!isLiked);
  };

  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);

  const toggleEditMenu = () => {
    setIsEditMenuOpen(!isEditMenuOpen);
  };
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img className="postProfileImg" src={user.profilePicture || PF + "person/noAvatar.png"} alt="" />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon onClick={toggleEditMenu} />
            {isEditMenuOpen && (
          <div className="editMenu">
            <p>Edit Post</p>
          </div>)}
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
            <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}




