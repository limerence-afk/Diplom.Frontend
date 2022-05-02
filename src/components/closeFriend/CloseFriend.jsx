import { Link } from 'react-router-dom';
import './closeFriend.css';

export default function CloseFriend({ user }) {
  return (
    <Link
      key={user._id}
      style={{ textDecoration: 'none', color: 'inherit' }}
      to={'/profile/' + user.username}
    >
      <div>
        <li className='sidebarFriend'>
          <img
            className='sidebarFriendImage'
            src={user.profilePicture}
            alt=''
          />
          <span className='sidebarFriendName'> {user.username}</span>
        </li>
      </div>
    </Link>
  );
}
