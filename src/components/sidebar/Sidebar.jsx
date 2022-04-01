import './sidebar.css';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';
export default function Sidebar() {
  return (
    <div className='sideBar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <DynamicFeedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'> Feed</span>
          </li>
          <li className='sidebarListItem'>
            <ChatIcon className='sidebarIcon' />
            <span className='sidebarListItemText'> Chats</span>
          </li>
          <li className='sidebarListItem'>
            <PeopleIcon className='sidebarIcon' />
            <span className='sidebarListItemText'> Groups</span>
          </li>
          <li className='sidebarListItem'>
            <VideoLibraryIcon className='sidebarIcon' />
            <span className='sidebarListItemText'> Videos</span>
          </li>
          <li className='sidebarListItem'>
            <BookmarkAddIcon className='sidebarIcon' />
            <span className='sidebarListItemText'> Bookmarks</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show more...</button>
        <hr className='sidebarHr' />
        <ul className='sidebarFriendsList'>
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
