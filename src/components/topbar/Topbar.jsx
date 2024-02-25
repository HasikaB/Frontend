import "./topbar.css"
import { Notifications, Person } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import Search from "@mui/icons-material/Search";
import { Chat } from "@mui/icons-material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Topbar() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">MEDIA</span>
                </Link>
                
            </div>
            <div className="topbarCenter">
               <div className="searchbar">
                <Search className="searchIcon"/>
                
                <input placeholder = "Search for friend,post or video" className="searchInput"/>
               </div>
            </div>
            <div className="topbarRight">
                <div className="topbarlinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">10</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">8</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon />
                        <span className="topbarIconBadge">2</span>
                    </div>
                </div>
                <Link to={`/profile/john`}>
                <img src={"/assets/person/2.jpg"} alt="" className="topbarImg"/>
                </Link>
            </div>
        </div>
    );
        
}