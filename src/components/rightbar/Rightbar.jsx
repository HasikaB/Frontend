import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const HomeRightbar = () => {
    return(
        <>
        
            <img className="rightbarAd" src="assets/ad.jpg" alt="" />
            <div className="birthdayContainer" style={{ marginBottom: '20px' }}>
                <img className="birthdayImg"src="assets/gift.jpg" alt="" />
                <span className="birthdayText">
                    <b>Jimin </b> and <b>3 other friends </b> have a birthday today.
                    </span>
            </div>

            <h4 className="rightbarTitle">People Online</h4>
            <ul className="rightbarFriendList">
                {Users.map((u)=>(
                    <Online key={u.id} user={u}/>
               ) )}
            </ul>
            
        </>
    );
};

const ProfileRightbar = () => {
    return (
    <>
        <h4 className="rightbarTitle">User Profile</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">coimbatore</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">DOB:</span>
            <span className="rightbarInfoValue">11-may-2004</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship ===1 ? "single": user.relationship ===1 ? "Married" : "single"}</span>
          </div>
        </div>
        <button className="updateProfileButton">Update Profile</button>

        <h4 className="rightbarTitle">Friend Followers</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/1.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jay_krish</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/9.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Doll_Aadhi</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/3.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Somya_hirthy</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/4.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">_Prababoss_</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/5.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Dev_here</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/6.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">__Swara_SAi</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src={`${PF}person/7.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">RajAlishaa_</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src={`${PF}person/8.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Varun Kumar</span>
          </div>

          
        </div>
      </>);
}
    return (
        <div className="rightbar">
           <div className="rightbarWrapper">
           {user ? <ProfileRightbar /> : <HomeRightbar />}
           </div>
        </div>
       
    )
        
}