import { useContext, useEffect,useState } from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
 

export default function Feed({username}) {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        const fetchPosts = async () => {
           
                const res = username 
                ? await axios.get("http://localhost:8800/api/posts/profile/" + username)
                : await axios.get("http://localhost:8800/api/posts/timeline/6568c59d7cb6f3663bb3c707");
                setPosts(res.data);
        };
            
      fetchPosts();
    },[username]);
    return (
        <div className="feed">
            <div className="feedWrapper">
              <Share />  
              {posts.map(p=>(
                 <Post key={p._id} post={p} />
              ))}
            </div>
        </div>
       
    );
        
}