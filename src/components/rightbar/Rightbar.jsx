import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import { useEffect } from 'react';
import { axiosApi } from '../../network';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Add, Remove } from '@mui/icons-material';

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?._id)
  );

  const handleClick = async () => {
    try {
      if (followed) {
        await axiosApi.put('/users/' + user._id + '/unfollow', {
          userId: currentUser._id,
        });
        dispatch({ type: 'UNFOLLOW', payload: user._id });
      } else {
        await axiosApi.put('/users/' + user._id + '/follow', {
          userId: currentUser._id,
        });
        dispatch({ type: 'FOLLOW', payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };
  const HomeRightBar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='/assets/present.svg' alt='' />
          <span className='birthdayText'>
            <b>John Cena</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='/assets/ad.jpg' alt='' />
        <h4 className='rightbarTitle'>Friends Online</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = ({ user }) => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
      const getFriends = async () => {
        try {
          if (!user._id) return;
          const friendList = await axiosApi.get('/users/friends/' + user._id);
          setFriends(friendList.data);
        } catch (err) {
          console.log(err);
        }
      };
      getFriends();
    }, [user._id]);

    return (
      <>
        {user.username !== currentUser.username && (
          <button className='rightbarFollowButton' onClick={handleClick}>
            {followed ? 'Unfollow' : 'Follow'}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className='rightbarTitle'>User information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>{user.city}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Country:</span>
            <span className='rightbarInfoValue'>{user.from}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 2
                ? 'Married'
                : '-'}
            </span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className='rightbarFollowings'>
          {friends.map((friend) => (
            <Link
              key={friend._id}
              style={{ textDecoration: 'none' }}
              to={'/profile/' + friend.username}
            >
              <div className='rightbarFollowing'>
                <img
                  className='rightbarFollowingImg'
                  src={friend.profilePicture}
                  alt=''
                />
                <span className='rightbarFollowingName'>{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className='rightBar'>
      <div className='rightbarWrapper'>
        {user ? <ProfileRightBar user={user} /> : <HomeRightBar />}
      </div>
    </div>
  );
}
