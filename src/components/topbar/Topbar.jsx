import './topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>NexSocial</span>
      </div>
      <div className='topbarCenter'>
        <div className='searchBar'>
          <Search className='searchIcon' />
          <input
            placeholder='Search for friends & posts'
            className='searchInput'
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLink'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarItemIcon'>
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarItemIcon'>
            <Chat />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarItemIcon'>
            <Notifications />
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
        <img src='/assets/person/1.jpg' alt='' className='profilePicture' />
      </div>
    </div>
  );
}
