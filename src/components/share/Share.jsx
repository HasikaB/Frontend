import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useContext,useRef, useState } from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";


export default function Share() {

  const {user} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    } 
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="shareWrapper"> 
      <div className="shareTop">
      <img className="shareProfileImg" src="/assets/person/2.jpg" alt="" />
        <input 
        placeholder="Quick share here" 
        className="shareInput"
        ref={desc}
        />
      </div>
      <hr className="shareHr"/>
        <form className="shareBottom" onSubmit={submitHandler}> 
        <div className="shareOptions">
          <label htmlFor="file" className="shareOption">
            <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
            <span className="shareOptionText">Photo</span>
            <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])}/>
          </label>
          <div className="shareOption">
            <LabelIcon htmlColor="blue" className="shareIcon"/>
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOption">
            <LocationOnIcon htmlColor="green" className="shareIcon"/>
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOption">
            <InsertEmoticonIcon htmlColor="goldenrod" className="shareIcon"/>
            <span className="shareOptionText">Emojis</span>
          </div>
        </div>
        <button className="shareButton" type="submit">Share</button>
        </form>
        </div>
    </div>
  );
}
