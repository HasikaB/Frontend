import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend";


export default function sidebar() {
    return (
        <div className="sidebar">
            <div className ="sidebarWrapper">
            <ul className="sidebarList">
            <li className ="sidebarListItem">
                    <ChatIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chat</span>
                </li> 

                <li className ="sidebarListItem">
                    <RssFeedIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>

                <li className ="sidebarListItem">
                    <GroupIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Groups</span>
                </li>

                <li className ="sidebarListItem">
                    <PlayCircleFilledIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">videos</span>
                </li>

                <li className ="sidebarListItem">
                    <WorkOutlineIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>

                
                <li className ="sidebarListItem">
                    <EventIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>
                </li>

                <li className ="sidebarListItem">
                    <SchoolIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Courses</span>
                </li>

                <li className ="sidebarListItem">
                    <BookmarksIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>

                <li className ="sidebarListItem">
                    <HelpOutlineIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Questions</span>
                </li>

            </ul>
            <div className="sidebarFollowersText"><strong>Followers</strong></div> {}
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
               {Users.map((u)=>(
                <CloseFriend key={u.id} user={u}/>
               ))}

            </ul>
       
        </div>
        </div>
       
    )
        
}