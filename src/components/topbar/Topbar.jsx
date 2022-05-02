import './topbar.css';
import { Search, Person, Chat } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogOut = () => {
    try {
      dispatch({ type: 'LOG_OUT' });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>NexSocial</span>
        </Link>
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
        <div className='topbarIcons'>
          <Link
            to='/messenger/'
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className='topbarItemIcon'>
              <Chat />
            </div>
          </Link>
          <div
            className='topbarItemIcon'
            onClick={handleLogOut}
            disabled={isFetching}
          >
            <LogoutIcon />
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture} alt='' className='profilePicture' />
        </Link>
      </div>
    </div>
  );
}
